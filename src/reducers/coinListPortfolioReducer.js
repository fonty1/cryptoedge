import initialState from './initialState';
import { addCommas, heatmapChangeCalc } from '../helpers';
import { REMOVE_COIN_FROM_PORTFOLIO } from '../constants/actionTypes';
import { ADD_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { DOWNLOAD_COINS_PENDING } from '../constants/actionTypes';
import { DOWNLOAD_COINS_FULFILLED } from '../constants/actionTypes';
import { SET_PRICE_MARKERS } from '../constants/actionTypes';
import { UPDATE_PORTFOLIOCOIN_COUNT } from '../constants/actionTypes';
import { UPDATE_PORTFOLIO_TOTALS } from '../constants/actionTypes';
import { UPDATE_INDIVIDUAL_PORTFOLIO_PERCENTAGE } from '../constants/actionTypes';
import { UPDATE_SAVED_PORTFOLIO } from '../constants/actionTypes';
import { ADD_CUSTOM_COIN_TO_PORTFOLIO } from '../constants/actionTypes';
import { UPDATE_INDIVIDUAL_TOTALS } from '../constants/actionTypes';
import { UPDATE_CUSTOM_NAME } from '../constants/actionTypes';
import { UPDATE_CUSTOM_BTC } from '../constants/actionTypes';
import { UPDATE_CUSTOM_USD } from '../constants/actionTypes';
import { SORTLIST } from '../constants/actionTypes';
import { CALCULATE_PORTFOLIO_TOTAL_PERCENTAGES } from '../constants/actionTypes';

export default function coinListPortfolioReducer(state = initialState, action) {
  switch (action.type) {

    case SORTLIST:
      var colSort = action.column;
      var listSort = action.list;
      // make a true mark on the signature of the list/column
      // if it's true then invert the sort

      var activeSort;
      if ((typeof state.activeSorts[listSort][colSort] === 'undefined') || (state.activeSorts[listSort][colSort] === true)) {
        activeSort = false;
      } else {
        activeSort = true;
      }

      let sortedCoins = [].concat(state[listSort])
        .sort(function(a,b){
          if (state.activeSorts[listSort][colSort] === true) {
            return Number(a[colSort])  - Number(b[colSort])
          } else {
          	return Number(b[colSort])  - Number(a[colSort])
          }
        })
      return {
        ...state,
        [listSort]: sortedCoins,
        activeSorts: {
          ...state.activeSorts,
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
            if (coinItem.rank === 'C') {
              portItem.rank = 0;
            } else {
              portItem.rank = coinItem.rank;
            }
            portItem.formatted_price_usd = coinItem.formatted_price_usd;
            portItem.price_btc = coinItem.price_btc;
            portItem.twentyfour_volume_usd = coinItem.twentyfour_volume_usd;
            portItem.formattedTwentyfour_volume_usd = coinItem.formattedTwentyfour_volume_usd;
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
      var tempTotalUSDWithoutCustom = 0;

      for(var i = 0, len = state.portfolio.length; i < len; i++) {
        if (state.portfolio[i].profitLoss !== '') {
          tempTotalProfitLoss += state.portfolio[i].profitLoss;
        }
        if (state.portfolio[i].coinUSD !== '') {
          tempTotalUSD += state.portfolio[i].coinUSD;
        }
        if (state.portfolio[i].coinBTC !== '') {
          tempTotalBTC += state.portfolio[i].coinBTC;
        }
        if(state.portfolio[i].id !== "custom") {
          tempTotalUSDWithoutCustom += state.portfolio[i].coinUSD;
        }
      }

      return {
        ...state,
        totalUSD: tempTotalUSD,
        totalUSDWithoutCustom: tempTotalUSDWithoutCustom,
        totalBTC: tempTotalBTC.toFixed(4),
        formattedTotalUSD: addCommas(tempTotalUSD.toFixed(2)),
        formattedTotalProfitLoss: addCommas(tempTotalProfitLoss.toFixed(2))
      };

    case UPDATE_INDIVIDUAL_PORTFOLIO_PERCENTAGE:
      let tempPercentagePortfolio = state.portfolio.map( (item, index) => {
          let individualPercentageTemp = '';
          let percentageWithoutCustomsTemp = '';
          if(item.coinUSD !== '') {
            individualPercentageTemp = Number(((item.coinUSD / state.totalUSD) * 100).toFixed(2));
            percentageWithoutCustomsTemp = Number(((item.coinUSD / state.totalUSDWithoutCustom) * 100).toFixed(2));
          }

          return {
              ...item,
              percentage: individualPercentageTemp,
              percentageWithoutCustoms: percentageWithoutCustomsTemp
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
              if(correctBoughtAt === '') {
                var profitLoss = '';
                var formattedProfitLoss = '';
                var formattedCoinUSD = '';
              } else {
                var profitLoss = ((item.price_usd - correctBoughtAt) * item.count).toFixed(2) * 10000 / 10000;
                var formattedProfitLoss = addCommas(Math.round(((item.price_usd - correctBoughtAt) * item.count).toFixed(2) * 10000) / 10000);
                var formattedCoinUSD = addCommas(Math.round((item.count * item.price_usd).toFixed(2) * 10000) / 10000);
              }

              return {
                  ...item,
                  coinUSD: item.count * item.price_usd,
                  coinBTC: item.count * item.price_btc,
                  boughtAt: correctBoughtAt,
                  profitLoss: profitLoss,
                  formattedProfitLoss: formattedProfitLoss,
                  formattedCoinUSD: formattedCoinUSD
              }
          });
          return {
            ...state,
             portfolio: tempUpdatedIndividualTotalsPortfolio
          };

          case CALCULATE_PORTFOLIO_TOTAL_PERCENTAGES:
          let totalPercentChangeOneHour = 0;
          let totalPercentChangeTwentyFourHours = 0;
          let totalPercentChangeSevenDays = 0;

          state.portfolio.map( (item, index) => {
            console.log(item.percent_change_1h);
            if (item.percent_change_1h !== '') {
              totalPercentChangeOneHour += (item.percentageWithoutCustoms / 100) * item.percent_change_1h;
            }
            if (item.percent_change_24h !== '') {
              totalPercentChangeTwentyFourHours += (item.percentageWithoutCustoms / 100) * item.percent_change_24h;
            }
            if (item.percent_change_7d !== '') {
              totalPercentChangeSevenDays += (item.percentageWithoutCustoms / 100) * item.percent_change_7d;
            }
          });

          let percent_change_1h = heatmapChangeCalc(totalPercentChangeOneHour);
          let percent_change_24h = heatmapChangeCalc(totalPercentChangeTwentyFourHours);
          let percent_change_7d = heatmapChangeCalc(totalPercentChangeSevenDays);
          
          return {
            ...state,
            totalPercentChangeOneHour: totalPercentChangeOneHour.toFixed(2),
            totalPercentChangeTwentyFourHours: totalPercentChangeTwentyFourHours.toFixed(2),
            totalPercentChangeSevenDays: totalPercentChangeSevenDays.toFixed(2),
            totalStyles: {
              percent_change_1h,
              percent_change_24h,
              percent_change_7d
            }
          };

    default:
      return state;
  }
}
