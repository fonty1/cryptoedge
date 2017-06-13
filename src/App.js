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
import IfThenModal from './components/IfThenModal/IfThenModalContainer';
import { combineReducers } from 'redux';
import coinListPortfolio from './reducers/coinListPortfolioReducer';
import ui from './reducers/uiReducer';
import {persistStore, autoRehydrate} from 'redux-persist';

const rootReducer = combineReducers({
  coinListPortfolio,
  ui
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
    composeEnhancers()
  )
)

class App extends Component {
  componentWillMount() {
    persistStore(store);
  }

  render() {
    return (
      <Provider store={store}>
        <Router basename="/">
          <div className="app">
            <AppHeader/>
            <div className="app__content">
              <IfThenModal/>
              <Portfolio/>
              <TotalPortfolio/>
              <CoinList/>
              <p className="terms">Cryptoedge is used at the user's own risk.
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
