import React, { Component } from 'react';
import './AppHeader.css';
import cryptoedge from '../../img/cryptoedgeinverted.png';

const AppHeader = ( { coinListPortfolioActions, uiActions, coinsLoading } ) => {

  const refreshClick = e => {
    e.preventDefault();
    console.log('Refreshing...');
    coinListPortfolioActions.downloadCoins();
  }

  const flagModalClick = e => {
    e.preventDefault();
    uiActions.showFlagModal();
  }

  const aboutModalClick = e => {
    e.preventDefault();
    uiActions.showAboutModal();
  }

  return (
      <header>
        <nav>
          <ul className="primary-nav">
            <li className="logo-container left">
              <img alt="Cryptoedge" src={cryptoedge} className="edge-logo"/>
              <h1>ryptoEdge</h1>
            </li>
            <li className="right">
              <a target="blank_" href="https://docs.google.com/forms/d/e/1FAIpQLSeU1ICsh-USOAy2pjJqn9CWRxMf5NdhlIfztBpkExbv4YJbQw/viewform?usp=sf_link">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                Feedback
              </a>
            </li>
            <li className="right" onClick={aboutModalClick}>
              <a target="blank_" href="https://docs.google.com/forms/d/e/1FAIpQLSeU1ICsh-USOAy2pjJqn9CWRxMf5NdhlIfztBpkExbv4YJbQw/viewform?usp=sf_link">
                <i className="fa fa-info" aria-hidden="true"></i>
                About
              </a>
            </li>
            <li className="right" onClick={flagModalClick}>
              <a>
                <i className="fa fa-flag" aria-hidden="true"></i>
                If - Then
              </a>
            </li>
            <li className={"right refresh " + (coinsLoading ? 'loading' : '')} onClick={refreshClick}>
              <a>
                <i className="fa fa-refresh" aria-hidden="true"></i>
                {"" + (coinsLoading ? 'Loading' : "Refresh")}
              </a>
            </li>
          </ul>
        </nav>
     </header>
  )
}

export default AppHeader;
