import React from 'react';
import * as actions from '../../actions/coinListPortfolioActions';
import './Warning.css';

const Warning = ( { apiErrored } ) => {
  return (
    <div className={"warning " + (apiErrored ? '' : 'hide')}>The API is currently down. Please try again later.</div>
  )
}

export default Warning;
