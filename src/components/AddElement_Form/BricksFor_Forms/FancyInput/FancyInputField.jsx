import React from 'react';
import styles from './FancyInputField.module.css';

const FancyInputField = ({ 
  textForUpperSpan, 
  inputHandler, 
  usersInput, 
  plHolder,
  gotToHideInpText = false, }) => {

  return (
    <div className={styles.wrapper}>
      <span>{textForUpperSpan}</span>
      <input
        type={(gotToHideInpText)? 'password' : 'text'}
        onChange={(e) => inputHandler(e.target.value)}
        value={usersInput}
        placeholder={(plHolder)? plHolder : ''}
      />
    </div>
  )
}

export default FancyInputField;