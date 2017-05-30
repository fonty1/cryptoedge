import axios from 'axios';
import { addCommas } from '../helpers';
import * as actions from '../actions/coinListPortfolioActions';

import bcap from '../img/bcap.png';
import btc from '../img/btc.png';
import eth from '../img/eth.png';
import ltc from '../img/ltc.png';
import xrp from '../img/xrp.png';
import dash from '../img/dash.png';
import fct from '../img/fct.png';
import xmr from '../img/xmr.png';
import etc from '../img/etc.png';
import xem from '../img/xem.png';
import rep from '../img/rep.png';
import maid from '../img/maid.png';
import pivx from '../img/pivx.png';
import zec from '../img/zec.png';
import gnt from '../img/gnt.png';
import round from '../img/round.png';
import steem from '../img/steem.png';
import xlm from '../img/xlm.png';
import tkn from '../img/tkn.png';
import unknown from '../img/unknown.png';

//const url = "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/?limit=10";
const url = "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/?limit=50";

const api = {
  downloadCoinList: () => {
    return axios.get(url).then(response => {
      let cryptoList = response.data;
      cryptoList = cryptoList.map(function(cryptoRow, index) {
        // Maps Icons to their Coin
        cryptoRow.logo = api.symbolMapping(cryptoRow);
        let BTCPriceMarker = 0;
        let ETHPriceMarker = 0;
        cryptoRow.position = index;

        // Setting defaults of the downloaded coinList
        cryptoRow.percentage = 0;
        cryptoRow.count = 0;
        cryptoRow.coinUSD = 0;
        cryptoRow.formattedCoinUSD = 0;
        cryptoRow.coinBTC = 0;
        cryptoRow.type = 'regular';
        cryptoRow.boughtAt = 0;
        cryptoRow.profitLoss = 0;
        cryptoRow.formattedProfitLoss = 0;
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
        cryptoRow.oneHourStyles = api.heatmapChangeCalc(cryptoRow.percent_change_1h);
        cryptoRow.twentyFourHourStyles = api.heatmapChangeCalc(cryptoRow.percent_change_24h);
        cryptoRow.sevenDayStyles = api.heatmapChangeCalc(cryptoRow.percent_change_7d);

        return cryptoRow;
      });

      return response;
    })
    },

    symbolMapping: (cryptoRow) => {
      switch (cryptoRow.symbol) {
          case "BTC":
              cryptoRow.logo = btc;
              break;
          case "BCAP":
              cryptoRow.logo = bcap;
              break;
          case "ETH":
              cryptoRow.logo = eth;
              break;
          case "LTC":
              cryptoRow.logo = ltc;
              break;
          case "FCT":
              cryptoRow.logo = fct;
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
          case "ROUND":
              cryptoRow.logo = round;
              break;
          case "STEEM":
              cryptoRow.logo = steem;
              break;
          case "TKN":
              cryptoRow.logo = tkn;
              break;
          case "XLM":
              cryptoRow.logo = xlm;
              break;
          default:
              cryptoRow.logo = unknown;
      }
      return cryptoRow.logo;
    },

    heatmapChangeCalc: (changeValue) => {
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
}

export default api
