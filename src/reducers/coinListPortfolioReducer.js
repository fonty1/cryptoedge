import initialState from './initialState';
import { addCommas } from '../helpers';
import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS } from '../constants/actionTypes';
import { SET_PRICE_MARKERS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_PERCENTAGE } from '../constants/actionTypes';
import { UPDATE_SAVED_PORTFOLIO } from '../constants/actionTypes';
import { ADD_CUSTOM_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { UPDATE_INDIVIDUAL_TOTALS } from '../constants/actionTypes';
import { CALCULATE_INDIVIDUAL_PROFIT_LOSS } from '../constants/actionTypes';

import { UPDATE_CUSTOM_NAME } from '../constants/actionTypes';
import { UPDATE_CUSTOM_BTC } from '../constants/actionTypes';
import { UPDATE_CUSTOM_USD } from '../constants/actionTypes';

export default function coinListPortfolioReducer(state = initialState, action) {
  let portfolio = updateObjectInArray(state.portfolio, action);
  let customNamePortfolio = updateNameInArray(state.portfolio, action);
  let customUSDPortfolio = updateUSDInArray(state.portfolio, action);
  let customBTCPortfolio = updateBTCInArray(state.portfolio, action);
  let updateIndividualTotalsPortfolio = updateIndividualTotals(state.portfolio);
  let totalUSD = sumTotalUSD(state.portfolio);
  let totalBTC = sumTotalBTC(state.portfolio);
  let percentagePortfolio = calcPercentage(state.portfolio, state.totalUSD);
  let updatedSavedPortfolio = updateSavedPortfolio(state.portfolio, state.coins);
  let calculateIndividualProfitLossPortfolio = calculateIndividualProfitLoss(state.portfolio, action);

  switch (action.type) {
    case DOWNLOAD_COINS:
      return {
        ...state,
        coins: action.coins
      };

    case SET_PRICE_MARKERS:
      return {
        ...state,
        BTCPriceMarker: action.BTCPriceMarker,
        ETHPriceMarker: action.ETHPriceMarker
      };

    case CALCULATE_INDIVIDUAL_PROFIT_LOSS:
      return {
        ...state,
        portfolio: calculateIndividualProfitLossPortfolio
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

    case ADD_CUSTOM_COIN_TO_PORTFOLIO:
      return {
        ...state,
        portfolio: state.portfolio.concat(action.customCoin)
      };

      case UPDATE_CUSTOM_NAME:
        return {
          ...state,
          portfolio: customNamePortfolio
        };

      case UPDATE_CUSTOM_BTC:
        return {
          ...state,
          portfolio: customBTCPortfolio
        };

      case UPDATE_CUSTOM_USD:
        return {
          ...state,
          portfolio: customUSDPortfolio
        };

        case UPDATE_INDIVIDUAL_TOTALS:
          return {
            ...state,
            portfolio: updateIndividualTotalsPortfolio
          };

    default:
      return state;
  }
}

function updateIndividualTotals(array) {
    return array.map( (item, index) => {
          return {
              ...item,
              coinUSD: item.count * item.price_usd,
              coinBTC: item.count * item.price_btc,
              profitLoss: addCommas(Math.round(((item.price_usd - item.boughtAt) * item.count).toFixed(2) * 10000) / 10000),
              formattedCoinUSD: addCommas(Math.round((item.count * item.price_usd).toFixed(2) * 10000) / 10000)
          };
    });
}

function calculateIndividualProfitLoss(array, action) {
        return array.map( (item, index) => {
          if(index !== action.position) {
              // This isn't the item we care about - keep it as-is
            return item;
          } else {
            let correctBoughtAt = item.boughtAt;
            if (item.boughtAt !== action.boughtAt) {
              // If boughtAt has been updated, use it.
              // If not, use the existing boughtAt value.
              correctBoughtAt = action.boughtAt
            }
            let profitLossFormatted = addCommas(Math.round(((item.price_usd - correctBoughtAt) * item.count).toFixed(2) * 10000) / 10000);
            return {
                ...item,
                boughtAt: correctBoughtAt,
                profitLoss: profitLossFormatted
            };
          }
    });
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

function updateNameInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.position) {
            // This isn't the item we care about - keep it as-is
          return item;
        } else {
          return {
              ...item,
              name: action.name
          };
        }
    });
}

function updateUSDInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.position) {
            // This isn't the item we care about - keep it as-is
          return item;
        } else {
          return {
              ...item,
              price_usd: action.price_usd,
              price_btc: action.price_btc
          };
        }
    });
}

function updateBTCInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.position) {
            // This isn't the item we care about - keep it as-is
          return item;
        } else {
          return {
              ...item,
              price_usd: action.price_usd,
              price_btc: action.price_btc
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
        return false
      });
      return {
        ...portItem
      }
  });
  sumTotalUSD(portfolio);
  sumTotalBTC(portfolio);
  calcPercentage(portfolio, totalUSD);
}
