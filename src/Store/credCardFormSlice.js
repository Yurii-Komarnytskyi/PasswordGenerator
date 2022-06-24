import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  userName: '',
  cardNumber: '',
  cardBrand: '',
  expirationMonth: '',
  expirationYear: '',
  cardSecurityCode: '',
  areEssentialKeysMissing() {
    if (!this.title.trim() || !this.userName.trim()) return true;
    else return false;
  }
}
const credCardFormSlice = createSlice({
  name: 'creditCardForm_Slice',
  initialState,
  reducers: {
    gatherValueByStateKey(state, action) {
      state[action.payload.dynamicKey] = action.payload.inputValue;
    },
    handleCardNumberInput(state, action) {
      if (isNaN(+action.payload)) return;
      state.cardNumber = String(action.payload).trim().slice(0, 16);
    },
    handleCardSecurityCodeInput(state, action) {
      if (isNaN(+action.payload)) return;
      state.cardSecurityCode = String(action.payload).trim().slice(0, 3);
    },
    handleExpirationYearInput(state, action) {
      if (isNaN(+action.payload)) return;
      state.expirationYear = String(action.payload).trim().slice(0, 4);
    },
    resetStateToInitial(_, a_) {
      return initialState;
    }
  },
})

export const {
  gatherValueByStateKey,
  handleCardNumberInput,
  handleCardSecurityCodeInput,
  handleExpirationYearInput,
  resetStateToInitial, } = credCardFormSlice.actions;
export default credCardFormSlice.reducer;