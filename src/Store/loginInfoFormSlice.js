import { createSlice } from '@reduxjs/toolkit';
import { genPass } from '../utils';

const initialState = {
    title: '',
    userName: '',
    generatedPassword: '',
    passwordWindow: {
        passwdLength: 5,
        capLettIncluded: false,
        integersIncluded: false,
        symbolsIncluded: false,
        uniqueSymbOnly: false,
    },
    areEssentialKeysMissing() {
        if(!this.title.trim() || !this.userName.trim()) return true;
        else return false;
    } 
}
const loginInfoFormSlice = createSlice({
    name: 'loginForm_Slice',
    initialState,
    reducers: {
        gatherTitle(state, action) {
            state.title = action.payload;
        },
        gatherUserName(state, action) {
            state.userName = action.payload;
        },
        gatherValueByStateKey(state, action){
            state[action.payload.dynamicKey] = action.payload.inputValue;
            
        },
        togglePasswdWindCheckBox(state, action) {
            state.passwordWindow[action.payload] = !state.passwordWindow[action.payload];
        },
        setPasswdLength(state, action) {
            state.passwordWindow.passwdLength = action.payload;
        },
        setPasswordManually(state, action) {
            state.generatedPassword = action.payload;
        },
        setPasswordBasedOnOptions(state, _) {
            state.generatedPassword = genPass(state.passwordWindow)
        },
        resetStateToInitial(state, action) {
            return initialState;
        }
    }
})

export const {
    gatherTitle,
    gatherUserName,
    togglePasswdWindCheckBox,
    setPasswdLength,
    setPasswordManually,
    setPasswordBasedOnOptions,
    gatherValueByStateKey, 
    resetStateToInitial, } = loginInfoFormSlice.actions;

export default loginInfoFormSlice.reducer;
