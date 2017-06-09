import React from 'react';

const ConditionGenerator = ( { actions } ) => {
    // Perhaps store the form's
    // state locally, then push to redux...
    const createCondition = (e) => {
      e.preventDefault();
      //ref the inputs val?
      // Build the conditional to dispatch
      // actions.
    }

    const greaterThanOperator = (e) => {
      e.preventDefault();
      //ref the inputs val?
    }

    const lessThanOperator = (e) => {
      e.preventDefault();
      //ref the inputs val?
    }

    const redFlag = (e) => {
      e.preventDefault();
      //ref the inputs val?
    }

    const yellowFlag = (e) => {
      e.preventDefault();
      //ref the inputs val?
    }

    const greenFlag = (e) => {
      e.preventDefault();
      //ref the inputs val?
    }

    return (
        <div>
          <span>Crypto: </span>
          <input
              value=""
          />
          <button onClick={() => greaterThanOperator()} className="submitConditionButton">
              Greater Than
          </button>
          <button onClick={() => lessThanOperator()} className="submitConditionButton">
              Less Than
          </button>
          <input
              value=""
          />
          <button onClick={() => redFlag()} className="redFlagButton">
            <i className="fa fa-flag" style={{color:'red'}} aria-hidden="true"></i>
          </button>
          <button onClick={() => yellowFlag()} className="yellowFlagButton">
            <i className="fa fa-flag" style={{color:'yellow'}} aria-hidden="true"></i>
          </button>
          <button onClick={() => greenFlag()} className="greenFlagButton">
            <i className="fa fa-flag" style={{color:'green'}} aria-hidden="true"></i>
          </button>

          <button onClick={() => createCondition()} className="createConditionButton">
              Create Condition <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
    )
}

export default ConditionGenerator;
