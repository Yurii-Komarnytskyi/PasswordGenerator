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
      <Link to='/'></Link> 
      <Link to='/loginInfo' className={styles.plainLink}>Login</Link> 
      <Link to='/creditCard' className={styles.plainLink}>Credit card</Link> 
      
      <h2> Folders </h2>
      <FoldersOfSideBar />
    </div>
  )
}

export default SideBar_base;