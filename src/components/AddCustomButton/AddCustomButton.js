import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';

const AddCustomButton = ( { actions } ) => {
  const handleClick = () => {
    actions.addCustomCoinToPortfolio();
  }

  return (
    <div className="addCustomButton">
      <FlatButton
        onClick={handleClick}
        label="Add custom coin"
        labelPosition="after"
        primary={true}
        icon={<ContentAdd />}
      />
    </div>
  )
}

export default AddCustomButton
//className="addCustomButton"
