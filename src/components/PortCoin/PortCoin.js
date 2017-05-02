import React, { Component } from 'react';
import { addCommas } from '../../helpers';

const PortCoin = ( { actions, crypto, index } ) => {
    let val;

    const onChange = e => {
      e.preventDefault()
      let newVal = val.value;
      let formattedUSD = addCommas(Math.round((newVal * crypto.price_usd) * 10000) / 10000);
      let addedUSD = 0;
      let addedBTC = 0;
      actions.updatePortfolioCount(newVal, index, formattedUSD, addedUSD, addedBTC);
    }

      return (
        <tr className="cryptorank" key={index}>
            <td className="removeCoinFromPortfolioColumn">
                <button onClick={() => actions.removeCoinFromPortfolio(index)} className="removeCoinFromPortfolio">
                    <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                </button>
            </td>
            <td className="capRank">
                {crypto.rank}
            </td>
            <td className="cryptoid">
                <img alt={crypto.symbol} src={crypto.logo}/>{crypto.name}
                 &nbsp;<span className="cryptoSymbol">({crypto.symbol})</span></td>
            <td>
                <input
                    className="yourCoinNumber"
                    defaultValue= {0}
                    ref={ el => val = el }
                    onChange={onChange}
                />
            </td>
            <td className="yourCoinUsd">
                ${crypto.coinUSD}
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
