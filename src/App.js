import { useEffect, useState } from "react";
import CheckBox from "./components/CheckBox";
import InputWithPassword from "./components/InputWithPassword";
import { genPass } from "./utils";
function App() {
  const [password, setPassword] = useState('');
  const [triggerCreaction, setTriggerCreaction] = useState(false);
  const [passwdLength, setPasswdLength] = useState(5);
  const [capLetIncluded, setCapLetIncluded] = useState(false);
  const [integersIncluded, setIntegersIncluded] = useState(false);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);

  useEffect(()=> {
    
  },[])

  return (
    <main>
      <InputWithPassword 
        genPass={genPass}
        password={password}
      />
      <CheckBox />
    </main>
  );
}

export default App;
