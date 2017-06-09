import initialState from './initialState';
import { ADD_FLAG } from '../constants/actionTypes';
import { REMOVE_FLAG } from '../constants/actionTypes';

export default function uiReducer(state = initialState.conditions, action) {
  switch (action.type) {

    case ADD_FLAG:
      // var flagStyle = {
      //   color: action.flagColour
      // };
      // let tempFlagPortfolio =  state.portfolio.map( (item, index) => {
      //     if(index !== action.id) {
      //         // This isn't the item we care about - keep it as-is
      //       return item;
      //     } else {
      //       return {
      //           ...item,
      //           flag: action.flag,
      //           flagStyle: flagStyle
      //       };
      //     }
      // });
      return {
        ...state
      };

    case REMOVE_FLAG:
      return {
        ...state
      };

    default:
      return state;
  }
}
