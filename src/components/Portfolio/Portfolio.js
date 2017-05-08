import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Portfolio.css';
import PortCoin from '../PortCoin/PortCoinContainer';
import CustomPortCoin from '../CustomPortCoin/CustomPortCoinContainer';
import AddCustomButton from '../AddCustomButton/AddCustomButton';
class Portfolio extends Component {
    render() {
        const portfolioFilled = this.props.portfolioCryptoList.length > 0;

         if (portfolioFilled) {
           return (
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
                   <AddCustomButton/>
               </div>
           );
           } else {
             return (
                 <div className="Portfolio">
                     <AddCustomButton/>
                 </div>
             );
            }
    }
}

export default Portfolio;
                        //   <CustomPortCoin />
                        //   Add Custom Crypto should add a new crypto row to the portfolio array.
                        //   It should conditionally render either a normal coin or a custom coin with input boxes
                        //   at USD / BTC / Name / Coin# MAYBE THE TOTALUSD - defaults at 0 "x"
                        //   It should have handlers for those input boxes that do the regular total calculations. And that's it. 
