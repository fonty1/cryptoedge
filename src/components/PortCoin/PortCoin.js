import React, { Component } from 'react';
import { addCommas } from '../../helpers';

const PortCoin = ( { actions, crypto, index, totalUSD, totalBTC, portfolio } ) => {
    let coinNumberValue = crypto.count;

    const onChange = e => {
      e.preventDefault()
      let newVal = e.target.value;
      let newCoinUSD = newVal * crypto.price_usd;
      let formattedUSD = addCommas(Math.round((newVal * crypto.price_usd).toFixed(2) * 10000) / 10000);
      let newCoinBTC = newVal * crypto.price_btc;
      console.log('onchangetriggered');
      actions.updatePortfolioCount(newVal, index, newCoinUSD, formattedUSD, newCoinBTC);
      actions.updatePortfolioTotals();
      actions.updatePortfolioPercentage();
    }

    const forceUpdateInput = () => {
        // const thisInput = document.querySelectorAll('input[name$="coinNum-'+index+'"]');
        // if (thisInput) {
        //     thisInput.val = crypto.count;
        // }
    }

    const preRemoveCoin = () => {
        actions.removeCoinFromPortfolio(index);
        actions.updatePortfolioTotals();
        actions.updatePortfolioPercentage();
        console.log('preRemoveCoin triggered');
        console.log('coinNumberValue.value: ' + coinNumberValue.value);

    }

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
                    onChange={onChange}
                    type="number"
                    name={"coinNum-" + index}
                />
            </td>
            <td className="yourCoinUsd">
                ${crypto.formattedCoinUSD}
            </td>
            <td className="yourCoinPercentage">
                {crypto.percentage}%
            </td>
            <td className="PriceUsd">
                ${crypto.formatted_price_usd}
            </td>
            <td className="priceBtc">
                {crypto.price_btc}
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

export default PortCoin;
