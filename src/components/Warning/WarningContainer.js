import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import Warning from './Warning';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    apiErrored: state.coinListPortfolio.apiErrored
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(Warning);
