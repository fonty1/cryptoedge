import React, {Component} from 'react';
import {Input} from 'react-bootstrap';
import './Coin.css';

// Coin gets the props of 'crypto' which is a specific coin and all its details
// This component is about displaying what's in 'crypto'.

class LeaderboardCoin extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        return (
            <tr className="cryptorank">
                <td>
                    <button className="addCoinToPortfolio"><i className="fa fa-plus-square-o" aria-hidden="true"></i></button>
                </td>
                <td>{this.props.crypto.rank}</td>
                <td className="cryptoid">
                    <img alt={this.props.crypto.symbol} src={this.props.crypto.logo}/>{this.props.crypto.name}
                     &nbsp;<span className="cryptoSymbol">({this.props.crypto.symbol})</span>
                </td>
                <td className="bold">${this.props.crypto.formatted_price_usd}</td>
                <td style={this.props.crypto.oneHourStyles}>{this.props.crypto.percent_change_1h}%</td>
                <td style={this.props.crypto.twentyFourHourStyles}>{this.props.crypto.percent_change_24h}%</td>
                <td style={this.props.crypto.sevenDayStyles}>{this.props.crypto.percent_change_7d}%</td>
            </tr>
        )
    }
}

export default LeaderboardCoin;
