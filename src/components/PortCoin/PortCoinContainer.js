import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/coinListPortfolioActions';
import PortCoin from './PortCoin';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    handleChange(index, event) {
      var newVal = event.target.value;
      this.setState({value: event.target.value});
      this.props.actions.updatePortfolioCount(newVal, index);
      this.props.actions.updateUSDHoldings(newVal, index);
      this.props.actions.updatePercentageHoldings(newVal, index);
    }
  };
};

export default connect(  mapStateToProps,  mapDispatchToProps )(PortCoin);
