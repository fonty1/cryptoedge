import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ConditionGenerator from '../ConditionGenerator/ConditionGeneratorContainer';
import './IfThenModal.css';

const IfThenModal = ({ uiActions, flagModalVisibility, conditions }) => {

    const closeModal = () => {
      uiActions.hideFlagModal();
    }

    //Rem Condition
    //        this.props.actions.evaluateConditions();

    return (
        <div className="static-modal">
          <Modal show={flagModalVisibility} onHide={() =>closeModal()}>
            <Modal.Header closeButton>
              <Modal.Title>If - Then Conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                  <h4>Create If - Then expressions conditions that will generate coloured flags <i className="fa fa-flag" style={{color:'green'}} aria-hidden="true"></i> alongside Cryptocurrencies.</h4>
                  <ConditionGenerator/>
                  <h4>Active Conditions</h4>
                  <ul className="listOfConditions">
                      {conditions.map(function(condition, index) {
                        return (
                            <li className="Conditional">
                              {condition.conditionString}
                              <button onClick={(e) => this.props.conditionsActions.removeCondition()} className="createConditionButton hide">
                                  Remove Condition <i className="fa fa-plus" aria-hidden="true"></i>
                              </button>
                            </li>
                        )
                        })
                      }
                  </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() =>closeModal()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

export default IfThenModal;
