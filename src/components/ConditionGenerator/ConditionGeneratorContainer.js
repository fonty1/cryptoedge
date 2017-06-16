import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import ConditionGenerator from './ConditionGenerator';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    coinListNames: state.coinListPortfolio.coinListNames,
    coinListAttributes: state.coinListPortfolio.coinListAttributes
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(ConditionGenerator);
