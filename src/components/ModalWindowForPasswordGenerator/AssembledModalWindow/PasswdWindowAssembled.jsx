import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PasswdWindowAssembled.module.css';

import { 
    togglePasswdWindCheckBox, 
    setPasswdLength, 
    setPasswordBasedOnOptions,  } from '../../../Store/loginInfoFormSlice';
import CheckBox from '../Checkboxes/CheckBox';
import InputWithPassword from '../PasswordInput/InputWithPassword';
import PasswordLengthRange from '../RangeOfLength/PasswordLengthRange';

const PasswdWindowAssembled = ({isVisible, genPssd}) => {
    
    const passwordWidow_State = useSelector(state => state.loginInfoForm.passwordWindow);
    const dispatch = useDispatch();
    
    const wrapperForSetPass = () => {
        dispatch(setPasswordBasedOnOptions());
    }
    
    useEffect(
        wrapperForSetPass, 
        [passwordWidow_State.passwdLength, 
        passwordWidow_State.capLettIncluded, 
        passwordWidow_State.integersIncluded, 
        passwordWidow_State.symbolsIncluded, 
        passwordWidow_State.uniqueSymbOnly]
    )
        
    return (
        <div className={styles.wrapperOfWindow}>
            <InputWithPassword
                password={genPssd}
                wrapperForSetPass={wrapperForSetPass}
                passwdLength={passwordWidow_State.passwdLength}
            />
            <h2 className={styles.heading}> You may choose from the following options: </h2>
            <CheckBox 
                description={'Include capital letters'} 
                handleChange={()=> dispatch(togglePasswdWindCheckBox('capLettIncluded'))} 
            />
            <CheckBox 
                description={'Include integers'} 
                handleChange={()=> dispatch(togglePasswdWindCheckBox('integersIncluded'))}
            />
            <CheckBox 
                description={'Include symbols'} 
                handleChange={()=> dispatch(togglePasswdWindCheckBox('symbolsIncluded'))}
            />
            <CheckBox 
                description={'Unique symbols only'} 
                handleChange={()=> dispatch(togglePasswdWindCheckBox('uniqueSymbOnly'))}
            />         
            <PasswordLengthRange 
                passwdLength={passwordWidow_State.passwdLength} 
                setPasswdLength={(e)=> dispatch(setPasswdLength(e))} 
            />
            <button 
              onClick={() => isVisible(visible => !visible)}
              className={styles.finishBttn}
            > Complete </button>
        </div>

    )
}

export default PasswdWindowAssembled;