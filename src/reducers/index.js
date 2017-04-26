import { combineReducers } from 'redux';
import coinPortfolio from './portfolioReducer';
import coinList from './coinListReducer';


const rootReducer = combineReducers({
  coinPortfolio,
  coinList
});

export default rootReducer;
