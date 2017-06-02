import React, { Component } from 'react';
import './AppHeader.css';
import cryptoedge from '../../img/cryptoedge.png';

const AppHeader = ( { actions, coinsLoading } ) => {

  const refreshClick = e => {
    e.preventDefault();
    console.log('Refreshing...');
    actions.downloadCoins();
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
            <li className={"right refresh " + (coinsLoading ? 'loading' : '')} onClick={refreshClick}>
              <i className="fa fa-refresh" aria-hidden="true"></i>
              {"" + (coinsLoading ? 'Loading' : "Refresh")}
            </li>
          </ul>
        </nav>
     </header>
  )
}

export default AppHeader;
