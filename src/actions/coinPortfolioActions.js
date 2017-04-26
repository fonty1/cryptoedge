import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';

export function removeCoinToPortfolio() {
  return {
    type: REMOVE_COIN_FROM_PORTFOLIO
  };
}

import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';

export function updatePortfolioCoinCount() {
  return {
    type: UPDATE_PORTFOLIOCOIN_COUNT
  };
}
