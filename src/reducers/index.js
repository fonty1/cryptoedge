import { combineReducers } from 'redux';
import coinListPortfolio from './coinListPortfolioReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  coinListPortfolio,
  form: formReducer
});

export default rootReducer;
