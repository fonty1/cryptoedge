import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ConditionGenerator from '../ConditionGenerator/ConditionGeneratorContainer';
import './IfThenModal.css';

const IfThenModal = ({ uiActions, actions, flagModalVisibility, conditions }) => {

    const closeModal = () => {
      uiActions.hideFlagModal();
    }

    return (
        <div className="static-modal">
          <Modal show={flagModalVisibility} onHide={() =>closeModal()}>
            <Modal.Header closeButton>
              <Modal.Title className="bold">If-Then Conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="ifThenBody">
                  <ConditionGenerator/>
                  <h4>ACTIVE CONDITIONS</h4>
                  <ul className="listOfConditions">
                      {conditions.map(function(condition, index) {
                        return (
                            <li className="condition" key={index}>
                              {condition.conditionString}
                              <button onClick={(e) => actions.removeCondition(index)} className="createConditionButton">
                                  <i className="fa fa-minus" aria-hidden="true"></i>
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
