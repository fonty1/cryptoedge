import React, { Component } from 'react';
import './AppHeader.css';
import cryptoedge from '../../img/cryptoedge5.jpg';

class AppHeader extends Component {
  render() {
    return <header>
              <nav>
                <ul className="primary-nav">
                  <li className="logo-container left">
                    <img src={cryptoedge} className="edge-logo"/>
                    <h1>ryptoEdge</h1>
                  </li>
                  <li className="right">
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                    Refresh
                  </li>
                  <li className="right">
                    <i className="fa fa-question" aria-hidden="true"></i>
                    Help
                  </li>
                  <li className="right">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    Feedback
                  </li>
                </ul>
              </nav>

           </header>
  }
}

export default AppHeader;
