import { useEffect, useState } from "react";
import CheckBox from "./components/ModalWindowForPasswordGenerator/Checkboxes/CheckBox";
import InputWithPassword from "./components/ModalWindowForPasswordGenerator/PasswordInput/InputWithPassword";
import PasswordLengthRange from "./components/ModalWindowForPasswordGenerator/RangeOfLength/PasswordLengthRange";
import { genPass} from "./utils";
import styles from './App.module.css';
import SideBar_base from "./components/SideBar/SideBar_Base/SideBar_base";

import { Routes, Route, Link } from 'react-router-dom';
import LinkOfSB from "./components/SideBar/SideBar_Link/LinkOfSB";
import FancyInputField from "./components/AddElement_Form/BricksFor_Forms/FancyInput/FancyInputField";
import FancyDDL from "./components/AddElement_Form/BricksFor_Forms/FancyDDL/FancyDDL";
import LoginInfoForm from "./components/AddElement_Form/LoginInfo_Form/LoginInfoForm";
import CredCardForm from "./components/AddElement_Form/CreditCard_Form/CredCardForm";
// import AddElem_FormBase from "./components/AddElement_Form/AddElem_FormBase";


function App() {
  // const [password, setPassword] = useState('');
  // const [passwdLength, setPasswdLength] = useState(5);
  // const [capLettIncluded, setCapLettIncluded] = useState(false);
  // const [integersIncluded, setIntegersIncluded] = useState(false);
  // const [symbolsIncluded, setSymbolsIncluded] = useState(false);
  // const [uniqueSymbOnly, setUniqueSymbOnly] = useState(false);

  // const wrapperForSetPass = () => {
  //   setPassword(genPass(
  //     passwdLength,
  //     capLettIncluded,
  //     integersIncluded,
  //     symbolsIncluded,
  //     uniqueSymbOnly,
  //   ))
  // }
  // useEffect(wrapperForSetPass, [passwdLength, capLettIncluded, integersIncluded, symbolsIncluded, uniqueSymbOnly])

  return (
    <main className={styles.mainWrapper}>
      <SideBar_base />
      <Routes>
        <Route path='/inp' element={<InputWithPassword />}/>
        <Route path='/creditCard' element={<LoginInfoForm />}/>

        {/* <Route path='/creditCard' element={<AddElem_FormBase />}/> */}
      </Routes>
      {/* <InputWithPassword
        password={password}
        wrapperForSetPass={wrapperForSetPass}
        passwdLength={passwdLength}
      />
      <h3 className={styles.heading}>You may choose from the following options</h3>  
      <CheckBox description={'Include capital letters'} handler={setCapLettIncluded} />
      <CheckBox description={'Include integers'} handler={setIntegersIncluded} />
      <CheckBox description={'Include symbols'} handler={setSymbolsIncluded} /> 
      <CheckBox description={'Unique symbols only'} handler={setUniqueSymbOnly} /> 
      <PasswordLengthRange passwdLength={passwdLength} setPasswdLength={setPasswdLength}/> */}

      
    </main>
  );
}

export default App;
