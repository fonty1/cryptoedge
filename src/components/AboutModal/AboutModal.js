import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './AboutModal.css';

class AboutModal extends Component {

    closeModal() {
      this.props.uiActions.hideModals();
    }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Dialog
            title="About CryptoEdge"
            modal={false}
            open={this.props.aboutModalVisibility}
            onRequestClose={() =>this.closeModal()}
            contentClassName='aboutModal'
            autoScrollBodyContent={true}
          >
              <p >
                CryptoEdge is an app that helps Cryptocurrency holders watch their Portfolio with live market prices from CoinMarketCap.
                Your Portfolio is saved on the local storage of your device. If you change browsers or are in an Incognito window your changes may
                not persist on refresh.
              </p>
              <p>
                CryptoEdge is in Beta and there will be bugs - please do your own research and do not consider anything on this site to be
                trading advice.
              </p>
              <p >
                If you'd like new features added, please <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeU1ICsh-USOAy2pjJqn9CWRxMf5NdhlIfztBpkExbv4YJbQw/viewform?usp=sf_link">contact me</a> about it. If you'd like to support CryptoEdge with a
                Crypto Tip I would be grateful! Include your email or feature request in the transaction description if you want to get my
                attention :)
              </p>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AboutModal;
