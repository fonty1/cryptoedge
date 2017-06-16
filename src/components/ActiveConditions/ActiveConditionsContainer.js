import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../actions/uiActions';
import * as actions from '../../actions/coinListPortfolioActions';
import ActiveConditions from './ActiveConditions';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(ActiveConditions);
