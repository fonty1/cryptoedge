import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import Portfolio from './Portfolio';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    portfolioCryptoList: state.coinListPortfolio.portfolio,
    userRequestsFullView: state.coinListPortfolio.userRequestsFullView
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(Portfolio);
