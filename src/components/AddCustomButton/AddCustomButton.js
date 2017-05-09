import React from 'react';

const AddCustomButton = ( { actions } ) => {
  const handleClick = () => {
    console.log('I got clicked');
    actions.addCustomCoinToPortfolio();
  }

  return (
    <button className="addCustomButton" className="addCoinToPortfolio" onClick={handleClick}>
      <i className="fa fa-plus-square-o" aria-hidden="true"></i>
    </button>
  )
}

export default AddCustomButton
