import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as coinListPortfolioActions from '../../actions/coinListPortfolioActions';
import * as uiActions from '../../actions/uiActions';
import AppHeader from './AppHeader';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    coinsLoading: state.coinListPortfolio.coinsLoading,
    flagModalVisibility: state.ui.flagModalVisibility
});

const mapDispatchToProps = (dispatch) => {
  return {
    coinListPortfolioActions: bindActionCreators(coinListPortfolioActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(AppHeader);
