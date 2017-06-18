import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ConditionGenerator from '../ConditionGenerator/ConditionGeneratorContainer';
import ActiveConditions from '../ActiveConditions/ActiveConditionsContainer';
import './IfThenModal.css';

class IfThenModal extends Component {

  closeModal() {
    this.props.uiActions.hideModals();
  }

  render() {
    if (this.props.conditions.length === 0) {
        var noCondition = 'There are no If-Then conditions that have been created yet.';
    } else {
        var noCondition = '';
    }

    return (
      <div>
        <MuiThemeProvider>
          <Dialog
            title="If - Then Conditions"
            modal={false}
            open={this.props.flagModalVisibility}
            onRequestClose={() =>this.closeModal()}
          >
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
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default IfThenModal;
