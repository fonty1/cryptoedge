import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './RefreshButton.css';

class RefreshButton extends Component {
  render() {
    return <Button bsStyle="info" bsSize="large" className="refreshbutton" >Refresh Prices</Button>
  }
}

export default RefreshButton;
