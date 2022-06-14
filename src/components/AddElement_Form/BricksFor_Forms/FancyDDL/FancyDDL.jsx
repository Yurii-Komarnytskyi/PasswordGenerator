import React from 'react';
import styles from './FancyDDL.module.css';
const FancyDDL = ({textForUpperSpan, arrOfOptions}) => {
  return (
    <div className={styles.wrapper}>
        <span>{textForUpperSpan}</span>
        <select  elect>
          {arrOfOptions.map(opt => (<option>{opt}</option>))}
        </select>
    </div>
  )
}

export default FancyDDL;