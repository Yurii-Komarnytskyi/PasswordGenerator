import { useEffect, useState } from "react";
import CheckBox from "./components/CheckBox";
import InputWithPassword from "./components/InputWithPassword";
import { genPass, piecesForPassword} from "./utils";
function App() {
  const [password, setPassword] = useState('');
  const [passwdLength, setPasswdLength] = useState(5);
  const [capLettIncluded, setCapLettIncluded] = useState(false);
  const [integersIncluded, setIntegersIncluded] = useState(false);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);

  const wrapperForSetPass = () => {
    setPassword(genPass(
      passwdLength,
      capLettIncluded,
      integersIncluded,
      symbolsIncluded,
    ))
  }

  useEffect(()=> {
    // jC4_ fW2$
  },[])
  return (
    <main>
      <InputWithPassword 
        password={password}
        wrapperForSetPass={wrapperForSetPass}
      />
      <CheckBox description={'Include capital letters'} handler={setCapLettIncluded} />
      <CheckBox description={'Include integers'} handler={setIntegersIncluded} />
      <CheckBox description={'Include symbols'} handler={setSymbolsIncluded} />  
    </main>
  );
}

export default App;
