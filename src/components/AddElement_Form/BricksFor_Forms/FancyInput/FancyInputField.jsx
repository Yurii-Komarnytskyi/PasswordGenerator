import React from 'react';
import styles from './FancyInputField.module.css';
const FancyInputField = ({ textForUpperSpan, inputHandler, val }) => {

  return (
    <div className={styles.wrapper}>
      <span>{textForUpperSpan}</span>
      <input
        type="text"
        onChange={(e) => inputHandler(e.target.value)}
        value={val}
      />
    </div>
  )
}

export default FancyInputField;