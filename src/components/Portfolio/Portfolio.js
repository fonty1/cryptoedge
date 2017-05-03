import React, { Component } from 'react';
import { Table, Input } from 'react-bootstrap';
import './Portfolio.css';
import PortCoin from '../PortCoin/PortCoinContainer';
import renderIf  from 'render-if';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.getSavedPortfolio = this.getSavedPortfolio.bind(this);
    }

    componentDidMount() {
        //this.getSavedPortfolio();
    }

    getSavedPortfolio() {
      // Load local storage here
    }

    render() {
      return (
        renderIf(this.props.portfolioCryptoList.length > 0)(
            <div className="Portfolio">
                <Table responsive striped className="cryptotable">
                        <thead>
                           <tr>
                              <th>Remove</th>
                              <th>Cap</th>
                              <th className="cryptoid">Crypto Currency</th>
                              <th className="holding">Coin #</th>
                              <th className="holding">Your USD</th>
                              <th className="holding">%</th>
                              <th>USD Price</th>
                              <th>BTC Price</th>
                              <th>1 Hour</th>
                              <th>24 Hours</th>
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
