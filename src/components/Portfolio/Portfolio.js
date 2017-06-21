import React, { Component } from 'react';
import PortCoin from '../PortCoin/PortCoinContainer';
import AddCustomButton from '../AddCustomButton/AddCustomButtonContainer';
import './PortfolioFlexTable.css';
import './PortfolioTab.css';

class Portfolio extends Component {
    sortByRank() {
      this.props.actions.sortList('rank','portfolio');
    }

    sortByCoinCount() {
      this.props.actions.sortList('count','portfolio');
    }

    sortByUSDHoldingValue() {
      this.props.actions.sortList('coinUSD','portfolio');
    }

    sortByPercentage() {
      this.props.actions.sortList('percentage','portfolio');
    }

    sortByBoughtAt() {
      this.props.actions.sortList('boughtAt','portfolio');
    }

    sortByProfitLoss() {
      this.props.actions.sortList('profitLoss','portfolio');
    }

    sortByPriceBTC() {
      this.props.actions.sortList('price_btc','portfolio');
    }

    sortByPriceUSD() {
      this.props.actions.sortList('price_usd','portfolio');
    }

    sortByOneHour() {
      this.props.actions.sortList('percent_change_1h','portfolio');
    }

    sortByTwentyFourHours() {
      this.props.actions.sortList('percent_change_24h','portfolio');
    }

    sortBySevenDays() {
      this.props.actions.sortList('percent_change_7d','portfolio');
    }

    sortByVolume() {
      this.props.actions.sortList('twentyfour_volume_usd','portfolio');
    }

    sortByWeightedVolume() {
      this.props.actions.sortList('weightedVolume','portfolio');
    }

    sortByMarketCap() {
      this.props.actions.sortList('market_cap_usd','portfolio');
    }

    sortByFlag() {
      this.props.actions.sortList('flag','portfolio');
    }

    toggleFullView() {
      let portfolioTable = document.getElementById('portfolioTable');
      let coinlistTable = document.getElementById('coinlistTable');
      let desktopTotalTable = document.getElementById('desktopTotalTable');
      let mobileTotalTable = document.getElementById('mobileTotalTable');

      coinlistTable.classList.toggle('fullView');
      portfolioTable.classList.toggle('fullView');
    }

    // <button onClick={() => this.toggleFullView()} className="fullViewButton">Full View</button>

    render() {
        const portfolioFilled = this.props.portfolioCryptoList.length > 0;

         if (portfolioFilled) {
           return (
               <div className="Portfolio">
                   {/* <div className="portfolioHeader">
                     PORTFOLIO
                     <i className="fa fa-times closeTable hide" aria-hidden="true"></i>
                   </div> */}
                    <div className="flexTable">
                     <div className="table-row header">
                       <div className={"addCoinToPortfolioColumn column " + (this.props.userRequestsFullView ? 'userRequestsFullView' : '')}>
                         <button className="sortByButton hide">
                           <i className="fa fa-cog" aria-hidden="true"></i>
                         </button>
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
                            Crypto
                        </div>
                        <div className="coinCountColumn column">
                            <button onClick={() => this.sortByCoinCount()} className="sortByButton">
                              Coins <i className="fa fa-sort" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="USDHoldingColumn column">
                            <button onClick={() => this.sortByUSDHoldingValue()} className="sortByButton">
                              Total USD <i className="fa fa-sort" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="percentageHoldingColumn column">
                            <button onClick={() => this.sortByPercentage()} className="sortByButton">
                              % <i className="fa fa-sort" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="boughtAtColumn column">
                            <button onClick={() => this.sortByBoughtAt()} className="sortByButton">
                              Bought at USD <i className="fa fa-sort" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="profitLossColumn column">
                            <button onClick={() => this.sortByProfitLoss()} className="sortByButton">
                              Profit/Loss <i className="fa fa-sort" aria-hidden="true"></i>
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
                        <div className="priceUSDColumn column">
                            <button onClick={() => this.sortByPriceUSD()} className="sortByButton">
                              USD <i className="fa fa-sort" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="priceBTCColumn column">
                            <button onClick={() => this.sortByPriceBTC()} className="sortByButton">
                              BTC <i className="fa fa-sort" aria-hidden="true"></i>
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
                    </div>

                 {/* {Table body} */}
                 {this.props.portfolioCryptoList.map(function(crypto, index){
                   return (
                       <PortCoin crypto={crypto} index={index} key={index} />
                   ) }, this )}

                  <div className="addCoinToPortfolioColumn customAddTd">
                    <AddCustomButton/>
                  </div>
             </div>
            </div>
           );
           } else {
             return (
                 <div className="emptyPortfolio">
                   <p>To start building your Portfolio, tap the plus sign beside the coin you want to add, inside the Coin List. Or tap the button below to add a custom entry.</p>
                   <div className="addCoinToPortfolioColumn customAddTd">
                     <AddCustomButton/>
                   </div>
                 </div>
             )
            }
        }
}

export default Portfolio;
