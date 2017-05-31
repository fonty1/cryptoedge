import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import AppHeader from './AppHeader';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    coinsLoading: state.coinListPortfolio.coinsLoading 
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(AppHeader);
