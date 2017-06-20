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
    //
    //                 <div class="table-row">
    //                    <div class="column index">1</div>
    //                    <div class="name">john</div>
    //                  </div>


    if (crypto.type !== "custom"){
        return (
            <div className="table-row" key={index}>
                <div className="removeCoinFromPortfolioColumn column">
                    <button onClick={() => preRemoveCoin()} className="removeCoinFromPortfolio">
                        <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="flagColumn column" >
                  <span className={" " + (crypto.flag ? crypto.flagColor : ' hide')}>
                    <i className="fa fa-flag" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="capColumn column">
                    <span>{crypto.rank}</span>
                </div>
                <div className="nameColumn column">
                    <img alt={crypto.symbol} src={crypto.logo}/>
                    <span className="cryptoNameFull">{crypto.name + " "}</span>
                    <span className="cryptoSymbol">{crypto.symbol}</span>
                </div>
                <div className="coinCountColumn column">
                    <input
                        value={crypto.count}
                        onChange={onCoinNumberChange}
                        type="number"
                        name={"coinNum-" + index}
                    />
                </div>
                <div className="USDHoldingColumn column">
                    <span>${crypto.formattedCoinUSD}</span>
                </div>
                <div className="percentageHoldingColumn column">
                    <span>{crypto.percentage}%</span>
                </div>
                <div className="boughtAtColumn column">
                  <input
                      value={crypto.boughtAt}
                      onChange={onBoughtAtChange}
                      step="any"
                  />
                </div>
                <div className="profitLossColumn column">
                  <span className="profitLoss">{crypto.formattedProfitLoss}</span>
                </div>
                <div className="volColumn column">
                    <span>${crypto.formattedTwentyfour_volume_usd}</span>
                </div>
                <div className="weightedVolColumn column">
                    <span>{crypto.weightedVolume}</span>
                </div>
                <div className="priceUSDColumn column">
                    <span className="price">${crypto.formatted_price_usd}</span>
                </div>
                <div className="priceBTCColumn column">
                    <span className="price">{crypto.price_btc}</span>
                </div>
                <div className="oneHourColumn percentage__changes column" style={crypto.oneHourStyles}>
                    <span>{crypto.percent_change_1h}%</span>
                </div>
                <div className="twentyFourHoursColumn percentage__changes column" style={crypto.twentyFourHourStyles}>
                    <span>{crypto.percent_change_24h}%</span>
                </div>
                <div className="sevenDaysColumn percentage__changes column" style={crypto.sevenDayStyles}>
                    <span>{crypto.percent_change_7d}%</span>
                </div>
            </div>
        )
    } else {
        return (
          <div className="table-row customCoin" key={index}>
              <div className="removeCoinFromPortfolioColumn column">
                  <button onClick={() => preRemoveCoin()} className="removeCoinFromPortfolio">
                      <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                  </button>
              </div>
              <div className="flagColumn column">
                <span className={" " + (crypto.flag ? crypto.flagColor : ' hide')}>
                  <i className="fa fa-flag" aria-hidden="true"></i>
                </span>
              </div>
              <div className="capColumn column">
              </div>
              <div className="nameColumn column">
                  <img alt={crypto.symbol} src={crypto.logo}/>
                  <input
                      value={crypto.name}
                      onChange={onChangeName}
                      type="text"
                  />
              </div>
              <div className="coinCountColumn column">
                  <input
                      value={crypto.count}
                      onChange={onCoinNumberChange}
                      name={"coinNum-" + index}
                      type="number"
                      step="any"
                  />
              </div>
              <div className="USDHoldingColumn column">
                  ${crypto.formattedCoinUSD}
              </div>
              <div className="percentageHoldingColumn column">
                  {crypto.percentage}%
              </div>
              <div className="boughtAtColumn column">
                <input
                    value={crypto.boughtAt}
                    onChange={onBoughtAtChange}
                    name={"coinNum-" + index}
                    step="any"
                />
              </div>
              <div className="profitLossColumn column">
                  <span className="profitLoss">{crypto.formattedProfitLoss}</span>
              </div>
              <div className="volColumn column"></div>
              <div className="weightedVolColumn column"></div>
              <div className="priceUSDColumn column">
                  <input
                      value={crypto.price_usd}
                      onChange={onChangeUSDPrice}
                      type="number"
                      min="0"
                      step="1"
                  />
              </div>
              <div className="priceBTCColumn column">
                <input
                    value={crypto.price_btc}
                    onChange={onChangeBTCPrice}
                    type="number"
                    min="0"
                    step=".1"
                />
              </div>
              <div className="oneHourColumn percentage__changes column" style={crypto.oneHourStyles}>
              </div>
              <div className="twentyFourHoursColumn percentage__changes column" style={crypto.twentyFourHourStyles}>
              </div>
              <div className="sevenDaysColumn percentage__changes column" style={crypto.sevenDayStyles}>
              </div>
          </div>
        )
    }
}

export default PortCoin;
