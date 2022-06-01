import React, { useRef, useEffect } from 'react';
import styles from './InputWithPassword.module.css';

const InputWithPassword = ({ password, wrapperForSetPass, passwdLength }) => {
  const inpWithPass = useRef(null);
  const passBar = useRef(null);

  const copyText = () => navigator.clipboard.writeText(inpWithPass.current.value);

  const randerTheBar = (passwdLength) => {
    if (passwdLength <= 8) {
      passBar.current.className = styles.basicBar + ` ${styles.weakPass}`;
    } else if (passwdLength > 8 && passwdLength <= 13) {
      passBar.current.className = styles.basicBar + ` ${styles.mediumPass}`;
    } else if(passwdLength >= 14) {
      passBar.current.className = styles.basicBar + ` ${styles.strongPass}`;
    }
  }

  useEffect(() => {
    randerTheBar(passwdLength);
  }, [passwdLength])

  return (
    <React.Fragment>
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
      <div
        className={styles.basicBar}
        ref={passBar}
      />  
    </React.Fragment>
  )
}

export default InputWithPassword;