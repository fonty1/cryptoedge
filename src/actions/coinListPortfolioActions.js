import CoinMarketCapApi from '../api/CoinMarketCapApi';

import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_PERCENTAGE } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS_PENDING } from '../constants/actionTypes';
import { DOWNLOAD_COINS_FULFILLED } from '../constants/actionTypes';
import { SET_PRICE_MARKERS } from '../constants/actionTypes';
import { UPDATE_SAVED_PORTFOLIO } from '../constants/actionTypes';
import { ADD_CUSTOM_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { UPDATE_CUSTOM_NAME } from '../constants/actionTypes';
import { UPDATE_CUSTOM_BTC } from '../constants/actionTypes';
import { UPDATE_CUSTOM_USD } from '../constants/actionTypes';
import { UPDATE_INDIVIDUAL_TOTALS } from '../constants/actionTypes';
import { SORTLIST } from '../constants/actionTypes';
import customCoinLogo from '../img/customcoin.png';

export function sortList(column, list) {
  //How to do sortToggle?
  return {
    type: SORTLIST,
    column,
    list
  };
}

export function addCoinToPortfolio(coin) {
  return {
    type: ADD_COIN_TO_PORTFOLIO,
    coin
  };
}

export function removeCoinFromPortfolio(position) {
    return (dispatch) => {
      dispatch ({
        type: REMOVE_COIN_FROM_PORTFOLIO,
        position
      });
      dispatch({
        type: UPDATE_PORTFOLIO_TOTALS
      });
      dispatch({
        type: UPDATE_PORTFOLIO_PERCENTAGE
      });
    }
}

export function updatePortfolioTotals() {
  return {
    type: UPDATE_PORTFOLIO_TOTALS
  };
}

export function downloadCoins() {
  return async (dispatch) => {
    dispatch({
      type: DOWNLOAD_COINS_PENDING
    });
      try {
        const coinsReceived = await CoinMarketCapApi.downloadCoinList();
        dispatch({
          type: DOWNLOAD_COINS_FULFILLED,
          coins: coinsReceived.data
        });
        dispatch({
          type: UPDATE_SAVED_PORTFOLIO,
          coins: coinsReceived.data
        });
        let BTCPriceMarker = coinsReceived.data.find( function( crypto ){
          return crypto.id === 'bitcoin';
        } );
        let ETHPriceMarker = coinsReceived.data.find( function( crypto ){
          return crypto.id === 'ethereum';
        } );
        BTCPriceMarker = Number(BTCPriceMarker.price_usd).toFixed(6);
        ETHPriceMarker = Number(ETHPriceMarker.price_usd).toFixed(6);
        dispatch({
          type: SET_PRICE_MARKERS,
          BTCPriceMarker,
          ETHPriceMarker
        });
        dispatch({
          type: UPDATE_INDIVIDUAL_TOTALS
        });
        dispatch({
          type: UPDATE_PORTFOLIO_TOTALS
        });
        dispatch({
          type: UPDATE_PORTFOLIO_PERCENTAGE
        });
      }
      catch (e) {
        console.log(e);
        const error = JSON.parse(e.error).error;
        console.log(error);
      };
    }
}

export function updateSavedPortfolio() {
  return {
    type: UPDATE_SAVED_PORTFOLIO
  };
}

export function updatePortfolioCount(count, position, coinUSD, formattedUSD, coinBTC) {
  return {
    type: UPDATE_PORTFOLIOCOIN_COUNT,
    count,
    position,
    coinUSD,
    formattedUSD,
    coinBTC
  };
}

export function updatePortfolioPercentage() {
  return {
    type: UPDATE_PORTFOLIO_PERCENTAGE
  };
}

export function updateCustomName(name, position) {
  return {
    type: UPDATE_CUSTOM_NAME,
    name,
    position
  };
}

export function updateCustomBTCPrice(price_btc, position, price_usd) {
  return {
    type: UPDATE_CUSTOM_BTC,
    price_btc,
    position,
    price_usd
  };
}

export function updateCustomUSDPrice(price_usd, position, price_btc) {
  return {
    type: UPDATE_CUSTOM_USD,
    price_usd,
    position,
    price_btc
  };
}

export function addCustomCoinToPortfolio() {
  let customCoin = {
    id: "custom",
    name: "Custom Coin",
    symbol: "C",
    rank: "C",
    price_usd: 0,
    price_btc: 0,
    twentyfour_volume_usd: 0,
    market_cap_usd: 0,
    available_supply: 0,
    total_supply: 0,
    percent_change_1h: 0,
    percent_change_24h: 0,
    percent_change_7d: 0,
    last_updated: 0,
    logo: customCoinLogo,
    position: 0,
    percentage: 0,
    count: 0,
    coinUSD: 0,
    formattedCoinUSD: 0,
    coinBTC: 0,
    formatted_price_usd: 0,
    type: "custom",
    boughtAt: 0,
    profitLoss: 0,
    formattedProfitLoss: 0
  };
  return {
    type: ADD_CUSTOM_COIN_TO_PORTFOLIO,
    customCoin
  };
}

export function setPriceMarkers(BTCPriceMarker, ETHPriceMarker) {
  return {
    type: SET_PRICE_MARKERS,
    BTCPriceMarker,
    ETHPriceMarker
  };
}

export function updateIndividualTotals(boughtAt, position) {
  return {
    type: UPDATE_INDIVIDUAL_TOTALS,
    boughtAt,
    position
  };
}
