import React from 'react';

import styles from './SampleOfCompletedForm.module.css';
import { twentyCharsLongKey } from '../../../utils';

const SampleOfCompletedForm = ({ filledOutForm }) => {

  const makeStateItarable = (state) => {
    return Object.keys(state).filter(prop => 
      typeof state[prop] !== 'object' && typeof state[prop] !== 'function' && !!state[prop]);
  }

  return (
    <div
      className={styles.wrapper}
    >
      {makeStateItarable(filledOutForm).map(key =>
        <div 
          className={styles.fieldContainer}
          key={twentyCharsLongKey()}  
        >
          <span className={styles.fieldSpan}> {filledOutForm[key]} </span>
          <button 
            className={styles.fieldBttn}
            onClick={()=> navigator.clipboard.writeText(filledOutForm[key])}
          > Copy </button>
        </div>
      )}
    </div>
  )
}

export default SampleOfCompletedForm;