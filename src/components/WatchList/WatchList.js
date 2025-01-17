import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { addCommas } from '../../helpers';
import * as actions from '../../actions/coinListPortfolioActions';
import './CoinList.css';

class CoinList extends React.Component {

  componentWillMount() {
    this.props.actions.downloadCoins();
    this.props.actions.downloadMarketData();
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

  sortByCap() {
    this.props.actions.sortList('market_cap_usd','coins');
  }

  sortByFlag() {
    this.props.actions.sortList('flag','coins');
  }

  render() {
    const listFilled = this.props.cryptoList.length > 0;
     if (listFilled) {
        return (
          <div className="LeaderboardList">
            <div className="coinlistHeader">
              COIN LIST
              <i className="fa fa-times closeTable hide" aria-hidden="true"></i>
              <div className="marketDataContainer">
                <span className="marketCap">Market Cap: ${this.props.marketData.formattedMarketCap}</span>
                <span className="marketVolume">Market Vol: ${this.props.marketData.formattedMarketVolume}</span>
                <span className="btcDominance">BTC Dominance: {this.props.marketData.bitcoin_percentage_of_market_cap}%</span>
              </div>
            </div>
              <Table responsive striped className="cryptotable coinList" id="coinList">
              <thead>
                 <tr>
                   <th className="">
                     <button className="hide">
                     </button>
                   </th>
                    <th className="addCoinToPortfolioColumn">
                      <button className="sortByButton hide">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="flagColumn">
                      <button onClick={() => this.sortByFlag()} className="sortByButton">
                        Flag <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="capColumn">
                      <button onClick={() => this.sortByRank()} className="sortByButton">
                        Cap <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="nameColumn">
                      Crypto
                    </th>
                    <th className="cryptoPrice">
                      <button onClick={() => this.sortByPriceUSD()} className="sortByButton">
                        USD <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      <button onClick={() => this.sortByOneHour()} className="sortByButton">
                        1 Hr <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      <button onClick={() => this.sortByTwentyFourHours()} className="sortByButton">
                        24 Hrs <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      <button onClick={() => this.sortBySevenDays()} className="sortByButton">
                        7 Days <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="marketCapColumn">
                      <button onClick={() => this.sortByCap()} className="sortByButton">
                        Market Cap <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="volume cryptoPrice">
                      <button onClick={() => this.sortByVolume()} className="sortByButton">
                        24hr Vol <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="volume cryptoPrice">
                      <button onClick={() => this.sortByWeightedVolume()} className="sortByButton">
                        Weighted Vol <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="cryptoPrice">
                      <button onClick={() => this.sortByPriceBTC()} className="sortByButton">
                        BTC <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th className="">
                      <button className="sortByButton hide">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                      </button>
                    </th>
                 </tr>
               </thead>
               <tbody>
                 {this.props.cryptoList.map(function(crypto, index) {
                   return (
                     <tr className="coin" key={index}>
                         <td>
                         </td>
                         <td className="addCoinToPortfolioColumn">
                             <button onClick={() => this.props.actions.addCoinToPortfolio(crypto)} className="addCoinToPortfolio">
                                 <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                             </button>
                         </td>
                         <td className="flagColumn">
                          <span className={" " + (crypto.flag ? crypto.flagColor : ' hide')}>
                            <i className="fa fa-flag" aria-hidden="true"></i>
                          </span>
                         </td>
                         <td className="capColumn">{crypto.rank}</td>
                         <td className="nameColumn">
                           <img alt={crypto.symbol} src={crypto.logo}/>
                           <span className="cryptoNameFull">{crypto.name + " "}</span>
                           <span className="cryptoSymbol">{crypto.symbol}</span>
                         </td>
                         <td className="priceUSDColumn">${crypto.formatted_price_usd}</td>
                         <td className="percentage__changes" style={crypto.oneHourStyles}>{crypto.percent_change_1h}%</td>
                         <td className="percentage__changes" style={crypto.twentyFourHourStyles}>{crypto.percent_change_24h}%</td>
                         <td className="percentage__changes" style={crypto.sevenDayStyles}>{crypto.percent_change_7d}%</td>
                         <td className="marketCapColumn">${crypto.market_cap_usd_formatted}</td>
                         <td className="volColumn">${crypto.formattedTwentyfour_volume_usd}</td>
                         <td className="weightedVolColumn">{crypto.weightedVolume}</td>
                         <td className="priceBTCColumn">{crypto.price_btc}</td>
                         <td className=""></td>
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
