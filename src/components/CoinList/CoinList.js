import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { addCommas } from '../../helpers';
import './CoinList.css';

class CoinList extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.actions.downloadCoins();
    //this.props.actions.setPriceMarkers(BTCPriceMarker, ETHPriceMarker);
    this.props.actions.updateSavedPortfolio();
    this.props.actions.updateIndividualTotals();
    this.props.actions.updatePortfolioTotals();
    this.props.actions.updatePortfolioPercentage();
    //this.props.actions.calculateIndividualProfitLoss();
  }

  render() {
    const listFilled = this.props.cryptoList.length > 0;

     if (listFilled) {
        return (
          <div className="LeaderboardList">
              <Table responsive striped className="cryptotable">
              <thead>
                 <tr>
                    <th className="addCoinToPortfolioColumn"></th>
                    <th>Cap</th>
                    <th className="cryptoid">Crypto</th>
                    <th className="cryptoPrice">USD</th>
                    <th>1 Hr</th>
                    <th>24 Hrs</th>
                    <th>7 Days</th>
                 </tr>
               </thead>
               <tbody>
                 {this.props.cryptoList.map(function(crypto, index) {
                   return (
                     <tr className="cryptorank" key={index}>
                         <td className="addCoinToPortfolioColumn">
                             <button onClick={() => this.props.actions.addCoinToPortfolio(crypto)} className="addCoinToPortfolio">
                                 <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                             </button>
                         </td>
                         <td className="capRank">{crypto.rank}</td>
                         <td className="cryptoid">
                           <img alt={crypto.symbol} src={crypto.logo}/>
                           <span className="cryptoNameFull">{crypto.name + " "}</span>
                           <span className="cryptoSymbol">({crypto.symbol})</span>
                         </td>
                         <td className="bold">${crypto.formatted_price_usd}</td>
                         <td className="percentage__changes" style={crypto.oneHourStyles}>{crypto.percent_change_1h}%</td>
                         <td className="percentage__changes" style={crypto.twentyFourHourStyles}>{crypto.percent_change_24h}%</td>
                         <td className="percentage__changes" style={crypto.sevenDayStyles}>{crypto.percent_change_7d}%</td>
                     </tr>
                   ) }, this )}
               </tbody>
              </Table>
          </div>
        )
    } else {
      return (<div className="LeaderboardList"></div>)
    }
  }
}

export default CoinList;
