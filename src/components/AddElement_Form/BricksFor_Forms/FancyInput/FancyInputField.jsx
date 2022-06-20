import React from 'react';
import { useState } from 'react';
import styles from './FancyInputField.module.css';

const FancyInputField = ({ 
  textForUpperSpan, 
  inputHandler, 
  usersInput, 
  plHolder,
  gotToHideInpText = false, }) => {

  const [aye, setAye] = useState(gotToHideInpText);

  return (
    <div className={styles.wrapper}>
      <span className={styles.headerSpan}>{textForUpperSpan}</span>
      <input
        className={styles.usersInput}
        type={(aye)? 'password' : 'text'}
        onChange={(e) => inputHandler(e.target.value)}
        value={usersInput}
        placeholder={(plHolder)? plHolder : ''}
      />
      {(gotToHideInpText)? (
        <button 
        onClick={()=> setAye(aye => !aye)}
        className={styles.ayeButton}
      ></button>
      ) : null} 
    </div> 
  )
}

export default FancyInputField;