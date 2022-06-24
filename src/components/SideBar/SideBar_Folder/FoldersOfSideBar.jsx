import React from 'react';
import { useSelector, } from 'react-redux';

import styles from './FoldersOfSideBar.module.css';
import SubfolderBase from '../HoverableSubfolders/SubfolderBase';

const FoldersOfSideBar = () => {
  const completedForsm_State = useSelector(state => state.completedForms);
  
  return (
    <div>
      <div className={styles.folderWrapper}>
        <h3> Login :</h3>
        <SubfolderBase 
          arrOfcompletedForms={completedForsm_State['savedLoginForms']} 
          kindOfForm='savedLoginForms'
        />
      </div>
      <div className={styles.folderWrapper}>
        <h3> Cards :</h3>
        <SubfolderBase 
          arrOfcompletedForms={completedForsm_State['savedCreditCardForms']} 
          kindOfForm='savedCreditCardForms'
        />
      </div>  
    </div>
    
  )
}

export default FoldersOfSideBar;