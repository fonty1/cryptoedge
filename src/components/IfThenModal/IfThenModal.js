import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ConditionGenerator from '../ConditionGenerator/ConditionGeneratorContainer';
import ActiveConditions from '../ActiveConditions/ActiveConditionsContainer';
import './IfThenModal.css';

class IfThenModal extends Component {

    closeModal() {
      this.props.uiActions.hideFlagModal();
    }

    render() {
        if (this.props.conditions.length === 0) {
            var noCondition = 'There are no If-Then conditions that have been created yet.';
        } else {
            var noCondition = '';
        }

        return (
            <div className="static-modal">
              <Modal show={this.props.flagModalVisibility} onHide={() =>this.closeModal()}>
                <Modal.Header closeButton>
                  <Modal.Title className="ifThenTitle">If-Then Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="ifThenBody">
                      <ConditionGenerator/>
                      <h4 className="activeConditionsTitle">ACTIVE CONDITIONS</h4>
                      <ul className="listOfConditions">
                        <li className="noCondition">{ noCondition }</li>
                        { this.props.conditions.map(function(condition, index) {
                              return (
                                  <ActiveConditions condition={condition} index={index} key={index}/>
                              )
                            }
                        )}
                      </ul>
                    </div>
                </Modal.Body>
              </Modal>
            </div>
        )
    }
}

export default IfThenModal;
