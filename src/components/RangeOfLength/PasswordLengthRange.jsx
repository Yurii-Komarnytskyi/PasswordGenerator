import React from 'react';
import styles from './PasswordLengthRange.module.css';
const PasswordLengthRange = ({passwdLength, setPasswdLength}) => {
  return (
    <div className={styles.rangeCont}>
        <input 
          className={styles.rangeBar}
          type='range' 
          min={5} 
          max={20}
          defaultValue={5}
          onChange={(e) => setPasswdLength(e.target.value)}
        />
        <span className={styles.valOfRange}>{passwdLength}</span>
    </div>
  )
}

export default PasswordLengthRange;