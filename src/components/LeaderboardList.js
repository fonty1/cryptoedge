import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import LeaderboardCoin from './LeaderboardCoin';
import './LeaderboardList.css';

class LeaderboardList extends Component {

  constructor(props) {
      super(props);

      this.state = {

      };

  }

  render() {
    return (
      <div className="LeaderboardList">
          <h4>Leaderboard</h4>
          <Table responsive striped className="cryptotable">
          <thead>
             <tr>
                <th className="addCoinToPortfolioColumn">Portfolio</th>
                <th>Rank</th>
                <th className="cryptoid">Crypto Currency</th>
              <th className="cryptoPrice">USD</th>
                <th>1 Hour</th>
                <th>24 Hours</th>
                <th>7 Days</th>
             </tr>
           </thead>
           <tbody>
               {this.props.cryptoList.map(function(crypto, index){
                 return (
                            <LeaderboardCoin crypto={ crypto } key={ index } />
                        )
               })}
           </tbody>
          </Table>
      </div>)
  }
}

export default LeaderboardList;
