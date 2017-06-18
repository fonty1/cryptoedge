import initialState from './initialState';
import { SHOW_FLAG_MODAL } from '../constants/actionTypes';
import { SHOW_TIPJAR_MODAL } from '../constants/actionTypes';
import { HIDE_MODALS } from '../constants/actionTypes';

export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {

    case SHOW_FLAG_MODAL:
      return {
        ...state,
        flagModalVisibility: true
      };

    case SHOW_TIPJAR_MODAL:
      return {
        ...state,
        tipJarModalVisibility : true
      };

    case HIDE_MODALS:
      return {
        ...state,
        flagModalVisibility: false,
        tipJarModalVisibility : false
      };

    default:
      return state;
  }
}
