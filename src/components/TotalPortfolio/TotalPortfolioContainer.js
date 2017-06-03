import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import TotalPortfolio from './TotalPortfolio';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    cryptoPortfolio: state.coinListPortfolio.portfolio,
    formattedTotalUSD: state.coinListPortfolio.formattedTotalUSD,
    totalBTC: state.coinListPortfolio.totalBTC,
    formattedTotalProfitLoss: state.coinListPortfolio.formattedTotalProfitLoss,
    totalPercentChangeOneHour: state.coinListPortfolio.totalPercentChangeOneHour,
    totalPercentChangeTwentyFourHours: state.coinListPortfolio.totalPercentChangeTwentyFourHours,
    totalPercentChangeSevenDays: state.coinListPortfolio.totalPercentChangeSevenDays,
    oneHourStyles: state.coinListPortfolio.totalStyles.percent_change_1h,
    twentyFourHourStyles: state.coinListPortfolio.totalStyles.percent_change_24h,
    sevenDayStyles: state.coinListPortfolio.totalStyles.percent_change_7d,
    change_1h_value: state.coinListPortfolio.change_1h_value,
    change_24h_value: state.coinListPortfolio.change_24h_value,
    change_7d_value: state.coinListPortfolio.change_7d_value
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(TotalPortfolio);
