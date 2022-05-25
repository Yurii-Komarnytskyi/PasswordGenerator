import React from 'react';
import styles from './PasswordLengthRange.module.css';
const PasswordLengthRange = ({setPasswdLength}) => {
  return (
    <React.Fragment>
        <input 
            className={styles.rangeBar}
            type='range' 
            min={5} 
            max={20}
            onChange={(e) => setPasswdLength(e.target.value)}
        />
    </React.Fragment>
  )
}

export default PasswordLengthRange;