import React, { Component } from 'react';

const PortCoin = ( { actions, crypto, index } ) => {
    let val;

    const onChange = e => {
      e.preventDefault()

      let newVal = val.value;
      actions.updatePortfolioCount(newVal, index);
    }
      return (
        <tr className="cryptorank" key={index}>
            <td className="removeCoinFromPortfolioColumn">
                <button onClick={() => actions.removeCoinFromPortfolio(index)} className="removeCoinFromPortfolio">
                    <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                </button>
            </td>
            <td>
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

            </td>
            <td>

            </td>
            <td className="bold">
                ${crypto.formatted_price_usd}
            </td>
            <td>
                {crypto.price_btc}
            </td>
            <td style={crypto.oneHourStyles}>
                {crypto.percent_change_1h}%</td>
            <td style={crypto.twentyFourHourStyles}>
                {crypto.percent_change_24h}%</td>
            <td style={crypto.sevenDayStyles}>
                {crypto.percent_change_7d}%</td>
        </tr>
      )
    }

export default PortCoin;
