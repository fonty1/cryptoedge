import React from 'react';
import { addCommas } from '../../helpers';

const PortCoin = ( { actions, crypto, index, totalUSD, totalBTC, portfolio, BTCPriceMarker } ) => {
    const onCoinNumberChange = e => {
      e.preventDefault()
      let newVal = e.target.value;
      let newCoinUSD = newVal * crypto.price_usd;
      let formattedUSD = addCommas(Math.round((newCoinUSD).toFixed(2) * 10000) / 10000);
      let newCoinBTC = newVal * crypto.price_btc;

      actions.updatePortfolioCount(newVal, index, newCoinUSD, formattedUSD, newCoinBTC);
      actions.updatePortfolioTotals();
      actions.updatePortfolioPercentage();
      actions.calculateIndividualProfitLoss();
    }

    const onChangeName = e => {
        e.preventDefault()
        let newVal = e.target.value;
        actions.updateCustomName(newVal, index);
    }

    const onChangeUSDPrice = e => {
        e.preventDefault()
        let newUSDPriceVal = e.target.value;
        let newCoinUSD = newUSDPriceVal * crypto.count;
        let formattedUSD = addCommas(Math.round((newCoinUSD).toFixed(2) * 10000) / 10000);
        let calcdBTCPrice = Math.round((newUSDPriceVal / BTCPriceMarker).toFixed(6) * 1000000) / 1000000;

        actions.updateCustomUSDPrice(newUSDPriceVal, index, calcdBTCPrice);
        actions.updatePortfolioCount(crypto.count, index, newCoinUSD, formattedUSD, calcdBTCPrice);
        actions.calculateIndividualProfitLoss();
        actions.updatePortfolioTotals();
        actions.updatePortfolioPercentage();
    }

    const onChangeBTCPrice = e => {
        e.preventDefault()
        let newBTCPriceVal = (e.target.value * 100000) / 100000;
        let newCoinUSD = newBTCPriceVal * crypto.count * BTCPriceMarker;
        let formattedUSD = addCommas(Math.round((newCoinUSD).toFixed(2) * 10000) / 10000);
        let calcdUSDPrice = ((newBTCPriceVal * BTCPriceMarker) * 10000) / 10000;

        actions.updateCustomBTCPrice(newBTCPriceVal, index, calcdUSDPrice);
        actions.updatePortfolioCount(crypto.count, index, newCoinUSD, formattedUSD, newBTCPriceVal, crypto.boughtAt);
        actions.calculateIndividualProfitLoss();
        actions.updatePortfolioTotals();
        actions.updatePortfolioPercentage();
    }

    const onBoughtAtChange = e => {
        e.preventDefault()
        let newboughtAtUSDPriceVal = e.target.value;
        actions.calculateIndividualProfitLoss(newboughtAtUSDPriceVal);
    }

    const preRemoveCoin = () => {
        actions.removeCoinFromPortfolio(index);
        actions.updatePortfolioTotals();
        actions.updatePortfolioPercentage();
    }

    if (crypto.type !== "custom"){
        return (
            <tr className="cryptorank" key={index}>
                <td className="removeCoinFromPortfolioColumn">
                    <button onClick={() => preRemoveCoin()} className="removeCoinFromPortfolio">
                        <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                    </button>
                </td>
                <td className="capRank">
                    {crypto.rank}
                </td>
                <td className="cryptoid">
                    <img alt={crypto.symbol} src={crypto.logo}/>
                    <span className="cryptoNameFull">{crypto.name + " "}</span>
                    <span className="cryptoSymbol">({crypto.symbol})</span>
                </td>
                <td className="yourCoinNumber">
                    <input
                        value={crypto.count}
                        onChange={onCoinNumberChange}
                        type="number"
                        name={"coinNum-" + index}
                        min="0"
                        step="any"
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                </td>
                <td className="yourCoinUsd">
                    ${crypto.formattedCoinUSD}
                </td>
                <td className="yourCoinPercentage">
                    {crypto.percentage}%
                </td>
                <td className="boughtAt">
                  <input
                      value={crypto.boughtAt}
                      onChange={onBoughtAtChange}
                      type="number"
                      min="0"
                      step="any"
                  />
                </td>
                <td className="profitLoss">
                    <span className="profitLoss">${crypto.profitLoss}</span>
                </td>
                <td className="priceUsd">
                    <span className="price">${crypto.formatted_price_usd}</span>
                </td>
                <td className="priceBtc">
                    <span className="price">{crypto.price_btc}</span>
                </td>
                <td className="percentage__changes" style={crypto.oneHourStyles}>
                    {crypto.percent_change_1h}%</td>
                <td className="percentage__changes" style={crypto.twentyFourHourStyles}>
                    {crypto.percent_change_24h}%</td>
                <td className="percentage__changes" style={crypto.sevenDayStyles}>
                    {crypto.percent_change_7d}%</td>
            </tr>
        )
    } else {
        return (
          <tr className="cryptorank customCoin" key={index}>
              <td className="removeCoinFromPortfolioColumn">
                  <button onClick={() => preRemoveCoin()} className="removeCoinFromPortfolio">
                      <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                  </button>
              </td>
              <td className="capRank">
                  {crypto.rank}
              </td>
              <td className="cryptoid">
                  <img alt={crypto.symbol} src={crypto.logo}/>
                  <input
                      value={crypto.name}
                      onChange={onChangeName}
                      type="text"
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
              </td>
              <td className="yourCoinNumber">
                  <input
                      value={crypto.count}
                      onChange={onCoinNumberChange}
                      type="number"
                      name={"coinNum-" + index}
                      min="0"
                      step="any"
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
              </td>
              <td className="yourCoinUsd">
                  ${crypto.formattedCoinUSD}
              </td>
              <td className="yourCoinPercentage">
                  {crypto.percentage}%
              </td>
              <td className="boughtAt">
                <input
                    value={crypto.boughtAt}
                    onChange={onBoughtAtChange}
                    type="number"
                    name={"coinNum-" + index}
                    min="0"
                    step="any"
                />
              </td>
              <td className="profitLoss">
                  <span className="profitLoss">${crypto.profitLoss}</span>
              </td>
              <td className="priceUsd">
                  <input
                      value={crypto.price_usd}
                      onChange={onChangeUSDPrice}
                      type="number"
                      min="0"
                      step="1"
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
              </td>
              <td className="priceBtc">
                <input
                    value={crypto.price_btc}
                    onChange={onChangeBTCPrice}
                    type="number"
                    min="0"
                    step=".1"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
              </td>
              <td className="percentage__changes" style={crypto.oneHourStyles}>
                  {crypto.percent_change_1h}%</td>
              <td className="percentage__changes" style={crypto.twentyFourHourStyles}>
                  {crypto.percent_change_24h}%</td>
              <td className="percentage__changes" style={crypto.sevenDayStyles}>
                  {crypto.percent_change_7d}%</td>
          </tr>
        )
    }
}

export default PortCoin;
