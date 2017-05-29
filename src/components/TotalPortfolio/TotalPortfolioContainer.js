import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import TotalPortfolio from './TotalPortfolio';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    cryptoPortfolio: state.coinListPortfolio.portfolio,
    formattedTotalUSD: state.coinListPortfolio.formattedTotalUSD,
    totalBTC: state.coinListPortfolio.totalBTC,
    formattedTotalProfitLoss: state.coinListPortfolio.formattedTotalProfitLoss
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(TotalPortfolio);
