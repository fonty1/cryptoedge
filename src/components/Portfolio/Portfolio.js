import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Portfolio.css';
import PortCoin from '../PortCoin/PortCoinContainer';
import AddCustomButton from '../AddCustomButton/AddCustomButtonContainer';
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
                                 <th className="holding">Bought At ($USD)</th>
                                 <th className="holding">Profit/Loss</th>
                                 <th className="rightTableHeading priceUsd">USD Price</th>
                                 <th className="rightTableHeading priceBtc">BTC Price</th>
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
                          <tr className="customAddTr">
                              <td className="addCoinToPortfolioColumn customAddTd">
                                  <AddCustomButton/>
                              </td>
                          </tr>
                    </tbody>
                   </Table>
               </div>
           );
           } else {
             return (
                 <div className="Portfolio">
                     <Table responsive striped className="cryptotable">
                         <thead>
                            <tr>
                               <th></th>
                            </tr>
                          </thead>
                          <tbody>
                                <tr className="customAddTr">
                                    <td className="addCoinToPortfolioColumn customAddTd">
                                        <AddCustomButton/>
                                    </td>
                                </tr>
                          </tbody>
                     </Table>
                 </div>
             );
            }
    }
}

export default Portfolio;
