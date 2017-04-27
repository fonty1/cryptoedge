import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/portfolioActions';
import Portfolio from './Portfolio';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    portfolioCryptoList: state.coinStorage.portfolioCoins
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(Portfolio);
