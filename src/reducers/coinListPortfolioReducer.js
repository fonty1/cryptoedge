import initialState from './initialState';
import { addCommas } from '../helpers';
import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_PERCENTAGE } from '../constants/actionTypes';
import { UPDATE_SAVED_PORTFOLIO } from '../constants/actionTypes';

export default function coinListPortfolioReducer(state = initialState, action) {
  console.log('bang');
  console.log(state.portfolio);
  let portfolio = updateObjectInArray(state.portfolio, action);
  let totalUSD = sumTotalUSD(state.portfolio);
  let totalBTC = sumTotalBTC(state.portfolio);
  let percentagePortfolio = calcPercentage(state.portfolio, state.totalUSD);
  let updatedSavedPortfolio = updateSavedPortfolio(state.portfolio, state.coins);

  switch (action.type) {
    case DOWNLOAD_COINS:
      return {
        ...state,
        coins: action.coins
      };

    case UPDATE_SAVED_PORTFOLIO:
      return {
        ...state,
        portfolio: updatedSavedPortfolio
      };

    case ADD_COIN_TO_PORTFOLIO:
      return {
        ...state,
        portfolio: state.portfolio.concat(action.coin)
      };

    case REMOVE_COIN_FROM_PORTFOLIO:
      let portfolioTemp1 = state.portfolio.slice(0,action.position);
      let portfolioTemp2 = state.portfolio.slice(action.position + 1);
      let portfolioNew = portfolioTemp1.concat(portfolioTemp2);
      return {
        ...state,
        portfolio: portfolioNew
      };

    case UPDATE_PORTFOLIOCOIN_COUNT:
      return {
        ...state,
        portfolio
      };

    case UPDATE_PORTFOLIO_TOTALS:
      return {
        ...state,
        totalUSD,
        totalBTC: totalBTC.toFixed(4),
        formattedTotalUSD: addCommas(totalUSD.toFixed(2))
      };

    case UPDATE_PORTFOLIO_PERCENTAGE:
      return {
        ...state,
        portfolio: percentagePortfolio
      };

    default:
      return state;
  }
}

function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.position) {
            // This isn't the item we care about - keep it as-is
          return item;
        } else {
          return {
              ...item,
              count: action.count,
              coinUSD: action.coinUSD,
              coinBTC: action.coinBTC,
              formattedCoinUSD: action.formattedUSD
          };
        }
    });
}

function sumTotalUSD(array) {
  var myTotal = 0;

  for(var i = 0, len = array.length; i < len; i++) {
    myTotal += array[i].coinUSD;
  }
  return myTotal
}

function sumTotalBTC(array) {
  var myTotal = 0;

  for(var i = 0, len = array.length; i < len; i++) {
    myTotal += array[i].coinBTC;
  }
  return myTotal
}

function calcPercentage(array, totalUSD) {
    return array.map( (item, index) => {
          return {
              ...item,
              percentage: ((item.coinUSD / totalUSD) * 100).toFixed(2)
          };
    });
}

function updateSavedPortfolio(portfolio, coins, totalUSD) {
  return portfolio.map( (portItem, index) => {
      coins.map( (coinItem, index) => {
        if(portItem.id === coinItem.id) {
          portItem.price_usd = coinItem.price_usd;
          portItem.formatted_price_usd = coinItem.formatted_price_usd;
          portItem.price_btc = coinItem.price_btc;
          portItem.oneHourStyles = coinItem.oneHourStyles;
          portItem.twentyFourHourStyles = coinItem.twentyFourHourStyles;
          portItem.sevenDayStyles = coinItem.sevenDayStyles;
          portItem.percent_change_1h = coinItem.percent_change_1h;
          portItem.percent_change_24h = coinItem.percent_change_24h;
          portItem.percent_change_7d = coinItem.percent_change_7d;
          portItem.coinUSD = portItem.count * coinItem.price_usd;
        }
      });
      return {
        ...portItem
      }
  });
  sumTotalUSD(portfolio);
  sumTotalBTC(portfolio);
  calcPercentage(portfolio, totalUSD);
}



//Like the download action.. just more complex
//When the portfolio mounts, override bits of it..
//Or dispatch an action.. that updates all of the portfolio items with the correct numbers..
//This would be a complicated update array map which lives at the reducer which modifies
//portfolio[i].price_usd if portfolio[i].id = coins[i].id
