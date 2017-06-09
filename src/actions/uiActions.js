import { SHOW_FLAG_MODAL } from '../constants/actionTypes';
import { HIDE_FLAG_MODAL } from '../constants/actionTypes';

export function hideFlagModal() {
  return {
    type: HIDE_FLAG_MODAL
  };
}

export function showFlagModal() {
  return {
    type: SHOW_FLAG_MODAL
  };
}
