import React, { Component } from 'react';
import './Header.css';
import cryptoedge from '../img/cryptoedge.png';

class Header extends Component {
  render() {
    return <header>
              <img src={cryptoedge} className="edge-logo"/>
              <h1>CryptoEdge.IO</h1>
           </header>
  }
}

export default Header;
