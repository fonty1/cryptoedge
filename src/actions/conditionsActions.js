import { ADD_FLAG } from '../constants/actionTypes';
import { REMOVE_FLAG } from '../constants/actionTypes';

export function addFlag(id, flagColour, condition, operator) {
  return {
    type: ADD_FLAG,
    id,
    condition,
    operator,
    flagColour
  };
}

export function removeFlag(id) {
  return {
    type: REMOVE_FLAG,
    id
  };
}
