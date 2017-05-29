import React, { Component } from 'react';
import './AppHeader.css';
import cryptoedge from '../../img/cryptoedge.jpg';

const AppHeader = ( { actions } ) => {

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
            <li className="right" onClick={refreshClick}>
              <i className="fa fa-refresh" aria-hidden="true"></i>
              Refresh
            </li>
            <li className="right hide">
              <i className="fa fa-question" aria-hidden="true"></i>
              Help
            </li>
            <li className="right">
              <a target="blank_" href="https://docs.google.com/forms/d/e/1FAIpQLSeU1ICsh-USOAy2pjJqn9CWRxMf5NdhlIfztBpkExbv4YJbQw/viewform?usp=sf_link">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                Feedback
              </a>
            </li>
          </ul>
        </nav>
     </header>
  )
}

export default AppHeader;
