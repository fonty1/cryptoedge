import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {createStore} from 'redux';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addCommas } from './helpers';
import AppHeader from './components/AppHeader/AppHeader';
import CoinList from './components/CoinList/CoinListContainer';
import Portfolio from './components/Portfolio/PortfolioContainer';
import TotalPortfolio from './components/TotalPortfolio/TotalPortfolioContainer';

import { combineReducers } from 'redux';
import coinListPortfolio from './reducers/coinListPortfolioReducer';

const rootReducer = combineReducers({
  coinListPortfolio
});

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
import { loadState, saveState } from './localStorage';

store.subscribe(() => {
  saveState(store.getState());
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router basename="/">
          <div className="app">
            <AppHeader/>
            <div className="app__content">
              <Portfolio/>
              <TotalPortfolio/>
              <CoinList/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// 24h_volume_usd
// available_supply
// id
// last_updated
// market_cap_usd
// name
// percent_change_1h
// percent_change_7d
// percent_change_24h
// price_btc
// price_usd
// rank
// symbol
// total_supply
