import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { addCommas } from '../helpers';
import Coin from '../Coin/CoinContainer'
import './CoinList.css';

import logo from './logo.svg';
import btc from './img/btc.png';
import eth from './img/eth.png';
import ltc from './img/ltc.png';
import xrp from './img/xrp.png';
import dash from './img/dash.png';
import xmr from './img/xmr.png';
import etc from './img/etc.png';
import xem from './img/xem.png';
import rep from './img/rep.png';
import maid from './img/maid.png';
import pivx from './img/pivx.png';
import zec from './img/zec.png';
import gnt from './img/gnt.png';
import unknown from './img/unknown.png';

const url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

class CoinList extends Component {
  constructor(props) {
      super(props);
      this.addCoinToPortfolio = this.addCoinToPortfolio.bind(this);
      this.getCryptoList = this.getCryptoList.bind(this);
  }

  componentDidMount() {
      this.getCryptoList();
  }

  getCryptoList() {
    let that = this;
    axios.get(url).then(response => {
      var cryptoList = response.data;
      var btcVal = cryptoList[0].market_cap_usd;

      cryptoList = cryptoList.map(function(cryptoRow) {
        // Maps Icons to their Coin
        cryptoRow.logo = that.symbolMapping(cryptoRow);

        // Currency formatting
        cryptoRow.formatted_price_usd = addCommas(cryptoRow.price_usd);

        // Calculates the Coin's relative BTC val
        cryptoRow.btcVal = Math.round((cryptoRow.market_cap_usd / btcVal) * 10000) / 100;

        // Assigning the Change Styles.
        cryptoRow.oneHourStyles = that.heatmapChangeCalc(cryptoRow.percent_change_1h);
        cryptoRow.twentyFourHourStyles = that.heatmapChangeCalc(cryptoRow.percent_change_24h);
        cryptoRow.sevenDayStyles = that.heatmapChangeCalc(cryptoRow.percent_change_7d);

        return cryptoRow;
      });

      console.log(cryptoList);
      //this.setState({ cryptoList: cryptoList });

      return response;
    });
  }

  addCoinToPortfolio(coinKey) {
    let percent_change_1h = 999;
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
    var Coins = this.props.cryptoList.map(function(crypto, index){
      return (
                 <Coin key={ index } index={ index } />
             )
    }, this);

    return (
      <div className="LeaderboardList">
          <h4>Coin List</h4>
          <Table responsive striped className="cryptotable">
          <thead>
             <tr>
                <th className="addCoinToPortfolioColumn">Portfolio</th>
                <th>Rank</th>
                <th className="cryptoid">Crypto Currency</th>
                <th className="cryptoPrice">USD</th>
                <th>1 Hour</th>
                <th>24 Hours</th>
                <th>7 Days</th>
             </tr>
           </thead>
           <tbody>
               {Coins}
           </tbody>
          </Table>
      </div>)
  }
}

export default CoinList;
