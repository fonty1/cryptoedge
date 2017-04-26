import React, { Component } from 'react';
import { Table, Input } from 'react-bootstrap';
import PortfolioCoin from '../PortfolioCoin/PortfolioCoin';
import './Portfolio.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.updateCoinNumber = this.updateCoinNumber.bind(this);
        this.getSavedPortfolio = this.getSavedPortfolio.bind(this);
    }

    componentDidMount() {
        this.getSavedPortfolio();
    }

    getSavedPortfolio() {
      // Load local storage here
    }

    updateCoinNumber(evt) {
        // this.setState({coinNumber: evt.target.value});
        // this.calculateUSDHoldings(evt.target.value);
        // this.calculatePercentageHoldings(evt.target.value);
    }

    calcYourUSDs() {
        // var calcedVal = this.state.coinValue * 10;
        // this.setState({ yourUSDs: calcedVal });
    }

    calculateUSDHoldings(updatedCoinNumber) {
        // var coinUSD = updatedCoinNumber * this.props.crypto.price_usd;
        // this.setState({coinUSD: coinUSD});
    }

    calculatePercentageHoldings(updatedCoinNumber) {
        let coinPercentage = 0;
        // I will need to calculate the total somewhere...
        // percentageHolding should live on the parent cryptoObject.
        //
        //this.setState({coinPercentage: this.props.crypto.percentageHolding});
    }

    render() {
      return (
        <div className="Portfolio">
            <h4>Portfolio</h4>
            <Table responsive className="cryptotable">
            <thead>
               <tr>
                  <th>Remove</th>
                  <th>Rank</th>
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
                 {/* {this.props.cryptoPortfolio.map(function(crypto, index){
                   return (
                              <PortfolioCoin crypto={ crypto } key={ index } index={ index } />
                          )
                 })} */}
             </tbody>
            </Table>
        </div>)
    }
}

export default Portfolio;
