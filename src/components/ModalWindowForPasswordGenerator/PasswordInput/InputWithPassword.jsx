import React, { useRef, useEffect } from 'react';
import styles from './InputWithPassword.module.css';

const InputWithPassword = ({ password, wrapperForSetPass, passwdLength }) => {
  const inpWithPass = useRef(null);
  const copyText = () => navigator.clipboard.writeText(inpWithPass.current.value);

  const renderTheBar = (passwdLength) => {
    if (passwdLength <= 8) return ` ${styles.weakPass}`;
    else if (passwdLength > 8 && passwdLength <= 13) return ` ${styles.mediumPass}`;
    else return ` ${styles.strongPass}`;
  }
  useEffect(() => {
    renderTheBar(passwdLength);
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
        <button className={styles.bttnBeauty} onClick={wrapperForSetPass}>Refresh</button>
        <button className={styles.bttnBeauty} onClick={copyText}>Copy</button>
      </div>
      <div
        className={styles.basicBar + renderTheBar(passwdLength)}
      />  
    </React.Fragment>
  )
}

export default InputWithPassword;