import React, { useEffect } from 'react';
import { useSelector, } from 'react-redux';
import SubfolderBase from '../HoverableSubfolders/SubfolderBase';
import styles from './FoldersOfSideBar.module.css';

const FoldersOfSideBar = () => {
  const completedForsm_State = useSelector(state => state.completedForms);
  
  return (
    <div>
      <div className={styles.folderWrapper}>
        <h3> Login :</h3>
        <SubfolderBase arrOfcompletedForms={completedForsm_State['savedLoginForms']} />
      </div>
      <div className={styles.folderWrapper}>
        <h3> Cards :</h3>
        <SubfolderBase arrOfcompletedForms={completedForsm_State['savedCreditCardForms']} />
      </div>  
    </div>
    
  )
}

export default FoldersOfSideBar;