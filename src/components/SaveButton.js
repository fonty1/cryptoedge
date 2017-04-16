import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SaveButton.css';

class SaveButton extends Component {
  render() {
    return <Button bsStyle="primary" bsSize="large" className="savebutton" >Save</Button>
  }
}

export default SaveButton;
