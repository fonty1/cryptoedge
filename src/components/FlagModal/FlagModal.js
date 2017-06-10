import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ConditionGenerator from '../ConditionGenerator/ConditionGeneratorContainer';
import './FlagModal.css';

const FlagModal = ({ uiActions, flagModalVisibility, conditionals }) => {

    const closeModal = () => {
      uiActions.hideFlagModal();
    }

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
                  <ul className="listOfConditionals">
                      {conditionals.map(function(condition, index) {
                        return (
                            <li className="Conditional">{condition}</li>
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

export default FlagModal;
