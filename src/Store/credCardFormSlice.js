import { createSlice } from "@reduxjs/toolkit";
import { beautifyCardNumber } from "../utils";

const credCardFormSlice = createSlice({
  name: 'creditCardForm_Slice',
  initialState : {
    title: '',
    cardholderName: '',
    cardNumber: '',
    cardBrand: '',
    expirationMonth: '',
    expirationYear: '',
    cardSecurityCode: '',
  },
  reducers: {
    gatherValueByStateKey(state, action) {
      state[action.payload.dynamicKey] = action.payload.inputValue;
    },
    handleCardNumberInput(state, action){
      if(isNaN(+action.payload)) return ;
      state.cardNumber = action.payload;

      // if(state.cardNumber.length > 16) return ; NEED TO MAKE IT BEHAVE PRIDICTABLE
      // state.cardNumber = beautifyCardNumber(state.cardNumber, action.payload);  NEED TO MAKE IT BEHAVE PRIDICTABLE
    },
    handleCardSecurityCodeInput(state, action){
      if(isNaN(+action.payload)) return ;
      if(state.cardSecurityCode.length > 2) return ; // NEED TO MAKE IT BEHAVE PRIDICTABLE
      state.cardSecurityCode = action.payload;
    },
    handleExpirationYearInput(state, action) {
      if(isNaN(+action.payload)) return ;
      if(state.expirationYear.length > 3) return ; // NEED TO MAKE IT BEHAVE PRIDICTABLE
      state.expirationYear = action.payload;

    },
  }

})

export const { 
  gatherValueByStateKey, 
  handleCardNumberInput,
  handleCardSecurityCodeInput,
  handleExpirationYearInput, } = credCardFormSlice.actions;
export default credCardFormSlice.reducer;