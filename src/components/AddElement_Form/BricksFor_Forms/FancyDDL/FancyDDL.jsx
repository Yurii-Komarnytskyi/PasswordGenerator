import React from 'react';
import styles from './FancyDDL.module.css';
const FancyDDL = ({ textForUpperSpan, arrOfOptions, inputHandler, usersInput }) => {
  return (
    <div className={styles.wrapper}>
      <span>{textForUpperSpan}</span>
      <select 
        onChange={(e) => inputHandler(e.target.value)}
        value={usersInput}
      >
        {arrOfOptions.map(optn => (<option key={optn}> {optn} </option>))}
      </select>
    </div>
  )
}

export default FancyDDL;