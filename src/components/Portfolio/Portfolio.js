import React, { Component } from 'react';
import { Table, Input } from 'react-bootstrap';
import PortfolioCoin from '../PortfolioCoin/PortfolioCoin';
import './Portfolio.css';
import PortCoin from '../PortCoin/PortCoinContainer';

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
        <div className="Portfolio">
            <h4>Portfolio</h4>
            <Table responsive striped className="cryptotable">
            <thead>
               <tr>
                  <th>Remove</th>
                  <th>Cap Rank</th>
                  <th className="cryptoid">Crypto Currency</th>
                  <th className="holding">Your Coins<span>#</span></th>
                  <th className="holding">Your Coin Value<span>$USD</span></th>
                  <th className="holding">Your Crypto<span>%</span></th>
                  <th>Price <span>$USD</span></th>
                  <th>Price <span>BTC</span></th>
                  <th>1 Hour <span>% Change</span></th>
                  <th>24 Hours <span>% Change</span></th>
                  <th>7 Days<span>% Change</span></th>
               </tr>
             </thead>
             <tbody>
                 {this.props.portfolioCryptoList.map(function(crypto, index){
                   return (
                       <PortCoin crypto={crypto} index={index} key={index} />
                   ) }, this )}
             </tbody>
            </Table>
        </div>)
    }
}

export default Portfolio;

// {this.updateCoinNumber.bind(this)}
