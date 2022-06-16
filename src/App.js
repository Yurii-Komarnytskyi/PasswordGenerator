import { useEffect, useState } from "react";
import styles from './App.module.css';
import SideBar_base from "./components/SideBar/SideBar_Base/SideBar_base";
import { Routes, Route, Link } from 'react-router-dom';
import LoginInfoForm from "./components/AddElement_Form/LoginInfo_Form/LoginInfoForm";
import CredCardForm from "./components/AddElement_Form/CreditCard_Form/CredCardForm";



function App() {
 
  return (
    <main className={styles.mainWrapper}>
      <SideBar_base />
      <Routes>
        <Route path='/creditCard' element={<CredCardForm />}/>
        <Route path='/loginInfo' element={<LoginInfoForm />}/>
      </Routes>
     
      
    </main>
  );
}

export default App;
