import React, { Component } from 'react';
import axios from 'axios';
import SaveButton from './components/SaveButton';
import RefreshButton from './components/RefreshButton';
import logo from './logo.svg';
import Header from './components/Header.js';
import LeaderboardList from './components/LeaderboardList';
import PortfolioList from './components/PortfolioList';
import './App.css';
import { addCommas } from './helpers';

import btc from './img/btc.png';
import eth from './img/eth.png';
import ltc from './img/ltc.png';
import xrp from './img/xrp.png';
import dash from './img/dash.png';
import xmr from './img/xmr.png';
import etc from './img/etc.png';
import xem from './img/xem.png';
import rep from './img/rep.png';
import maid from './img/maid.png';
import pivx from './img/pivx.png';
import zec from './img/zec.png';
import gnt from './img/gnt.png';
import unknown from './img/unknown.png';

const url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

// We are going to have 3 Main displays:
// - Portfolio List
// - Portfolio Summary
// - Leaderboard List
//
// Actions include:
// - Adding from Leaderboard to Portfolio
// - Removing from Portfolio
// The actions should be in the parent component, then pass
// them down to the Portfolio & Leaderboard via props.
// Actions live beside the state! Good rule.
//
// To add/remove I need to capture the key/index from the click inside the
// LeaderboardCoin component, and generate a new Portfolio array with that coin
// added.
//
// Components include:
// Leaderboard List
// LeaderboardCoin (Dumb display inside leaderboard list)
// PortfolioCoin (Dumb display inside portfolio list)
// PortfolioSummary (Dumb display plus with summary calculations)

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        cryptoList: [],
        cryptoPortfolio: [],
        coinValue: '',
        yourUSDs: '',
        coinNumber: '',
        coinUSD: ''
      };
  }

  componentDidMount() {
      this.getCryptoList();
  }

  getCryptoList() {
    let that = this;
    axios.get(url).then(response => {
      var cryptoList = response.data;
      var btcVal = cryptoList[0].market_cap_usd;

      cryptoList = cryptoList.map(function(cryptoRow) {
        // Maps Icons to their Coin
        cryptoRow.logo = that.symbolMapping(cryptoRow);

        // Currency formatting
        cryptoRow.formatted_price_usd = addCommas(cryptoRow.price_usd);

        // Calculates the Coin's relative BTC val
        cryptoRow.btcVal = Math.round((cryptoRow.market_cap_usd / btcVal) * 10000) / 100;

        // Assigning the Change Styles.
        cryptoRow.oneHourStyles = that.heatmapChangeCalc(cryptoRow.percent_change_1h);
        cryptoRow.twentyFourHourStyles = that.heatmapChangeCalc(cryptoRow.percent_change_24h);
        cryptoRow.sevenDayStyles = that.heatmapChangeCalc(cryptoRow.percent_change_7d);

        return cryptoRow;
      });

      console.log(cryptoList);
      this.setState({ cryptoList: cryptoList });
      this.setState({ cryptoPortfolio: cryptoList });

      return response;
    });
  }

  calcYourUSDs() {
      var calcedVal = this.state.coinValue * 10;
      this.setState({ yourUSDs: calcedVal });
  }

  symbolMapping(cryptoRow) {
    switch (cryptoRow.symbol) {
        case "BTC":
            cryptoRow.logo = btc;
            break;
        case "ETH":
            cryptoRow.logo = eth;
            break;
        case "LTC":
            cryptoRow.logo = ltc;
            break;
        case "XRP":
            cryptoRow.logo = xrp;
            break;
        case "DASH":
            cryptoRow.logo = dash;
            break;
        case "XMR":
            cryptoRow.logo = xmr;
            break;
        case "ETC":
            cryptoRow.logo = etc;
            break;
        case "XEM":
            cryptoRow.logo = xem;
            break;
        case "REP":
            cryptoRow.logo = rep;
            break;
        case "MAID":
            cryptoRow.logo = maid;
            break;
        case "PIVX":
            cryptoRow.logo = pivx;
            break;
        case "ZEC":
            cryptoRow.logo = zec;
            break;
        case "GNT":
            cryptoRow.logo = gnt;
            break;
        default:
            cryptoRow.logo = unknown;
    }
    return cryptoRow.logo;
  }

  heatmapChangeCalc(changeValue) {
    var colorGreenOrRed = '#000';
    if (changeValue > 0 ) {
      // Green RGB numbers
      colorGreenOrRed = '63, 148, 24';
    } else {
      // Red RGB numbers
      colorGreenOrRed = '183, 31, 31';
    }

    var opacity = 0;
    if (changeValue < 5) {
        opacity =  0.2;
      }   else if (changeValue >= 5 && changeValue < 10) {
          opacity =  0.3;
        } else if (changeValue >= 10 && changeValue < 15) {
          opacity =  0.4;
        } else if (changeValue >= 15 && changeValue < 20) {
          opacity =  0.5;
        } else if (changeValue >= 20 && changeValue < 25) {
          opacity =  0.6;
        } else if (changeValue >= 25 && changeValue < 30) {
          opacity =  0.7;
        } else if (changeValue >= 30 && changeValue < 35) {
          opacity =  0.8;
        } else if (changeValue >= 35 && changeValue < 40) {
          opacity =  0.9;
        } else if (changeValue >= 40) {
          opacity =  1;
        } else {
          opacity = 0
        }

    var colorWithOpacity = 'rgba('+ colorGreenOrRed + ',' + opacity + ')';

    var styleObject = {
      borderBottom: '3px solid ' + colorWithOpacity,
      color: 'rgb(' + colorGreenOrRed + ')'
    }

    return styleObject
  }

  addCoinToPortfolio() {

  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="contentcontainer">
          <PortfolioList cryptoPortfolio={this.state.cryptoPortfolio} />
          <LeaderboardList cryptoList={this.state.cryptoList} />
          <RefreshButton />
        </div>
      </div>
    );
  }
}

