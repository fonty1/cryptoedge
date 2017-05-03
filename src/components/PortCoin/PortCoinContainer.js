import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import PortCoin from './PortCoin';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    totalUSD : state.coinListPortfolio.totalUSD,
    totalBTC : state.coinListPortfolio.totalBTC,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(PortCoin);
