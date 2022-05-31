import React, { useRef } from 'react';
import IndicatorOfDifficulty from '../IndicationBar/IndicatorOfDifficulty';
import styles from './InputWithPassword.module.css';

const InputWithPassword = ({password, wrapperForSetPass}) => {
  const inpWithPass = useRef(null);
  const copyText = () => navigator.clipboard.writeText(inpWithPass.current.value);
  return (
    <div className={styles.inpWithPass}>
        <input 
          readOnly
          placeholder='Password appears here' 
          value={password} 
          ref={inpWithPass}
        ></input> 
        <button className={styles.bttnBeauty} onClick={wrapperForSetPass}>Create</button>
        <button className={styles.bttnBeauty} onClick={copyText}>Copy</button>
    </div>
  )
}

export default InputWithPassword;