import React from 'react';
import { addCommas } from '../../helpers';

const PortCoin = ( { actions, crypto, index, totalUSD, totalBTC, portfolio, BTCPriceMarker } ) => {
    const onCoinNumberChange = e => {
      e.preventDefault()
      let newVal = Number(e.target.value);
      let newCoinUSD = newVal * crypto.price_usd;
      let formattedUSD = addCommas(Math.round((newCoinUSD).toFixed(2) * 10000) / 10000);
      let newCoinBTC = newVal * crypto.price_btc;

      actions.updatePortfolioCount(newVal, index, newCoinUSD, formattedUSD, newCoinBTC);
      actions.updateIndividualTotals();
      actions.updatePortfolioTotals();
      actions.updatePortfolioPercentage();
      actions.calculatePortfolioTotalPercentages();
      // Perectage calculation, always after total calculation
    }

    const onChangeName = e => {
        e.preventDefault()
        let newVal = e.target.value;
        actions.updateCustomName(newVal, index);
    }

    const onChangeUSDPrice = e => {
        e.preventDefault()
        let newUSDPriceVal = Number(e.target.value);
        let newCoinUSD = newUSDPriceVal * crypto.count;
        let formattedUSD = addCommas(Math.round((newCoinUSD).toFixed(2) * 10000) / 10000);
        let calcdBTCPrice = Math.round((newUSDPriceVal / BTCPriceMarker).toFixed(6) * 1000000) / 1000000;

        actions.updateCustomUSDPrice(newUSDPriceVal, index, calcdBTCPrice);
        actions.updatePortfolioCount(crypto.count, index, newCoinUSD, formattedUSD, calcdBTCPrice);
        actions.updateIndividualTotals();
        actions.updatePortfolioTotals();
        actions.updatePortfolioPercentage();
        actions.calculatePortfolioTotalPercentages();
    }

    const onChangeBTCPrice = e => {
        e.preventDefault()
        let newBTCPriceVal = Number((e.target.value * 100000) / 100000);
        let newCoinUSD = newBTCPriceVal * crypto.count * BTCPriceMarker;
        let formattedUSD = addCommas(Math.round((newCoinUSD).toFixed(2) * 10000) / 10000);
        let calcdUSDPrice = ((newBTCPriceVal * BTCPriceMarker) * 10000) / 10000;

        actions.updateCustomBTCPrice(newBTCPriceVal, index, calcdUSDPrice);
        actions.updatePortfolioCount(crypto.count, index, newCoinUSD, formattedUSD, newBTCPriceVal);
        actions.updateIndividualTotals();
        actions.updatePortfolioTotals();
        actions.updatePortfolioPercentage();
        actions.calculatePortfolioTotalPercentages();
    }

    const onBoughtAtChange = e => {
        e.preventDefault()
        let newboughtAtUSDPriceVal = Number(e.target.value);

        actions.updateIndividualTotals(newboughtAtUSDPriceVal, index);
        actions.updatePortfolioTotals();
    }

    const preRemoveCoin = () => {
        actions.removeCoinFromPortfolio(index);
    }

    // On Flag click - edit

    if (crypto.type !== "custom"){
        return (
            <tr className="" key={index}>
                <td className="">
                </td>
                <td className="removeCoinFromPortfolioColumn">
                    <button onClick={() => preRemoveCoin()} className="removeCoinFromPortfolio">
                        <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                    </button>
                </td>
                <td className="flagColumn">
                  <span style={crypto.flagStyle}>
                    <i className="fa fa-flag" aria-hidden="true"></i>
                  </span>
                </td>
                <td className="capColumn">
                    {crypto.rank}
                </td>
                <td className="nameColumn">
                    <img alt={crypto.symbol} src={crypto.logo}/>
                    <span className="cryptoNameFull">{crypto.name + " "}</span>
                    <span className="cryptoSymbol">{crypto.symbol}</span>
                </td>
                <td className="coinCountColumn">
                    <input
                        value={crypto.count}
                        onChange={onCoinNumberChange}
                        name={"coinNum-" + index}
                    />
                </td>
                <td className="USDHoldingColumn">
                    ${crypto.formattedCoinUSD}
                </td>
                <td className="percentageHoldingColumn">
                    {crypto.percentage}%
                </td>
                <td className="boughtAtColumn">
                  <input
                      value={crypto.boughtAt}
                      onChange={onBoughtAtChange}
                      step="any"
                  />
                </td>
                <td className="profitLossColumn">
                  <span className="profitLoss">${crypto.formattedProfitLoss}</span>
                </td>
                <td className="volColumn">${crypto.formattedTwentyfour_volume_usd}</td>
                <td className="weightedVolColumn">{crypto.weightedVolume}</td>
                <td className="priceUSDColumn">
                    <span className="price">${crypto.formatted_price_usd}</span>
                </td>
                <td className="priceBTCColumn">
                    <span className="price">{crypto.price_btc}</span>
                </td>
                <td className="oneHourColumn percentage__changes" style={crypto.oneHourStyles}>
                    {crypto.percent_change_1h}%</td>
                <td className="twentyFourHoursColumn percentage__changes" style={crypto.twentyFourHourStyles}>
                    {crypto.percent_change_24h}%</td>
                <td className="sevenDaysColumn percentage__changes" style={crypto.sevenDayStyles}>
                    {crypto.percent_change_7d}%</td>
                <td className="">
                </td>
            </tr>
        )
    } else {
        return (
          <tr className="customCoin" key={index}>
              <td className="">
              </td>
              <td className="removeCoinFromPortfolioColumn">
                  <button onClick={() => preRemoveCoin()} className="removeCoinFromPortfolio">
                      <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                  </button>
              </td>
              <td className="flagColumn">
                <span style={crypto.flagStyle}>
                  <i className="fa fa-flag" aria-hidden="true"></i>
                </span>
              </td>
              <td className="capColumn">
              </td>
              <td className="nameColumn">
                  <img alt={crypto.symbol} src={crypto.logo}/>
                  <input
                      value={crypto.name}
                      onChange={onChangeName}
                      type="text"
                  />
              </td>
              <td className="coinCountColumn">
                  <input
                      value={crypto.count}
                      onChange={onCoinNumberChange}
                      name={"coinNum-" + index}
                      step="any"
                  />
              </td>
              <td className="USDHoldingColumn">
                  ${crypto.formattedCoinUSD}
              </td>
              <td className="percentageHoldingColumn">
                  {crypto.percentage}%
              </td>
              <td className="boughtAtColumn">
                <input
                    value={crypto.boughtAt}
                    onChange={onBoughtAtChange}
                    name={"coinNum-" + index}
                    step="any"
                />
              </td>
              <td className="profitLossColumn">
                  <span className="profitLoss">${crypto.formattedProfitLoss}</span>
              </td>
              <td className="volColumn"></td>
              <td className="weightedVolColumn"></td>
              <td className="priceUSDColumn">
                  <input
                      value={crypto.price_usd}
                      onChange={onChangeUSDPrice}
                      type="number"
                      min="0"
                      step="1"
                  />
              </td>
              <td className="priceBTCColumn">
                <input
                    value={crypto.price_btc}
                    onChange={onChangeBTCPrice}
                    type="number"
                    min="0"
                    step=".1"
                />
              </td>
              <td className="oneHourColumn percentage__changes" style={crypto.oneHourStyles}>
              </td>
              <td className="twentyFourHoursColumn percentage__changes" style={crypto.twentyFourHourStyles}>
              </td>
              <td className="sevenDaysColumn percentage__changes" style={crypto.sevenDayStyles}>
              </td>
              <td className="">
              </td>
          </tr>
        )
    }
}

export default PortCoin;
