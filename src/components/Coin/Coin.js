import React, { Component } from 'react';
import { Input } from 'react-bootstrap';

const Coin = ( { actions, crypto, index } ) => {
    return (
        <tr className="cryptorank">
            <td>
                <button onClick={() => actions.addCoinToPortfolio('boop')} className="addCoinToPortfolio">
                    <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                </button>
            </td>
            <td>{crypto.rank}</td>
            <td className="cryptoid">
                <img alt={crypto.symbol} src={crypto.logo}/>{crypto.name}
                 &nbsp;<span className="cryptoSymbol">({crypto.symbol})</span>
            </td>
            <td className="bold">${crypto.formatted_price_usd}</td>
            <td className="percentage__changes" style={crypto.oneHourStyles}>{crypto.percent_change_1h}%</td>
            <td className="percentage__changes" style={crypto.twentyFourHourStyles}>{crypto.percent_change_24h}%</td>
            <td className="percentage__changes" style={crypto.sevenDayStyles}>{crypto.percent_change_7d}%</td>
        </tr>
    )
}

export default Coin;
