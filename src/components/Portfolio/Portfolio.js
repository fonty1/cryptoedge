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
      //portfolioTable = document.getElementById('portfolio');
      //portfolioTable.toggleClass('fullView');
    }

    render() {
        const portfolioFilled = this.props.portfolioCryptoList.length > 0;

         if (portfolioFilled) {
           return (
               <div className="Portfolio">
                  <h6>Portfolio</h6>
                  <button onClick={() => this.toggleFullView()} className="fullViewButton">Full View</button>
                   <Table responsive striped className="cryptotable">
                       <thead>
                          <tr>
                             <th className={"actionColumn " + (this.props.userRequestsFullView ? 'userRequestsFullView' : '')}></th>
                             <th>
                                 Cap
                                 <button onClick={() => this.sortByRank()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="cryptoid">
                                 Crypto
                             </th>
                             <th className="holding">
                                 Coin #
                                 <button onClick={() => this.sortByCoinCount()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="holding">
                                 Total USD
                                 <button onClick={() => this.sortByUSDHoldingValue()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="holding">
                                 %
                                 <button onClick={() => this.sortByPercentage()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="holding">
                                 Bought at USD
                                 <button onClick={() => this.sortByBoughtAt()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="profitLossColumn">
                                 Profit/Loss
                                 <button onClick={() => this.sortByProfitLoss()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="volColumn">
                                 24hr Vol
                                 <button onClick={() => this.sortByVolume()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="weightedVolColumn">
                                 Weighted Vol
                                 <button onClick={() => this.sortByWeightedVolume()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="rightTableHeading priceUsd">
                                 USD
                                 <button onClick={() => this.sortByPriceUSD()} className="sortByButton">
                                   <i className="fa fa-sort" aria-hidden="true"></i>
                                 </button>
                             </th>
                             <th className="rightTableHeading priceBtc">
                                 BTC
                                 <button onClick={() => this.sortByPriceBTC()} className="sortByButton">
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
