import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../actions/uiActions';
import FlagModal from './FlagModal';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    flagModalVisibility: state.ui.flagModalVisibility,
    conditionals: state.conditions.conditionals
});

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(FlagModal);
