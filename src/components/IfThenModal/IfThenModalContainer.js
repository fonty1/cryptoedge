import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../actions/uiActions';
import * as actions from '../../actions/coinListPortfolioActions';
import IfThenModal from './IfThenModal';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    flagModalVisibility: state.ui.flagModalVisibility,
    conditions: state.coinListPortfolio.conditions
});

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(IfThenModal);
