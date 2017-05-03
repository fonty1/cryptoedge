import React, { Component } from 'react';
import { addCommas } from '../../helpers';

const PortCoin = ( { actions, crypto, index, totalUSD, totalBTC } ) => {
    let val;


    const onChange = e => {
      e.preventDefault()
      let newVal = val.value;
      let formattedUSD = addCommas(Math.round((newVal * crypto.price_usd) * 10000) / 10000);
      let newTotalUSD = 0
      let newTotalBTC = 0
      let percentage = 0;
      
      // This code only adds.. never removes.
      if(typeof crypto.coinUSD !== "undefined") {
          newTotalUSD = Number(totalUSD) + Number(newVal * crypto.price_usd) - Number(crypto.coinUSD);
          newTotalBTC = Number(totalBTC) + Number(newVal * crypto.price_btc) - Number(crypto.coinBTC);
      } else {
          newTotalUSD = Number(totalUSD) + Number(newVal * crypto.price_usd);
          newTotalBTC = Number(totalBTC) + Number(newVal * crypto.price_btc);
      }

      actions.updatePortfolioCount(newVal, index, formattedUSD, percentage, newTotalUSD, newTotalBTC);
    }

    const calcTotals = () => {

    }

    const calcPercentage = () => {

    }

    const preRemoveCoin = () => {
        let newTotalUSD = totalUSD - crypto.coinUSD;
        let newTotalBTC = totalBTC - crypto.coinBTC;
        actions.removeCoinFromPortfolio(index, newTotalUSD, newTotalBTC);
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
                <img alt={crypto.symbol} src={crypto.logo}/>{crypto.name}
                 &nbsp;<span className="cryptoSymbol">({crypto.symbol})</span></td>
            <td className="yourCoinNumber">
                <input
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
