import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_PERCENTAGE } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS } from '../constants/actionTypes';
import { UPDATE_SAVED_PORTFOLIO } from '../constants/actionTypes';

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
