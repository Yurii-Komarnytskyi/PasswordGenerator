import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { genPass } from '../utils';

const loginInfoFormSlice = createSlice({
    name: 'loginForm_Slice',
    initialState: {
        title: '',
        userName: '',
        generatedPassword: '',
        passwordWindow: {
            passwdLength: 5,
            capLettIncluded: false,
            integersIncluded: false,
            symbolsIncluded: false,
            uniqueSymbOnly: false,

        }
    },
    reducers: {
        gatherTitle(state, action) {
            state.title = action.payload;
        },
        gatherUserName(state, action) {
            state.userName = action.payload;
        },
        togglePasswdWindCheckBox(state, action) {
            state.passwordWindow[action.payload] = !state.passwordWindow[action.payload];
        },
        setPasswdLength(state, action) {
            console.log('action.payload: ', action.payload);
            state.passwordWindow.passwdLength = action.payload;
        },
        setPasswordManually(state, action) {
            state.generatedPassword = action.payload;
        },
        setPasswordBasedOnOptions(state, action) {
            state.generatedPassword = genPass(state.passwordWindow)
        }
    }
})

export const {
    gatherTitle,
    gatherUserName,
    togglePasswdWindCheckBox,
    setPasswdLength,
    setPasswordManually,
    setPasswordBasedOnOptions, } = loginInfoFormSlice.actions;

export default loginInfoFormSlice.reducer;
