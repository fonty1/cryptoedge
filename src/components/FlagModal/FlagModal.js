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
              <Modal.Title>Flag Conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                  <h4>Create conditions that will generate Flags alongside Cryptocurrencies when the condition becomes true.</h4>
                  <p>For example, if the Bitcoin price is less than $2000 USD, generate a <i className="fa fa-flag" style={{color:'green'}} aria-hidden="true"></i></p>

                <ConditionGenerator/>
                  <h4>Active Conditions</h4>
                  <ul>
                  {conditionals.map(function(condition, index) {
                    return (
                        <li>{condition}</li>
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
