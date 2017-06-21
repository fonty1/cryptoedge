import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CoinList from '../CoinList/CoinListContainer';
import Portfolio from '../Portfolio/PortfolioContainer';
import TotalPortfolio from '../TotalPortfolio/TotalPortfolioContainer';
import './CryptoTabs.css';

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
        fontWeight: 400,
      }
    }

    return (
      <div>
        <MuiThemeProvider>
          <Tabs>
            <Tab label="Coin List" >
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
