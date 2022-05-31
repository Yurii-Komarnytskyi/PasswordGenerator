import React, { useEffect } from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({description, handler}) => {
  const wrappedHandeler = () => handler(val => !val);
  const cancelChBxActivation = (e) => {
    if(e.target.tagName === 'LABEL') return e.preventDefault();
  }
  return (
    <label className={styles.checkBoxContainer} onClick={e => cancelChBxActivation(e)}>
      <input 
        type='checkbox' 
        className={styles.chBox} 
        onChange={wrappedHandeler} 
      />
      <span >
        {description} 
      </span>
    </label>
  )
}

export default CheckBox;