import { createSlice } from "@reduxjs/toolkit";

const completedFormsSlice = createSlice({
    name: "completedForms_Slice",
    initialState: {
        savedLoginForms: [],
        savedCreditCardForms: [],
        savedAndCurrentlyOpened: {},
    },
    reducers: {
        obtainCompletedLoginForm(state, action) {
            state.savedLoginForms.push(action.payload);
        },
        obtainCompletedCreditCardForm(state, action) {
            state.savedCreditCardForms.push(action.payload);
        },
        passCurrentlyOpened(state, action) {
            state.savedAndCurrentlyOpened = action.payload;
        }
    },
})

export const {
    obtainCompletedLoginForm,
    obtainCompletedCreditCardForm,
    passCurrentlyOpened, } = completedFormsSlice.actions;

export default completedFormsSlice.reducer;