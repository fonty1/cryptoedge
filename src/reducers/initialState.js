export default {
  coins: [],
  portfolio: [],
  totalUSD: 0,
  totalUSDWithoutCustom: 0,
  formattedTotalUSD: 0,
  totalProfitLoss: 0,
  formattedTotalProfitLoss: 0,
  totalBTC: 0,
  BTCPriceMarker: 0,
  ETHPriceMarker: 0,
  coinsLoading: false,
  totalPercentChangeOneHour: '',
  change_1h_value: '',
  totalPercentChangeTwentyFourHours: '',
  change_24h_value: '',
  totalPercentChangeSevenDays: '',
  change_7d_value: '',
  totalStyles: {
    percent_change_1h: {},
    percent_change_24h: {},
    percent_change_7d: {}
  },
  activeSorts: {
    coins: {
        currentSort: '',
        rank: true,
        price_usd: false,
        price_btc: false,
        percent_change_1h: false,
        percent_change_24h: false,
        percent_change_7d: false,
        weightedVolume: false
    },
    portfolio: {
        currentSort: '',
        rank: false,
        count: false,
        coinUSD: false,
        percentage: false,
        boughtAt: false,
        profitLoss: false,
        price_usd: false,
        price_btc: false,
        percent_change_1h: false,
        percent_change_24h: false,
        percent_change_7d: false,
        weightedVolume: false
    }
  },
  userRequestsFullView: false
}
