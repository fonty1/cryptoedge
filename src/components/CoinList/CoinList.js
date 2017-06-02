import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { addCommas } from '../../helpers';
import * as actions from '../../actions/coinListPortfolioActions';
import './CoinList.css';

class CoinList extends React.Component {

  componentWillMount() {
    this.props.actions.downloadCoins();
  }

  sortByRank() {
    this.props.actions.sortList('rank','coins');
  }

  sortByPriceBTC() {
    this.props.actions.sortList('price_btc','coins');
  }

  sortByPriceUSD() {
    this.props.actions.sortList('price_usd','coins');
  }

  sortByOneHour() {
    this.props.actions.sortList('percent_change_1h','coins');
  }

  sortByTwentyFourHours() {
    this.props.actions.sortList('percent_change_24h','coins');
  }

  sortBySevenDays() {
    this.props.actions.sortList('percent_change_7d','coins');
  }

  sortByVolume() {
    this.props.actions.sortList('twentyfour_volume_usd','coins');
  }

  sortByWeightedVolume() {
    this.props.actions.sortList('weightedVolume','coins');
  }

  render() {
    const listFilled = this.props.cryptoList.length > 0;
     if (listFilled) {
        return (
          <div className="LeaderboardList">
              <h6>Coin List</h6>
              <Table responsive striped className="cryptotable" id="coinlistTable">
              <thead>
                 <tr>
                    <th className="addCoinToPortfolioColumn"></th>
                    <th className="capColumn">
                      Cap
                      <button onClick={() => this.sortByRank()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="cryptoid">
                      Crypto
                    </th>
                    <th className="volume cryptoPrice">
                      24hr Vol
                      <button onClick={() => this.sortByVolume()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="volume cryptoPrice">
                      Weighted Vol
                      <button onClick={() => this.sortByWeightedVolume()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="cryptoPrice">
                      BTC
                      <button onClick={() => this.sortByPriceBTC()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="cryptoPrice">
                      USD
                      <button onClick={() => this.sortByPriceUSD()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      1 Hr
                      <button onClick={() => this.sortByOneHour()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      24 Hrs
                      <button onClick={() => this.sortByTwentyFourHours()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      7 Days
                      <button onClick={() => this.sortBySevenDays()} className="sortByButton">
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
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
                         <td className="capRank capColumn">{crypto.rank}</td>
                         <td className="cryptoid">
                           <img alt={crypto.symbol} src={crypto.logo}/>
                           <span className="cryptoNameFull">{crypto.name + " "}</span>
                           <span className="cryptoSymbol">{crypto.symbol}</span>
                         </td>
                         <td className="bold">${crypto.formattedTwentyfour_volume_usd}</td>
                         <td className="bold">{crypto.weightedVolume}</td>
                         <td className="bold">{crypto.price_btc}</td>
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
