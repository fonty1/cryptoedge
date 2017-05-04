import initialState from './initialState';
import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_PERCENTAGE } from '../constants/actionTypes';

export default function coinListPortfolioReducer(state = initialState, action) {
  let portfolio = updateObjectInArray(state.portfolio, action);
  let totalUSD = sumTotalUSD(state.portfolio);
  let totalBTC = sumTotalBTC(state.portfolio);
  let percentagePortfolio = calcPercentage(state.portfolio, state.totalUSD);

  switch (action.type) {
    case DOWNLOAD_COINS:
      return {
        ...state,
        coins: action.coins
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
        totalBTC
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
