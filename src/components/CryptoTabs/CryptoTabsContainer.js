import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../actions/uiActions';
import CryptoTabs from './CryptoTabs';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(CryptoTabs);
