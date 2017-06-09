import initialState from './initialState';
import { SHOW_FLAG_MODAL } from '../constants/actionTypes';
import { HIDE_FLAG_MODAL } from '../constants/actionTypes';

export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {

    case SHOW_FLAG_MODAL:
      return {
        ...state,
        flagModalVisibility: true
      };

    case HIDE_FLAG_MODAL:
      return {
        ...state,
        flagModalVisibility: false
      };

    default:
      return state;
  }
}
