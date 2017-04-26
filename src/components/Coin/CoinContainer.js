import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListActions';
import Coin from './Coin';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(Coin);
