import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './TipJarModal.css';

class TipJarModal extends Component {

    closeModal() {
      this.props.uiActions.hideModals();
    }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Dialog
            title="Tip Jar"
            modal={false}
            open={this.props.tipJarModalVisibility}
            onRequestClose={() =>this.closeModal()}
          >
              <ul >
                  <li>Bitcoin: 1Py3HUyycKMUKdMQXmVdvRGYqWoHrsEYZQ</li>
                  <li>Ethereum: 0xD6c2bF543491337D81eC9b7d96CFbC04fCB3F4a0</li>
                  <li>Litecoin: Lfq3Cmeqept4CijikNQKkukqCkY7GLZqRt</li>
                  <li>Ripple: ravTvc7xk5UTgKVPhJjZABKgzW8Ur7VL6</li>
                  <li>Stratis: Se5WBnc5GTKZbxvkoykEsjwdG6ASAeMSSw</li>
              </ul>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TipJarModal;
