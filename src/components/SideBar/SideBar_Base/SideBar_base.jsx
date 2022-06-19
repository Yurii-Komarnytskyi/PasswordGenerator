import React from 'react';
import { Link, } from 'react-router-dom';
import FoldersOfSideBar from '../SideBar_Folder/FoldersOfSideBar';
import styles from './SideBar_base.module.css';
import { screen_HEIGHT, } from '../../../utils';
const SideBar_base = () => {
  
  
  return (
    <div 
      className={styles.sideBarWrapper}
      style={{height: `${screen_HEIGHT()}px`}}
    >
      <h2> Types </h2>
      <Link to='/loginInfo' className={styles.plainLink}>Login</Link> 
      <Link to='/creditCard' className={styles.plainLink}>Credit card</Link> 
      {/* NEED TO CREATE SOME DEFAULT BACKGROUND WHERE USER CAM CHECK OUT SOME BASIC INFO AND ETC. */}
      {/* ALSO NEED TO INTERCEPT UNWANTED CLICS ON ALL OF THE LINK ITEMS  */}

      <h2> Folders </h2>
      <FoldersOfSideBar />
    </div>
  )
}

export default SideBar_base;