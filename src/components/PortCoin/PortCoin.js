import React, { Component } from 'react';

const PortCoin = ( { actions, crypto, index } ) => {
    let val;

    const onChange = e => {
      e.preventDefault()
      let newVal = val.value;
      let formattedUSD = (newVal * crypto.price_usd);
      actions.updatePortfolioCount(newVal, index, formattedUSD);
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
                    ref={ el => val = el }
                    onChange={onChange}
                />
            </td>
            <td>
                ${crypto.coinUSD}
            </td>
            <td>
                {crypto.coinPercentage}%
            </td>
            <td className="bold">
                ${crypto.formatted_price_usd}
            </td>
            <td>
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
