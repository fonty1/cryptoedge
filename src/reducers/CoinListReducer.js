import initialState from './initialState';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';

export default function mobileMenuReducer(state = initialState.selectedCoin, action) {

  switch (action.type) {
    case ADD_COIN_TO_PORTFOLIO:
      return !state;
    default:
      return state;
  }
}
