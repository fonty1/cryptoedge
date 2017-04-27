import React, { Component } from 'react';
import './AppHeader.css';
import cryptoedge from '../../img/cryptoedge2.png';

class AppHeader extends Component {
  render() {
    return <header>
              <img src={cryptoedge} className="edge-logo"/>
              <h1>CryptoEdge.IO</h1>
           </header>
  }
}

export default AppHeader;
