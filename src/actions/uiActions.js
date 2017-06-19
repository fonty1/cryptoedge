import { SHOW_FLAG_MODAL } from '../constants/actionTypes';
import { SHOW_TIPJAR_MODAL } from '../constants/actionTypes';
import { SHOW_ABOUT_MODAL } from '../constants/actionTypes';
import { HIDE_MODALS } from '../constants/actionTypes';

export function hideModals() {
  return {
    type: HIDE_MODALS
  };
}

export function showFlagModal() {
  return {
    type: SHOW_FLAG_MODAL
  };
}

export function showAboutModal() {
  return {
    type: SHOW_ABOUT_MODAL
  };
}

export function showTipJarModal() {
  return {
    type: SHOW_TIPJAR_MODAL
  };
}
