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
                  <h6>Portfolio</h6>
                   <Table responsive striped className="cryptotable">
                           <thead>
                              <tr>
                                 <th></th>
                                 <th>
                                     Cap
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="cryptoid">
                                     Crypto
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="holding">
                                     Coin #
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="holding">
                                     Total USD
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="holding">
                                     %
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="holding">
                                     Bought At ($USD)
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="holding">
                                     Profit/Loss
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="rightTableHeading priceUsd">
                                     USD Price
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th className="rightTableHeading priceBtc">
                                     BTC Price
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th>
                                     1 Hr
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th>
                                     24 Hrs
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
                                 <th>
                                     7 Days
                                     <button onClick={() => this.sortByCap()} className="sortByButton">
                                       <i className="fa fa-sort" aria-hidden="true"></i>
                                     </button>
                                 </th>
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
