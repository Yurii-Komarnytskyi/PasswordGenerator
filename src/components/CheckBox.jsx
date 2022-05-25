import React, { useEffect } from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({description, handler}) => {
  const wrappedHandeler = () => handler(val => !val);
  return (
    <label className={styles.checkBoxContainer}>
      <span>{(description)? description: 'Just a placeholder'}</span>
      <input type='checkbox' onChange={wrappedHandeler}/>
    </label>
  )
}

export default CheckBox;