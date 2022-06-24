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
        },
        deleteSingleSavedForm(state, action) {
            state[action.payload.kindOfForm] = state[action.payload.kindOfForm].filter(deleted => deleted['title'] !== action.payload.complForm['title'])
        },
    },
})

export const {
    obtainCompletedLoginForm,
    obtainCompletedCreditCardForm,
    passCurrentlyOpened,
    deleteSingleSavedForm, } = completedFormsSlice.actions;

export default completedFormsSlice.reducer;