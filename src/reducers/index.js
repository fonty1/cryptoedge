import { combineReducers } from 'redux';
//import coinPortfolio from './portfolioReducer';
import coinStorage from './coinListReducer';

const rootReducer = combineReducers({
  coinStorage
});

export default rootReducer;
