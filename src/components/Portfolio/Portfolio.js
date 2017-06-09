import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Portfolio.css';
import PortCoin from '../PortCoin/PortCoinContainer';
import AddCustomButton from '../AddCustomButton/AddCustomButtonContainer';
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

    toggleFullView() {
      let portfolioTable = document.getElementById('portfolioTable');
      let coinlistTable = document.getElementById('coinlistTable');
      let desktopTotalTable = document.getElementById('desktopTotalTable');
      let mobileTotalTable = document.getElementById('mobileTotalTable');

      coinlistTable.classList.toggle('fullView');
      portfolioTable.classList.toggle('fullView');
    }

    render() {
        const portfolioFilled = this.props.portfolioCryptoList.length > 0;

         if (portfolioFilled) {
           return (
               <div className="Portfolio">
                  <div className="portfolioHeader">
                    Portfolio
                    <i className="fa fa-times closeTable hide" aria-hidden="true"></i>
                  </div>
                  <button onClick={() => this.toggleFullView()} className="fullViewButton">Full View</button>
                   <Table responsive striped className="cryptotable" id="portfolioTable">
                       <thead>
                          <tr>
                             <th className={"addCoinToPortfolioColumn " + (this.props.userRequestsFullView ? 'userRequestsFullView' : '')}>
                               <button className="sortByButton hide">
                                 <i className="fa fa-cog" aria-hidden="true"></i>
                               </button>
                             </th>
                             <th className="flagColumn">
                               Flags
                             </th>
                             <th className="capColumn">
                                 <button onClick={() => this.sortByRank()} className="sortByButton">
                                   Cap <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="nameColumn">
                                 Crypto
                             </th>
                             <th className="coinCountColumn">
                                 <button onClick={() => this.sortByCoinCount()} className="sortByButton">
                                   Coins <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="USDHoldingColumn">
                                 <button onClick={() => this.sortByUSDHoldingValue()} className="sortByButton">
                                   Total USD <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="percentageHoldingColumn">
                                 <button onClick={() => this.sortByPercentage()} className="sortByButton">
                                   % <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="boughtAtColumn">
                                 <button onClick={() => this.sortByBoughtAt()} className="sortByButton">
                                   Bought at USD <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="profitLossColumn">
                                 <button onClick={() => this.sortByProfitLoss()} className="sortByButton">
                                   Profit/Loss <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="volColumn">
                                 <button onClick={() => this.sortByVolume()} className="sortByButton">
                                   24hr Vol <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="weightedVolColumn">
                                 <button onClick={() => this.sortByWeightedVolume()} className="sortByButton">
                                   Weighted Vol <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="priceUSDColumn rightTableHeading">
                                 <button onClick={() => this.sortByPriceUSD()} className="sortByButton">
                                   USD <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="priceBTCColumn rightTableHeading">
                                 <button onClick={() => this.sortByPriceBTC()} className="sortByButton">
                                   BTC <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="oneHourColumn">
                                 <button onClick={() => this.sortByOneHour()} className="sortByButton">
                                   1 Hr <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="twentyFourHoursColumn">
                                 <button onClick={() => this.sortByTwentyFourHours()} className="sortByButton">
                                   24 Hrs <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="sevenDaysColumn">
                                 <button onClick={() => this.sortBySevenDays()} className="sortByButton">
                                   7 Days <i className="fa fa-sort" aria-hidden="true"></i>
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
                 <div className="Portfolio hide">
                     <Table responsive striped className="cryptotable">
                         <thead>
                            <tr>
                               <th></th>
                            </tr>
                          </thead>
                          <tbody>
                                <tr className="customAddTr">
                                    <td className="addCoinToPortfolioColumn customAddTd">
                                        <p>Welcome to CryptoEdge! </p>
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
