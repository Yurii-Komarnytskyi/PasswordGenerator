import React from 'react';

const CheckBox = ({description, hendler}) => {
  return (
    <label>
        <span>{(description)? description: 'Just a placeholder'}</span>
        <input type='checkbox' />
    </label>
  )
}

export default CheckBox;