export default App;

// 24h_volume_usd
// available_supply
// id
// last_updated
// market_cap_usd
// name
// percent_change_1h
// percent_change_7d
// percent_change_24h
// price_btc
// price_usd
// rank
// symbol
// total_supply



// Store it in the component's state. The render method should only depend this.state and this.props
// At the risk of oversimplifying:		•	this.props are passed from parent components
// •	this.state is state that is internal to the component	Example	export default MyReactComponent extends Component {
//
//   componentDidMount() {
//     this.setState({
//         test: JSON.parse(document.getElementById('json-data').innerHTML)
//     });
//   }
//
//   render() {
//     return <div>{this.state.test}</div>;
//   },
//
//   getInitialState: function() {
//     return {test: {}}
//   }
// }
//
// Most likely you'll want to JSON.parse() the content before setting the state.


// class FetchDemo extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       posts: []
//     };
//   }
//
//   componentDidMount() {
//     axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
//       .then(res => {
//         const posts = res.data.data.children.map(obj => obj.data);
//         this.setState({ posts });
//       });
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{`/r/${this.props.subreddit}`}</h1>
//         <ul>
//           {this.state.posts.map(post =>
//             <li key={post.id}>{post.title}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <FetchDemo subreddit="reactjs"/>,
//   document.getElementById('root')
// );


//
// <button type="button" id="sidbarPush" onClick={this.props.handleClick} profile={this.props.profileCollapsed}>

//
// class MainWrapper extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             sidbarPushCollapsed: false,
//             profileCollapsed: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState({
//             sidbarPushCollapsed: !this.state.sidbarPushCollapsed,
//             profileCollapsed: !this.state.profileCollapsed
//
//         });
//     }
//     render() {
//         return (
//            //...
//            <Header
//                handleClick={this.handleClick}
//                sidbarPushCollapsed={this.state.sidbarPushCollapsed}
//                profileCollapsed={this.state.profileCollapsed} />
//         );
