import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CoinNumberInput extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
