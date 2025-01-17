import axios from 'axios';
import { addCommas } from '../helpers';
import * as actions from '../actions/coinListPortfolioActions';

import bcap from '../img/bcap.png';
import bcc from '../img/bcc.png';
import bcn from '../img/bcn.png';
import btc from '../img/btc.png';
import bts from '../img/bts.png';
import doge from '../img/doge.png';
import dgb from '../img/dgb.png';
import eos from '../img/eos.png';
import eth from '../img/eth.png';
import qtum from '../img/qtum.png';
import gno from '../img/gno.png';
import miota from '../img/miota.png';
import ltc from '../img/ltc.png';
import xrp from '../img/xrp.png';
import dash from '../img/dash.png';
import icn from '../img/icn.png';
import lsk from '../img/lsk.png';
import fct from '../img/fct.png';
import xmr from '../img/xmr.png';
import etc from '../img/etc.png';
import xem from '../img/xem.png';
import rep from '../img/rep.png';
import maid from '../img/maid.png';
import ans from '../img/ans.png';
import pivx from '../img/pivx.png';
import zec from '../img/zec.png';
import gnt from '../img/gnt.png';
import round from '../img/round.png';
import sc from '../img/sc.png';
import steem from '../img/steem.png';
import strat from '../img/strat.png';
import tkn from '../img/tkn.png';
import xlm from '../img/xlm.png';
import waves from '../img/waves.png';
import veri from '../img/veri.png';
import usdt from '../img/usdt.png';
import unknown from '../img/unknown.png';

//const url = "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/?limit=10";
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=300";
const marketDataUrl = "https://api.coinmarketcap.com/v1/global/";

const api = {
  downloadMarketData: () => {
    return axios.get(marketDataUrl).then(response => {
      let marketData = response.data;
      return response;
    });
  },
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
        cryptoRow.price_usd = Number(cryptoRow.price_usd);
        cryptoRow.price_btc = Number(cryptoRow.price_btc);
        cryptoRow.percent_change_1h = Number(cryptoRow.percent_change_1h);
        cryptoRow.percent_change_24h = Number(cryptoRow.percent_change_24h);
        cryptoRow.percent_change_7d = Number(cryptoRow.percent_change_7d);
        cryptoRow.market_cap_usd = Number(cryptoRow.market_cap_usd);
        cryptoRow.market_cap_usd_formatted = addCommas(cryptoRow.market_cap_usd);
        cryptoRow.percentage = '';
        cryptoRow.count = '';
        cryptoRow.coinUSD = '';
        cryptoRow.formattedCoinUSD = '';
        cryptoRow.coinBTC = '';
        cryptoRow.type = 'regular';
        cryptoRow.boughtAt = '';
        cryptoRow.profitLoss = '';
        cryptoRow.rank = Number(cryptoRow.rank);
        cryptoRow.formattedProfitLoss = '';
        const annoyingIdentifier = '24h_volume_usd';
        cryptoRow.twentyfour_volume_usd = Number(cryptoRow[annoyingIdentifier]);
        cryptoRow.formattedTwentyfour_volume_usd = addCommas(cryptoRow.twentyfour_volume_usd);
        cryptoRow.flag = false;
        cryptoRow.flagColor = 'black';

        //Compute Weighted volume
        cryptoRow.weightedVolume = ((cryptoRow.twentyfour_volume_usd * 100) / cryptoRow.market_cap_usd).toFixed(2);

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
          case "BCC":
              cryptoRow.logo = bcc;
              break;
          case "BTC":
              cryptoRow.logo = btc;
              break;
          case "BTS":
              cryptoRow.logo = bts;
              break;
          case "BCAP":
              cryptoRow.logo = bcap;
              break;
          case "BCN":
              cryptoRow.logo = bcn;
              break;
          case "DOGE":
              cryptoRow.logo = doge;
              break;
          case "DGB":
              cryptoRow.logo = dgb;
              break;
          case "ICN":
              cryptoRow.logo = icn;
              break;
          case "LSK":
              cryptoRow.logo = lsk;
              break;
          case "EOS":
              cryptoRow.logo = eos;
              break;
          case "ETH":
              cryptoRow.logo = eth;
              break;
          case "GNO":
              cryptoRow.logo = gno;
              break;
          case "MIOTA":
              cryptoRow.logo = miota;
              break;
          case "ANS":
              cryptoRow.logo = ans;
              break;
          case "QTUM":
              cryptoRow.logo = qtum;
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
          case "SC":
              cryptoRow.logo = sc;
              break;
          case "STEEM":
              cryptoRow.logo = steem;
              break;
          case "STRAT":
              cryptoRow.logo = strat;
              break;
          case "TKN":
              cryptoRow.logo = tkn;
              break;
          case "WAVES":
              cryptoRow.logo = waves;
              break;
          case "VERI":
              cryptoRow.logo = veri;
              break;
          case "USDT":
              cryptoRow.logo = usdt;
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
        // borderBottom: '3px solid ' + colorWithOpacity,
        color: 'rgb(' + colorGreenOrRed + ')'
      }

      return styleObject
    }
}

export default api
