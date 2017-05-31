import initialState from './initialState';
import { addCommas } from '../helpers';
import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS_PENDING } from '../constants/actionTypes';
import { DOWNLOAD_COINS_FULFILLED } from '../constants/actionTypes';
import { SET_PRICE_MARKERS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_PERCENTAGE } from '../constants/actionTypes';
import { UPDATE_SAVED_PORTFOLIO } from '../constants/actionTypes';
import { ADD_CUSTOM_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { UPDATE_INDIVIDUAL_TOTALS } from '../constants/actionTypes';
import { UPDATE_CUSTOM_NAME } from '../constants/actionTypes';
import { UPDATE_CUSTOM_BTC } from '../constants/actionTypes';
import { UPDATE_CUSTOM_USD } from '../constants/actionTypes';
import { SORTLIST } from '../constants/actionTypes';

export default function coinListPortfolioReducer(state = initialState, action) {
  switch (action.type) {

    case SORTLIST:
      var colSort = action.column;
      var listSort = action.list;
      // make a true mark on the signature of the list/column
      // if it's true then invert the sort
      // debugger
      var activeSort;
      if ((typeof state.activeSorts[listSort][colSort] === 'undefined') || (state.activeSorts[listSort][colSort] === true)) {
        activeSort = false;
      } else {
        activeSort = true;
      }

      let sortedCoins = [].concat(state[listSort])
        .sort(function(a,b){
          if (state.activeSorts[listSort][colSort] === true) {
            return b[colSort]  - a[colSort]
          } else {
          	return a[colSort]  - b[colSort]
          }
        })
      return {
        ...state,
        coins: sortedCoins,
        activeSorts: {
          [listSort]: {
            ...state.activeSorts[listSort],
            [colSort]: activeSort,
          }
        }
      };

    case DOWNLOAD_COINS_PENDING:
      return {
        ...state,
        coinsLoading: true
      };

    case DOWNLOAD_COINS_FULFILLED:
      return {
        ...state,
        coins: action.coins,
        coinsLoading: false
      };

    case SET_PRICE_MARKERS:
      return {
        ...state,
        BTCPriceMarker: action.BTCPriceMarker,
        ETHPriceMarker: action.ETHPriceMarker
      };

    case UPDATE_SAVED_PORTFOLIO:
    let tempSavedUpdate = state.portfolio.map( (portItem, index) => {
        state.coins.map( (coinItem, index) => {
          if(portItem.id === coinItem.id) {
            portItem.price_usd = coinItem.price_usd;
            portItem.rank = coinItem.rank;
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
      return {
        ...state,
        portfolio: tempSavedUpdate
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
      let tempPortfolio =  state.portfolio.map( (item, index) => {
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
      return {
        ...state,
        portfolio: tempPortfolio
      };

    case UPDATE_PORTFOLIO_TOTALS:
      let tempTotalUSD = 0;
      var tempTotalBTC = 0;
      var tempTotalProfitLoss = 0;

      for(var i = 0, len = state.portfolio.length; i < len; i++) {
        tempTotalProfitLoss += state.portfolio[i].profitLoss;
        tempTotalUSD += state.portfolio[i].coinUSD;
        tempTotalUSD += state.portfolio[i].coinBTC;
        tempTotalBTC += state.portfolio[i].coinBTC;
      }

      return {
        ...state,
        totalUSD: tempTotalUSD,
        totalBTC: tempTotalBTC.toFixed(4),
        formattedTotalUSD: addCommas(tempTotalUSD.toFixed(2)),
        formattedTotalProfitLoss: addCommas(tempTotalProfitLoss.toFixed(2))
      };

    case UPDATE_PORTFOLIO_PERCENTAGE:
      let tempPercentagePortfolio = state.portfolio.map( (item, index) => {
            return {
                ...item,
                percentage: ((item.coinUSD / state.totalUSD) * 100).toFixed(2)
            };
      });
      return {
        ...state,
        portfolio: tempPercentagePortfolio
      };

    case ADD_CUSTOM_COIN_TO_PORTFOLIO:
      return {
        ...state,
        portfolio: state.portfolio.concat(action.customCoin)
      };

      case UPDATE_CUSTOM_NAME:
        let tempCustomName =  state.portfolio.map( (item, index) => {
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
        return {
          ...state,
          portfolio: tempCustomName
        };

      case UPDATE_CUSTOM_BTC:
        let tempCustomBTCPortfolio = state.portfolio.map( (item, index) => {
            if(index !== action.position) {
                // This isn't the item we care about - keep it as-is
              return item;
            } else {
              return {
                  ...item,
                  price_usd: Number(action.price_usd).toFixed(6),
                  price_btc: Number(action.price_btc).toFixed(6)
              };
            }
        });
        return {
          ...state,
          portfolio: tempCustomBTCPortfolio
        };

      case UPDATE_CUSTOM_USD:
        let tempCustomUSDPortfolio = state.portfolio.map( (item, index) => {
            if(index !== action.position) {
                // This isn't the item we care about - keep it as-is
              return item;
            } else {
              return {
                  ...item,
                  price_usd: Number(action.price_usd).toFixed(6),
                  price_btc: Number(action.price_btc).toFixed(6)
              };
            }
        });
        return {
          ...state,
          portfolio: tempCustomUSDPortfolio
        };

        case UPDATE_INDIVIDUAL_TOTALS:
        let tempUpdatedIndividualTotalsPortfolio = state.portfolio.map( (item, index) => {
              let correctBoughtAt = item.boughtAt;
              if(typeof action.boughtAt !== 'undefined'){
                if(index !== action.position) {
                    // This isn't the item we care about - keep it as-is
                  return item;
                } else {
                  if (typeof action.boughtAt !== 'undefined') {
                    // If boughtAt has been updated, use it.
                    // If not, use the existing boughtAt value.
                    correctBoughtAt = action.boughtAt;
                  }
                }
              }
              var profitLoss = ((item.price_usd - correctBoughtAt) * item.count).toFixed(2) * 10000 / 10000;
              var formattedProfitLoss = addCommas(Math.round(((item.price_usd - correctBoughtAt) * item.count).toFixed(2) * 10000) / 10000);
              return {
                  ...item,
                  coinUSD: item.count * item.price_usd,
                  coinBTC: item.count * item.price_btc,
                  boughtAt: correctBoughtAt,
                  profitLoss: profitLoss,
                  formattedProfitLoss: formattedProfitLoss,
                  formattedCoinUSD: addCommas(Math.round((item.count * item.price_usd).toFixed(2) * 10000) / 10000)
              }
          });
          return {
            ...state,
             portfolio: tempUpdatedIndividualTotalsPortfolio
          };

    default:
      return state;
  }
}
