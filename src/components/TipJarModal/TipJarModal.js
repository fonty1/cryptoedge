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
            contentClassName='tipjarModal'
            autoScrollBodyContent={true}
          >   <p>
                Include your email or feature request in the transaction description if you want to get prioritised features/access in the future.
              </p>
              <ul >
                  <li>Bitcoin: 1Py3HUyycKMUKdMQXmVdvRGYqWoHrsEYZQ</li>
                  <li>Ethereum: 0xD6c2bF543491337D81eC9b7d96CFbC04fCB3F4a0</li>
                  <li>Litecoin: Lfq3Cmeqept4CijikNQKkukqCkY7GLZqRt</li>
                  <li>Ripple: ravTvc7xk5UTgKVPhJjZABKgzW8Ur7VL6</li>
                  <li>Stratis: Se5WBnc5GTKZbxvkoykEsjwdG6ASAeMSSw</li>
              </ul>
              <p>
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeU1ICsh-USOAy2pjJqn9CWRxMf5NdhlIfztBpkExbv4YJbQw/viewform?usp=sf_link">Contact me</a> if you'd like your coin to be added to this list.
              </p>
              <p>
                  <b>Thank you!</b>
              </p>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TipJarModal;
