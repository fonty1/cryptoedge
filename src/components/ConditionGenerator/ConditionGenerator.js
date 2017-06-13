import React, { Component } from 'react';
import './ConditionGenerator.css';

class ConditionGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinIDTarget: 'Bitcoin',
            coinAttribTarget: 'price_usd',
            greaterThan: true,
            lessThan: false,
            userDefinedTargetValue: '2000',
            flagColor: '',
            selectedOperator: '>',
            redFlag: false,
            purpleFlag: false,
            greenFlag: false,
        }
        this.onChangeCoinIDTarget = this.onChangeCoinIDTarget.bind(this);
        this.onChangeCoinAttribTarget = this.onChangeCoinAttribTarget.bind(this);
        this.onChangeUserDefinedValue = this.onChangeUserDefinedValue.bind(this);
        this.createCondition = this.createCondition.bind(this);
        this.changeOperator = this.changeOperator.bind(this);
        this.redFlag = this.redFlag.bind(this);
        this.purpleFlag = this.purpleFlag.bind(this);
        this.greenFlag = this.greenFlag.bind(this);
    }

    createCondition(e) {
      e.preventDefault();
      let selectedOperator = '>';
      if (this.state.lessThan === true) {
          selectedOperator = '<';
      }

      let conditionString =
        this.state.coinIDTarget + ': ' +
        this.state.coinAttribTarget + ' ' +
        selectedOperator + ' ' +
        this.state.userDefinedTargetValue + ' = ' +
        this.state.flagColor + ' flag';
      console.log(conditionString);

      this.props.actions.addCondition(
            this.state.coinIDTarget,
            selectedOperator,
            this.state.coinAttribTarget,
            this.state.userDefinedTargetValue,
            this.state.flagColor,
            conditionString
        );
        this.props.actions.evaluateConditions();
    }

    onChangeCoinIDTarget (e) {
        let newVal = e.target.value;
        this.setState({coinIDTarget: newVal});
    }

    onChangeCoinAttribTarget (e) {
        let newVal = e.target.value;
        this.setState({coinAttribTarget: newVal});
    }

    onChangeUserDefinedValue (e) {
        let newVal = e.target.value;
        this.setState({userDefinedTargetValue: newVal});
    }

    changeOperator(e) {
      e.preventDefault();
      if(this.state.lessThan === true) {
          this.setState({
              greaterThan: true,
              lessThan: false,
              selectedOperator: '>'
          });
      } else {
          this.setState({
              greaterThan: false,
              lessThan: true,
              selectedOperator: '<'
          });
      }
    }

    redFlag(e) {
      e.preventDefault();
      this.setState({
          flagColor: 'Red',
          purpleFlag: false,
          redFlag: true,
          greenFlag: false
      });
    }

    purpleFlag(e) {
      e.preventDefault();
      this.setState({
          flagColor: 'Purple',
          purpleFlag: true,
          redFlag: false,
          greenFlag: false
      });
    }

    greenFlag(e) {
      e.preventDefault();
      this.setState({
          flagColor: 'Green',
          purpleFlag: false,
          redFlag: false,
          greenFlag: true
      });
    }

    render() {
        return (
            <div>
              <div>
                <span>Crypto: </span>
                <input
                    value={this.state.coinIDTarget}
                    onChange={this.onChangeCoinIDTarget}
                    type="text"
                />
              </div>
              <input
                  value={this.state.coinAttribTarget}
                  onChange={this.onChangeCoinAttribTarget}
                  type="text"
              />
              <button onClick={(e) => this.changeOperator(e)} className="changeOperatorButton">
                  {this.state.selectedOperator}
              </button>
              <input
                  value={this.state.userDefinedValue}
                  onChange={this.onChangeUserDefinedValue}
                  type="text"
              />
              <div>
                  <button onClick={(e) => this.redFlag(e)} className={"redFlagButton " + (this.state.redFlag ? "active" : "")}>
                    <i className="fa fa-flag" style={{color:'red'}} aria-hidden="true"></i>
                  </button>
                  <button onClick={(e) => this.purpleFlag(e)} className={"purpleFlagButton " + (this.state.purpleFlag ? "active" : "")}>
                    <i className="fa fa-flag" style={{color:'purple'}} aria-hidden="true"></i>
                  </button>
                  <button onClick={(e) => this.greenFlag(e)} className={"greenFlagButton " + (this.state.greenFlag ? "active" : "")}>
                    <i className="fa fa-flag" style={{color:'green'}} aria-hidden="true"></i>
                  </button>
              </div>

              <button onClick={(e) => this.createCondition(e)} className="createConditionButton">
                  Create Condition <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
        )
    }
}

export default ConditionGenerator;
