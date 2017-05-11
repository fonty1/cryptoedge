import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import PortCoin from './PortCoin';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    portfolio: state.coinListPortfolio.portfolio,
    totalUSD : state.coinListPortfolio.totalUSD,
    totalBTC : state.coinListPortfolio.totalBTC,
    boughtAt : state.coinListPortfolio.boughtAt,
    BTCPriceMarker : state.coinListPortfolio.BTCPriceMarker
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(PortCoin);
