import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './LoginInfoForm.module.css';
import FancyInputField from '../BricksFor_Forms/FancyInput/FancyInputField';
import PasswdWindowAssembled from '../../ModalWindowForPasswordGenerator/AssembledModalWindow/PasswdWindowAssembled';
import SaveButton from '../BricksFor_Forms/SaveButton/SaveButton';
import { gatherValueByStateKey, setPasswordManually, resetStateToInitial } from '../../../Store/loginInfoFormSlice';
import { obtainCompletedLoginForm } from '../../../Store/completedFormsSlice';

const LoginInfoForm = () => {

  const currentForm_State = useSelector(state => state.loginInfoForm);
  const dispatch = useDispatch();
  const [isPasswdModalW_Toggled, setIsPasswdModalW_Toggled] = useState(false);

  return (
    <div className={styles.formWrapper}>
      <FancyInputField
        textForUpperSpan='Title'
        inputHandler={(e) => dispatch(gatherValueByStateKey({ dynamicKey: 'title', inputValue: e }))}
        usersInput={currentForm_State['title']}
      />
      <FancyInputField
        textForUpperSpan='User name'
        inputHandler={(e) => dispatch(gatherValueByStateKey({ dynamicKey: 'userName', inputValue: e }))}
        usersInput={currentForm_State['userName']}
      />
      {(isPasswdModalW_Toggled) ?
        <PasswdWindowAssembled
          isVisible={setIsPasswdModalW_Toggled}
          genPssd={currentForm_State['generatedPassword']}
        /> :
        <div className={styles.passwdInputSection}>
          <FancyInputField
            textForUpperSpan='Password'
            inputHandler={(e) => dispatch(setPasswordManually(e))}
            gotToHideInpText={true}
            usersInput={currentForm_State['generatedPassword']}
            plHolder='Press Auto-Gen button to generate password'
          />

        </div>
      }
      <div className={styles.buttonAligner}>
        <SaveButton
          forbidToProceed={()=> currentForm_State['areEssentialKeysMissing']()}
          handleSavedForm={() => dispatch(obtainCompletedLoginForm(currentForm_State))}
          resetStateToInitial={() => dispatch(resetStateToInitial())}
        />
        <button
          onClick={() => setIsPasswdModalW_Toggled(toggled => !toggled)}
          className={styles.openModalBttn}
        > Auto-Gen </button>
      </div>
    </div>
  )
}

export default LoginInfoForm;