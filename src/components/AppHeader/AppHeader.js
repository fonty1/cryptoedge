import React, { Component } from 'react';
import './AppHeader.css';
import cryptoedge from '../../img/cryptoedge4.png';

class AppHeader extends Component {
  render() {
    return <header>
              <div className="logo-container">
                <img src={cryptoedge} className="edge-logo"/>
                <h1>CryptoEdge</h1>
              </div>
           </header>
  }
}

export default AppHeader;
