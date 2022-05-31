import { useEffect, useState } from "react";
import CheckBox from "./components/CheckBox";
import InputWithPassword from "./components/InputWithPassword";
import PasswordLengthRange from "./components/PasswordLengthRange";
import { genPass} from "./utils";
import styles from './App.module.css';
function App() {
  const [password, setPassword] = useState('');
  const [passwdLength, setPasswdLength] = useState(5);
  const [capLettIncluded, setCapLettIncluded] = useState(false);
  const [integersIncluded, setIntegersIncluded] = useState(false);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);
  const [uniqueSymbOnly, setUniqueSymbOnly] = useState(false);

  const wrapperForSetPass = () => {
    setPassword(genPass(
      passwdLength,
      capLettIncluded,
      integersIncluded,
      symbolsIncluded,
      uniqueSymbOnly,
    ))
  }
  useEffect(wrapperForSetPass, [passwdLength, capLettIncluded, integersIncluded, symbolsIncluded, uniqueSymbOnly])

  return (
    <main className={styles.mainWrapper}>
      <InputWithPassword
        password={password}
        wrapperForSetPass={wrapperForSetPass}
      />
      <PasswordLengthRange passwdLength={passwdLength} setPasswdLength={setPasswdLength}/>

      <CheckBox description={'Include capital letters'} handler={setCapLettIncluded} />
      <CheckBox description={'Include integers'} handler={setIntegersIncluded} />
      <CheckBox description={'Include symbols'} handler={setSymbolsIncluded} /> 
      <CheckBox description={'Unique symbols only'} handler={setUniqueSymbOnly} /> 
    
      
    </main>
  );
}

export default App;
