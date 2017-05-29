import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import { Provider } from 'react-redux';
import AppHeader from './components/AppHeader/AppHeaderContainer';
import CoinList from './components/CoinList/CoinListContainer';
import Portfolio from './components/Portfolio/PortfolioContainer';
import TotalPortfolio from './components/TotalPortfolio/TotalPortfolioContainer';
import { loadState, saveState } from './localStorage';
import { combineReducers } from 'redux';
import coinListPortfolio from './reducers/coinListPortfolioReducer';

const rootReducer = combineReducers({
  coinListPortfolio
});

const persistedState = loadState();

// const store = createStore(
//   rootReducer,
//   persistedState,
//   applyMiddleware(thunk)
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(thunk)
  ));

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
              <p>Cryptoedge is used at the user's own risk.
                Cryptoedge is currently in beta testing and there may be bugs in prices or calculations.
                Cryptoedge takes no responsibility for it's user's actions. Nothing on Cryptoedge should be considered as trading advice.</p>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
