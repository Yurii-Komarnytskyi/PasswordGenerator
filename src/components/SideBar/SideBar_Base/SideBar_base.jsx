import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import InputWithPassword from '../../ModalWindowForPasswordGenerator/PasswordInput/InputWithPassword';
import LinkOfSB from '../SideBar_Link/LinkOfSB';
import styles from './SideBar_base.module.css';

const SideBar_base = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <h2>All elements</h2>
      <Link to='/loginInfo'>Login</Link> 
      <Link to='/creditCard'>Credit card</Link> 
      {/* NEED TO CREATE SOME DEFAULT BACKGROUND WHERE USER CAM CHECK OUT SOME BASIC INFO AND ETC. */}
    </div>
  )
}

export default SideBar_base;