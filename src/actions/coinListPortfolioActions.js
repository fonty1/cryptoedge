import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS } from '../constants/actionTypes';
import { UPDATE_USD_HOLDINGS } from '../constants/actionTypes';
import { UPDATE_PERCENTAGE_HOLDINGS } from '../constants/actionTypes';

export function addCoinToPortfolio(coin) {
  return {
    type: ADD_COIN_TO_PORTFOLIO,
    coin
  };
}

export function removeCoinFromPortfolio(position) {
  return {
    type: REMOVE_COIN_FROM_PORTFOLIO,
    position
  };
}

export function updatePortfolioCount(count, position) {
  return {
    type: UPDATE_PORTFOLIOCOIN_COUNT,
    count,
    position
  };
}

export function updatePortfolioTotals() {
  return {
    type: UPDATE_PORTFOLIO_TOTALS
  };
}

export function downloadCoins(coins) {
  return {
    type: DOWNLOAD_COINS,
    coins
  };
}

export function updateUSDHoldings(count, position) {
  return {
    type: UPDATE_USD_HOLDINGS,
    count,
    position
  };
}

export function updatePercentageHoldings(count, position) {
  return {
    type: UPDATE_PERCENTAGE_HOLDINGS,
    count,
    position
  };
}
