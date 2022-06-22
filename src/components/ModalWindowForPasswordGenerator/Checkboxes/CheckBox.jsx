import React, { useEffect } from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({description, handleChange}) => {
  
  const cancelChBxActivation = (e) => {
    if(e.target.tagName === 'LABEL') return e.preventDefault();
  }
  return (
    <label className={styles.checkBoxContainer} onClick={e => cancelChBxActivation(e)}>
      <input 
        type='checkbox' 
        className={styles.chBox} 
        onChange={handleChange} 
      />
      <span >
        {description} 
      </span>
    </label>
  )
}

export default CheckBox;