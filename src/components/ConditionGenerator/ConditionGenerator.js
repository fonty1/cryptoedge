import React, { Component } from 'react';

class ConditionGenerator extends Component {
    constructor(props) {
        super(props);
        this.createCondition = this.createCondition.bind(this);
        this.greaterThanOperator = this.greaterThanOperator.bind(this);
        this.lessThanOperator = this.lessThanOperator.bind(this);
        this.redFlag = this.redFlag.bind(this);
        this.yellowFlag = this.yellowFlag.bind(this);
        this.greenFlag = this.greenFlag.bind(this);

        this.state = {
            coinIDTarget: 'x',
            operator: 'y',
            userDefinedTargetValue: '0.123',
            conditional: 'a > 0.1234',
            flagColour: 'black'
        }
    }
    // Perhaps store the form's
    // state locally, then push to redux...
    createCondition(e) {
      e.preventDefault();
      console.log(this.state.coinIDTarget);
      console.log(this.state.operator);
      console.log(this.state.flagColour);
      console.log(this.state.userDefinedTargetValue);

      let tempConditional =
        this.state.coinIDTarget + ' ' +
        this.state.operator + ' ' +
        this.state.flagColour + ' ' +
        this.state.userDefinedTargetValue;
      console.log(tempConditional);

      this.setState({
          conditional: tempConditional
      });

      this.props.conditionsActions.addFlag(this.state.coinIDTarget, this.state.conditional, this.state.flagColour)
    }

    onChangeCoinID (e) {
        e.preventDefault()
        let newVal = e.target.value;
        this.state.coinIDTarget = newVal;
    }

    onChangeUserDefinedValue (e) {
        e.preventDefault()
        let newVal = e.target.value;
        this.state.userDefinedTargetValue = newVal;
    }

    greaterThanOperator(e) {
      e.preventDefault();
      this.setState({
          opertator: '>'
      });
    }

    lessThanOperator(e) {
      e.preventDefault();
      this.setState({
          opertator: '<'
      });
    }

    redFlag(e) {
      e.preventDefault();
      this.setState({
          flagColour: 'red'
      });
    }

    yellowFlag(e) {
      e.preventDefault();
      this.setState({
          flagColour: 'yellow'
      });
    }

    greenFlag(e) {
      e.preventDefault();
      this.setState({
          flagColour: 'green'
      });
    }

    render() {
        return (
            <div>
              <span>Crypto: </span>
              <input
                  value={""}
                  onChange={this.onChangeCoinID}
                  type="text"
              />
              <button onClick={() => this.greaterThanOperator()} className="submitConditionButton">
                  Greater Than
              </button>
              <button onClick={() => this.lessThanOperator()} className="submitConditionButton">
                  Less Than
              </button>
              <input
                  value={""}
                  onChange={this.onChangeUserDefinedValue}
                  type="text"
              />
              <button onClick={(e) => this.redFlag(e)} className="redFlagButton">
                <i className="fa fa-flag" style={{color:'red'}} aria-hidden="true"></i>
              </button>
              <button onClick={(e) => this.yellowFlag(e)} className="yellowFlagButton">
                <i className="fa fa-flag" style={{color:'yellow'}} aria-hidden="true"></i>
              </button>
              <button onClick={(e) => this.greenFlag(e)} className="greenFlagButton">
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
