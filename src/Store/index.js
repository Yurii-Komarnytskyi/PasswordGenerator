import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginInfoFormSlice from './loginInfoFormSlice';
import credCardFormSlice from './credCardFormSlice';
import completedFormsSlice from './completedFormsSlice';

export default configureStore({
  reducer: {
    loginInfoForm: loginInfoFormSlice,
    credCardForm: credCardFormSlice,
    completedForms: completedFormsSlice,
  },

  // key below been added coz I was getting an erron in consol which was saying : serializableStateInvariantMiddleware.ts:222 A non-serializable value was detected in the state, in the path:
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})