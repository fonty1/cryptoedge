export default {
  coins: [],
  portfolio: [],
  totalUSD: 0,
  formattedTotalUSD: 0,
  totalProfitLoss: 0,
  formattedTotalProfitLoss: 0,
  totalBTC: 0,
  BTCPriceMarker: 0,
  ETHPriceMarker: 0,
  coinsLoading: false,
  activeSorts: {
    coins: {
        price_usd: false,
        price_btc: false,
        rank: false,
        percent_change_1h: false,
        percent_change_24h: false,
        percent_change_7d: false
    }
  }
}
