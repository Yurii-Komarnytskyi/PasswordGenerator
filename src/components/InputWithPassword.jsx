import React from 'react';
import styles from './InputWithPassword.module.css'

const InputWithPassword = ({genPass, password}) => {
  return (
    <div className={styles.inpWithPass}>
        <input placeholder='Password appears here'></input> 
        <button onClick={()=> true}>Create</button>
        <button onClick={()=> true}>Copy</button>
    </div>
  )
}

export default InputWithPassword;