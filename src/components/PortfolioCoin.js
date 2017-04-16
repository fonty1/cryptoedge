import React, {Component} from 'react';
import {Input} from 'react-bootstrap';
import './Coin.css';
import { addCommas } from '../helpers';

// Coin gets the props of 'crypto' which is a specific coin and all its details
// This component is about displaying what's in 'crypto'.

class PortfolioCoin extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.updateCoinNumber = this.updateCoinNumber.bind(this);
    }

    updateCoinNumber(evt) {
        this.setState({coinNumber: evt.target.value});
        this.calculateUSDHoldings(evt.target.value);
        this.calculatePercentageHoldings(evt.target.value);
    }

    calculateUSDHoldings(updatedCoinNumber) {
        var coinUSD = '$' + addCommas((updatedCoinNumber * this.props.crypto.price_usd).toFixed(2));

        this.setState({coinUSD: coinUSD});
    }

    calculatePercentageHoldings(updatedCoinNumber) {
        var coinPercentage = 0;
        // I will need to calculate the total somewhere...
        // percentageHolding should live on the parent cryptoObject.
        //
        //this.setState({coinPercentage: this.props.crypto.percentageHolding});
    }

    handleFocus(event) {
      event.target.select();
    }

    render() {
        return (
            <tr className="cryptorank">
                <td>
                    <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                </td>
                <td>
                    {this.props.crypto.rank}
                </td>
                <td className="cryptoid">
                    <img alt={this.props.crypto.symbol} src={this.props.crypto.logo}/>{this.props.crypto.name}
                     &nbsp;<span className="cryptoSymbol">({this.props.crypto.symbol})</span></td>
                <td>
                    <input
                        className="yourCoinNumber"
                        value={this.state.coinNumber}
                        onChange={this.updateCoinNumber.bind(this)}
                        onFocus={this.handleFocus}
                    />
                </td>
                <td>
                    {this.state.coinUSD}
                </td>
                <td>

                </td>
                <td className="bold">
                    ${this.props.crypto.formatted_price_usd}
                </td>
                <td>
                    {this.props.crypto.price_btc}
                </td>
                <td style={this.props.crypto.oneHourStyles}>
                    {this.props.crypto.percent_change_1h}%</td>
                <td style={this.props.crypto.twentyFourHourStyles}>
                    {this.props.crypto.percent_change_24h}%</td>
                <td style={this.props.crypto.sevenDayStyles}>
                    {this.props.crypto.percent_change_7d}%</td>
            </tr>
        )
    }
}

export default PortfolioCoin;
