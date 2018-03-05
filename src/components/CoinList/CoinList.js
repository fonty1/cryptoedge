import React, { Component } from 'react';
import { addCommas } from '../../helpers';
import * as actions from '../../actions/coinListPortfolioActions';
import './CoinListFlexTable.css';
import './CoinList.css';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import EditorChart from 'material-ui/svg-icons/editor/insert-chart';

class CoinList extends React.Component {

  componentDidMount() {
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
          <div>
            <div className="coinlistHeader">
              <div className="marketDataContainer">
                <span className="marketCap">Market Cap: ${this.props.marketData.formattedMarketCap}</span>
                <span className="marketVolume">Market Vol: ${this.props.marketData.formattedMarketVolume}</span>
                <span className="btcDominance">BTC Dominance: {this.props.marketData.bitcoin_percentage_of_market_cap}%</span>
              </div>
            </div>
            <div className="coinList">
            <div className="flexTable">
             <div className="table-row header">
                      <div className="addCoinToPortfolioColumn column">
                      </div>
                      <div className="flagColumn column">
                        <button onClick={() => this.sortByFlag()} className="sortByButton">
                          Flag <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="capColumn column">
                        <button onClick={() => this.sortByRank()} className="sortByButton">
                          Cap <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="nameColumn column">
                        <button className="sortByButton">
                          Crypto
                        </button>
                      </div>
                      <div className="priceUSDColumn column">
                        <button onClick={() => this.sortByPriceUSD()} className="sortByButton">
                          USD <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="oneHourColumn column">
                        <button onClick={() => this.sortByOneHour()} className="sortByButton">
                          1 Hr <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="twentyFourHoursColumn column">
                        <button onClick={() => this.sortByTwentyFourHours()} className="sortByButton">
                          24 Hrs <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="sevenDaysColumn column">
                        <button onClick={() => this.sortBySevenDays()} className="sortByButton">
                          7 Days <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="marketCapColumn column">
                        <button onClick={() => this.sortByCap()} className="sortByButton">
                          Market Cap <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="volColumn column">
                        <button onClick={() => this.sortByVolume()} className="sortByButton">
                          24hr Vol <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="weightedVolColumn column">
                        <button onClick={() => this.sortByWeightedVolume()} className="sortByButton">
                          Weighted Vol <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div className="priceBTCColumn column">
                        <button onClick={() => this.sortByPriceBTC()} className="sortByButton">
                          BTC <i className="fa fa-sort" aria-hidden="true"></i>
                        </button>
                      </div>
                   </div>
                   {this.props.cryptoList.map(function(crypto, index) {
                     return (
                       <div className="table-row coin" key={index}>
                           <div className="addCoinToPortfolioColumn column">
                              <IconButton
                                onClick={() => this.props.actions.addCoinToPortfolio(crypto)}
                                className="addCoinToPortfolio" tooltip={"Add " + crypto.symbol + " to Portfolio"}
                                tooltipPosition="top-right">
                                <ContentAdd />
                              </IconButton>
                           </div>
                           <div className="flagColumn column">
                            <span className={" " + (crypto.flag ? crypto.flagColor : ' hide')}>
                              <i className="fa fa-flag" aria-hidden="true"></i>
                            </span>
                           </div>
                           <div className="capColumn column">
                             <span>
                               {crypto.rank}
                             </span>
                           </div>
                           <div className="nameColumn column">
                             <img alt={crypto.symbol} src={crypto.logo}/>
                             <span className="cryptoNameFull">{crypto.name + " "}</span>
                             <span className="cryptoSymbol">{crypto.symbol}</span>
                             <IconButton
                               onClick={() => this.props.actions.openChart(crypto)}
                               className="openChartButton"
                               >
                               <EditorChart />
                             </IconButton>
                           </div>
                           <div className="priceUSDColumn column">
                             <span>${crypto.formatted_price_usd}</span>
                           </div>
                           <div className="oneHourColumn column" style={crypto.oneHourStyles}>
                             <span>{crypto.percent_change_1h}%</span>
                           </div>
                           <div className="twentyFourHoursColumn column" style={crypto.twentyFourHourStyles}>
                             <span>{crypto.percent_change_24h}%</span>
                           </div>
                           <div className="sevenDaysColumn column" style={crypto.sevenDayStyles}>
                             <span>{crypto.percent_change_7d}%</span>
                           </div>
                           <div className="marketCapColumn column">
                             <span>${crypto.market_cap_usd_formatted}</span>
                           </div>
                           <div className="volColumn column">
                             <span>${crypto.formattedTwentyfour_volume_usd}</span>
                           </div>
                           <div className="weightedVolColumn column">
                             <span>{crypto.weightedVolume}</span>
                           </div>
                           <div className="priceBTCColumn column">
                             <span>{crypto.price_btc}</span>
                           </div>
                       </div>
                     ) }, this )}
                   </div>
                </div>
            </div>
        )
    } else {
      return (<div className="emptyList"></div>)
    }
  }
}

export default CoinList;
