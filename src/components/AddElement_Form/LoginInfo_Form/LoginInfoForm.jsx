import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LoginInfoForm.module.css';
import FancyInputField from '../BricksFor_Forms/FancyInput/FancyInputField';
import { gatherValueByStateKey, setPasswordManually } from '../../../Store/loginInfoFormSlice';
import PasswdWindowAssembled from '../../ModalWindowForPasswordGenerator/AssembledModalWindow/PasswdWindowAssembled';

const LoginInfoForm = () => {
  
  const currentForm_State = useSelector(state => state.loginInfoForm);
  const dispatch = useDispatch();

  const [isPasswdModalW_Toggled, setIsPasswdModalW_Toggled] = useState(false);
  // console.log(currentForm_State)
  return (
    <div
      className={styles.formWrapper}
    >
      <FancyInputField
        textForUpperSpan='Title'
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'title', inputValue: e}))}
        usersInput={currentForm_State['title']}
      />
      <FancyInputField
        textForUpperSpan='User name'
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'userName', inputValue: e}))}
        usersInput={currentForm_State['userName']}
      />
      {(isPasswdModalW_Toggled)? 
        <PasswdWindowAssembled 
          isVisible={setIsPasswdModalW_Toggled}
          genPssd={currentForm_State['generatedPassword']}
        /> :
        <div className={styles.passwdInputSection}>
          <FancyInputField
            textForUpperSpan='Password'
            inputHandler={(e) => dispatch(setPasswordManually(e))}
            usersInput={currentForm_State['generatedPassword']}
          />
          <button onClick={() => setIsPasswdModalW_Toggled(toggled => !toggled)}>open modal</button>
        </div>
      }
    </div>
  )
}

export default LoginInfoForm;