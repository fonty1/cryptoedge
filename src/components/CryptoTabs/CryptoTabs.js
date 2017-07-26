import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CoinList from '../CoinList/CoinListContainer';
import Portfolio from '../Portfolio/PortfolioContainer';
import TotalPortfolio from '../TotalPortfolio/TotalPortfolioContainer';
import './CryptoTabs.css';

import {
  grey300, grey500, grey800,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#31353e',
    primary2Color: '#31353e',
    primary3Color: '#31353e',
    accent1Color: '#337ab7',
    accent2Color: '#337ab7',
    accent3Color: '#337ab7',
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: '#31353e',
    shadowColor: fullBlack,
  }
});

class CryptoTabs extends Component {

  // function handleActive(tab) {
  //   alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  // }

  render() {
    var styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
      }
    }

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Tabs>
            <Tab
              label="Coin List"
              contentContainerClassName="cryptoTabContainer"
              className="cryptoTab"
              >
              <CoinList/>
            </Tab>
            <Tab
              label="Portfolio"
              // data-route="/home"
              // onActive={handleActive}
              >
              <div>
                <Portfolio/>
                <TotalPortfolio/>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CryptoTabs;
