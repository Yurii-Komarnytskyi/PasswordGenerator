import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    togglePasswdWindCheckBox, 
    setPasswdLength, 
    setPasswordBasedOnOptions,  } from '../../../Store/loginInfoFormSlice';
import { genPass } from '../../../utils';
import CheckBox from '../Checkboxes/CheckBox';
import InputWithPassword from '../PasswordInput/InputWithPassword';
import PasswordLengthRange from '../RangeOfLength/PasswordLengthRange';
import styles from './PasswdWindowAssembled.module.css';

const PasswdWindowAssembled = ({isVisible, genPssd}) => {
    
    const passwordWidow_State = useSelector(state => state.loginInfoForm.passwordWindow);
    const dispatch = useDispatch();
    console.log(passwordWidow_State);
    
    const wrapperForSetPass = () => {
        dispatch(setPasswordBasedOnOptions());
    }
    // const [password, setPassword] = useState('');
    // const [passwdLength, setPasswdLength] = useState(5);
    // const [capLettIncluded, setCapLettIncluded] = useState(false);
    // const [integersIncluded, setIntegersIncluded] = useState(false);
    // const [symbolsIncluded, setSymbolsIncluded] = useState(false);
    // const [uniqueSymbOnly, setUniqueSymbOnly] = useState(false);

    // const wrapperForSetPass = () => {
    //     setPassword(genPass(
    //         passwordWidow_State.passwdLength,
    //         capLettIncluded,
    //         integersIncluded,
    //         symbolsIncluded,
    //         uniqueSymbOnly, 
    //     ))
    // }
    
    
    useEffect(
        wrapperForSetPass, 
        [passwordWidow_State.passwdLength, 
        passwordWidow_State.capLettIncluded, 
        passwordWidow_State.integersIncluded, 
        passwordWidow_State.symbolsIncluded, 
        passwordWidow_State.uniqueSymbOnly]
    )
        
    return (
        <div>
            <InputWithPassword
                password={genPssd}
                wrapperForSetPass={wrapperForSetPass}
                passwdLength={passwordWidow_State.passwdLength}
            />
            <h3 className={styles.heading}>You may choose from the following options</h3>
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
            <button onClick={() => isVisible(visible => !visible)}>Finish</button>
        </div>

    )
}

export default PasswdWindowAssembled;