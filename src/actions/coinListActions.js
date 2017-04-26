import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS } from '../constants/actionTypes';

export function downloadCoins(coins) {
  return {
    type: DOWNLOAD_COINS,
    coins
  };
}

export function addCoinToPortfolio() {
  return {
    type: ADD_COIN_TO_PORTFOLIO,
  };
}
