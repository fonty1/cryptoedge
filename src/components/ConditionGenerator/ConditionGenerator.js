import React, { Component } from 'react';
import './ConditionGenerator.css';

class ConditionGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinIDTarget: '',
            coinAttribTarget: '',
            greaterThan: true,
            lessThan: false,
            userDefinedTargetValue: '',
            flagColour: '',
            redFlag: true,
            yellowFlag: false,
            greenFlag: false,
        }
        this.onChangeCoinIDTarget = this.onChangeCoinIDTarget.bind(this);
        this.onChangeCoinAttribTarget = this.onChangeCoinAttribTarget.bind(this);
        this.onChangeUserDefinedValue = this.onChangeUserDefinedValue.bind(this);
        this.createCondition = this.createCondition.bind(this);
        this.greaterThanOperator = this.greaterThanOperator.bind(this);
        this.lessThanOperator = this.lessThanOperator.bind(this);
        this.redFlag = this.redFlag.bind(this);
        this.yellowFlag = this.yellowFlag.bind(this);
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
        this.state.flagColour + ' flag';
      console.log(conditionString);

      this.props.actions.addCondition(
            this.state.coinIDTarget,
            selectedOperator,
            this.state.coinAttribTarget,
            this.state.userDefinedTargetValue,
            this.state.flagColour,
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

    greaterThanOperator(e) {
      e.preventDefault();
      this.setState({
          greaterThan: true,
          lessThan: false
      });
    }

    lessThanOperator(e) {
      e.preventDefault();
      this.setState({
          greaterThan: false,
          lessThan: true
      });
    }

    redFlag(e) {
      e.preventDefault();
      this.setState({
          flagColour: 'Red',
          yellowFlag: false,
          redFlag: true,
          greenFlag: false
      });
    }

    yellowFlag(e) {
      e.preventDefault();
      this.setState({
          flagColour: 'Yellow',
          yellowFlag: true,
          redFlag: false,
          greenFlag: false
      });
    }

    greenFlag(e) {
      e.preventDefault();
      this.setState({
          flagColour: 'Green',
          yellowFlag: false,
          redFlag: false,
          greenFlag: true
      });
    }

    render() {
        return (
            <div>
              <span>Crypto: </span>
              <input
                  value={this.state.coinIDTarget}
                  onChange={this.onChangeCoinIDTarget}
                  type="text"
              />
              <input
                  value={this.state.coinAttribTarget}
                  onChange={this.onChangeCoinAttribTarget}
                  type="text"
              />
              <button onClick={(e) => this.greaterThanOperator(e)} className={"greaterThanOperatorButton " + (this.state.greaterThan ? "active" : "")}>
                  GT
              </button>
              <button onClick={(e) => this.lessThanOperator(e)} className={"lessThanOperatorButton " + (this.state.lessThan ? "active" : "")}>
                  LT
              </button>
              <input
                  value={this.state.userDefinedValue}
                  onChange={this.onChangeUserDefinedValue}
                  type="text"
              />
              <button onClick={(e) => this.redFlag(e)} className={"redFlagButton " + (this.state.redFlag ? "active" : "")}>
                <i className="fa fa-flag" style={{color:'red'}} aria-hidden="true"></i>
              </button>
              <button onClick={(e) => this.yellowFlag(e)} className={"yellowFlagButton " + (this.state.yellowFlag ? "active" : "")}>
                <i className="fa fa-flag" style={{color:'yellow'}} aria-hidden="true"></i>
              </button>
              <button onClick={(e) => this.greenFlag(e)} className={"greenFlagButton " + (this.state.greenFlag ? "active" : "")}>
                <i className="fa fa-flag" style={{color:'green'}} aria-hidden="true"></i>
              </button>
              <button onClick={(e) => this.createCondition(e)} className="createConditionButton">
                  Create Condition <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
        )
    }
}

export default ConditionGenerator;
