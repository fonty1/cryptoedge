import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Portfolio.css';
import PortCoin from '../PortCoin/PortCoinContainer';
import renderIf  from 'render-if';

class Portfolio extends Component {
    render() {
      return (
        renderIf(this.props.portfolioCryptoList.length > 0)(
            <div className="Portfolio">
                <Table responsive striped className="cryptotable">
                        <thead>
                           <tr>
                              <th></th>
                              <th>Cap</th>
                              <th className="cryptoid">Crypto</th>
                              <th className="holding">Coin #</th>
                              <th className="holding">Total USD</th>
                              <th className="holding">%</th>
                              <th>USD</th>
                              <th>BTC</th>
                              <th>1 Hr</th>
                              <th>24 Hrs</th>
                              <th>7 Days</th>
                           </tr>
                         </thead>

                 <tbody>
                     {this.props.portfolioCryptoList.map(function(crypto, index){
                       return (
                           <PortCoin crypto={crypto} index={index} key={index} />
                       ) }, this )}
                 </tbody>
                </Table>
            </div>
        )
        )
    }
}

export default Portfolio;
