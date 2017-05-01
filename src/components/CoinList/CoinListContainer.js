import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import CoinList from './CoinList';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    cryptoList: state.coinListPortfolio.coins
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(CoinList);
