import React from 'react';

const AddCustomButton = ( { actions } ) => {
  const handleClick = () => {
    actions.addCustomCoinToPortfolio();
  }

  return (
    <button className="addCustomButton" className="addCoinToPortfolio" onClick={handleClick}>
      <i className="fa fa-plus-square-o" aria-hidden="true"></i> Add Custom Row
    </button>
  )
}

export default AddCustomButton
