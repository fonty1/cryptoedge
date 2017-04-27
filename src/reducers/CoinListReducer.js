import initialState from './initialState';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS } from '../constants/actionTypes';

export default function coinListReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_COIN_TO_PORTFOLIO:
      return {
        ...state,
        portfolioCoins: action.coin
      };

    case DOWNLOAD_COINS:
      return {
        ...state,
        coins: action.coins
      };

    default:
      return state;
  }
}
