import { Routes, Route, } from 'react-router-dom';
import { useSelector } from "react-redux";

import styles from './App.module.css';
import SideBar_base from "./components/SideBar/SideBar_Base/SideBar_base";
import LoginInfoForm from "./components/AddElement_Form/LoginInfo_Form/LoginInfoForm";
import CredCardForm from "./components/AddElement_Form/CreditCard_Form/CredCardForm";
import SampleOfCompletedForm from "./components/AddElement_Form/FilledOutForms/SampleOfCompletedForm";
import DafeultPage from "./components/SideBar/DefaultPagePlaceholder/DafeultPage";

function App() {
  const savedFormToBeDisplayed = useSelector(state => state.completedForms.savedAndCurrentlyOpened)
 
  return (
    <main className={styles.mainWrapper}>
      <SideBar_base />
      <Routes> 
        <Route path='/' element={ <DafeultPage />}/>
        <Route path='/creditCard' element={<CredCardForm  />}/>
        <Route path='/loginInfo'  element={<LoginInfoForm />}/>
        <Route path='/filledOutForm' element={<SampleOfCompletedForm filledOutForm={savedFormToBeDisplayed}/>} />
      </Routes>
    </main>
  );
}

export default App;
