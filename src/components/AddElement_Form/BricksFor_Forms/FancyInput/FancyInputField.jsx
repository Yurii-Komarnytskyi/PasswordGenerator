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
        <img 
        onClick={()=> setAye(aye => !aye)}
        className={styles.ayeIMG}
      ></img>
      ) : null} 
    </div> 
  )
}

export default FancyInputField;