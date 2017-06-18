import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../actions/uiActions';
import TipJarModal from './TipJarModal';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    tipJarModalVisibility: state.ui.tipJarModalVisibility
});

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(TipJarModal);
