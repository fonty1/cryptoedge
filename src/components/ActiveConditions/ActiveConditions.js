import React from 'react';
import './ActiveConditions.css';

const ActiveConditions = ({ actions, condition, conditions, index }) => {
    return (
        <li className="condition" key={index}>
          {index+1}. {condition.conditionString}
          <button onClick={(e) => actions.removeCondition(index)} className="deleteConditionButton">
              <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </li>
    )
}

export default ActiveConditions;
