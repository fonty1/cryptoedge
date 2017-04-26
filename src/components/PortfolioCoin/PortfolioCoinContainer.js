import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListActions';
import CoinList from './CoinList';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    mobileMenuVisible: state.mobileMenuVisible
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(CoinList);
