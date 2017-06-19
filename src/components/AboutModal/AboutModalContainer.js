import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../actions/uiActions';
import AboutModal from './AboutModal';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    aboutModalVisibility: state.ui.aboutModalVisibility
});

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(AboutModal);
