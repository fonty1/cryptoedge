import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { addCommas } from '../../helpers';
import './CoinList.css';

import btc from '../../img/btc.png';
import eth from '../../img/eth.png';
import ltc from '../../img/ltc.png';
import xrp from '../../img/xrp.png';
import dash from '../../img/dash.png';
import xmr from '../../img/xmr.png';
import etc from '../../img/etc.png';
import xem from '../../img/xem.png';
import rep from '../../img/rep.png';
import maid from '../../img/maid.png';
import pivx from '../../img/pivx.png';
import zec from '../../img/zec.png';
import gnt from '../../img/gnt.png';
import unknown from '../../img/unknown.png';

//const url = "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/?limit=10";
const url = "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/?limit=200";

class CoinList extends Component {
  constructor(props) {
      super(props);
      this.getCryptoList = this.getCryptoList.bind(this);
  }

  componentDidMount() {
      this.getCryptoList();
  }

  getCryptoList() {
    let that = this;
    let BTCPriceMarker = 0;
    let ETHPriceMarker = 0;
    axios.get(url).then(response => {
      let cryptoList = response.data;

      cryptoList = cryptoList.map(function(cryptoRow, index) {
        // Maps Icons to their Coin
        cryptoRow.logo = that.symbolMapping(cryptoRow);

        cryptoRow.position = index;

        // Setting defaults temporarily
        cryptoRow.percentage = 0;
        cryptoRow.count = 0;
        cryptoRow.coinUSD = 0;
        cryptoRow.formattedCoinUSD = 0;
        cryptoRow.coinBTC = 0;
        cryptoRow.type = 'regular';
        const annoyingIdentifier = '24h_volume_usd';
        cryptoRow.twentyfour_volume_usd = cryptoRow.annoyingIdentifier;

        //Set Price Markers
        if (cryptoRow.id === "bitcoin") {
          BTCPriceMarker = cryptoRow.price_usd;
        }
        if (cryptoRow.id === "ethereum") {
          ETHPriceMarker = cryptoRow.price_usd;
        }

        // Currency formatting
        cryptoRow.formatted_price_usd = addCommas(cryptoRow.price_usd);

        // Assigning the Change Styles.
        cryptoRow.oneHourStyles = that.heatmapChangeCalc(cryptoRow.percent_change_1h);
        cryptoRow.twentyFourHourStyles = that.heatmapChangeCalc(cryptoRow.percent_change_24h);
        cryptoRow.sevenDayStyles = that.heatmapChangeCalc(cryptoRow.percent_change_7d);

        return cryptoRow;
      });

      //console.log(cryptoList);
      this.props.actions.downloadCoins(cryptoList);
      this.props.actions.setPriceMarkers(BTCPriceMarker, ETHPriceMarker);
      this.props.actions.updateSavedPortfolio();
      this.props.actions.updateIndividualTotals();
      this.props.actions.updatePortfolioTotals();
      this.props.actions.updatePortfolioPercentage();
      this.props.actions.calculateIndividualProfitLoss();
      return response;
    });
  }

  symbolMapping(cryptoRow) {
    switch (cryptoRow.symbol) {
        case "BTC":
            cryptoRow.logo = btc;
            break;
        case "ETH":
            cryptoRow.logo = eth;
            break;
        case "LTC":
            cryptoRow.logo = ltc;
            break;
        case "XRP":
            cryptoRow.logo = xrp;
            break;
        case "DASH":
            cryptoRow.logo = dash;
            break;
        case "XMR":
            cryptoRow.logo = xmr;
            break;
        case "ETC":
            cryptoRow.logo = etc;
            break;
        case "XEM":
            cryptoRow.logo = xem;
            break;
        case "REP":
            cryptoRow.logo = rep;
            break;
        case "MAID":
            cryptoRow.logo = maid;
            break;
        case "PIVX":
            cryptoRow.logo = pivx;
            break;
        case "ZEC":
            cryptoRow.logo = zec;
            break;
        case "GNT":
            cryptoRow.logo = gnt;
            break;
        default:
            cryptoRow.logo = unknown;
    }
    return cryptoRow.logo;
  }

  heatmapChangeCalc(changeValue) {
    var colorGreenOrRed = '#000';
    if (changeValue > 0 ) {
      // Green RGB numbers
      colorGreenOrRed = '63, 148, 24';
    } else {
      // Red RGB numbers
      colorGreenOrRed = '183, 31, 31';
    }

    var opacity = 0;
    if (changeValue < 5) {
        opacity =  0.2;
      }   else if (changeValue >= 5 && changeValue < 10) {
          opacity =  0.3;
        } else if (changeValue >= 10 && changeValue < 15) {
          opacity =  0.4;
        } else if (changeValue >= 15 && changeValue < 20) {
          opacity =  0.5;
        } else if (changeValue >= 20 && changeValue < 25) {
          opacity =  0.6;
        } else if (changeValue >= 25 && changeValue < 30) {
          opacity =  0.7;
        } else if (changeValue >= 30 && changeValue < 35) {
          opacity =  0.8;
        } else if (changeValue >= 35 && changeValue < 40) {
          opacity =  0.9;
        } else if (changeValue >= 40) {
          opacity =  1;
        } else {
          opacity = 0
        }

    var colorWithOpacity = 'rgba('+ colorGreenOrRed + ',' + opacity + ')';

    var styleObject = {
      borderBottom: '3px solid ' + colorWithOpacity,
      color: 'rgb(' + colorGreenOrRed + ')'
    }

    return styleObject
  }

  render() {
    return (
      <div className="LeaderboardList">
          <Table responsive striped className="cryptotable">
          <thead>
             <tr>
                <th className="addCoinToPortfolioColumn"></th>
                <th>Cap</th>
                <th className="cryptoid">Crypto</th>
                <th className="cryptoPrice">USD</th>
                <th>1 Hr</th>
                <th>24 Hrs</th>
                <th>7 Days</th>
             </tr>
           </thead>
           <tbody>
             {this.props.cryptoList.map(function(crypto, index) {
               return (
                 <tr className="cryptorank" key={index}>
                     <td className="addCoinToPortfolioColumn">
                         <button onClick={() => this.props.actions.addCoinToPortfolio(crypto)} className="addCoinToPortfolio">
                             <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                         </button>
                     </td>
                     <td className="capRank">{crypto.rank}</td>
                     <td className="cryptoid">
                       <img alt={crypto.symbol} src={crypto.logo}/>
                       <span className="cryptoNameFull">{crypto.name + " "}</span>
                       <span className="cryptoSymbol">({crypto.symbol})</span>
                     </td>
                     <td className="bold">${crypto.formatted_price_usd}</td>
                     <td className="percentage__changes" style={crypto.oneHourStyles}>{crypto.percent_change_1h}%</td>
                     <td className="percentage__changes" style={crypto.twentyFourHourStyles}>{crypto.percent_change_24h}%</td>
                     <td className="percentage__changes" style={crypto.sevenDayStyles}>{crypto.percent_change_7d}%</td>
                 </tr>
               ) }, this )}
           </tbody>
          </Table>
      </div>)
  }
}

export default CoinList;
