import React from 'react';

const AddCustomButton = ( { } ) => {
  const handleClick = () => {
    console.log('I got clicked');
  }

  return (
    <button className="addCustomButton" className="addCoinToPortfolio" onClick={handleClick}>
      <i className="fa fa-plus-square-o" aria-hidden="true"></i> Add Custom Crypto
    </button>
  )
}

export default AddCustomButton

//This should just 
