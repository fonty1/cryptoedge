import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as conditionsActions from '../../actions/conditionsActions';
import ConditionGenerator from './ConditionGenerator';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const mapDispatchToProps = (dispatch) => {
  return {
    conditionsActions: bindActionCreators(conditionsActions, dispatch),
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(ConditionGenerator);
