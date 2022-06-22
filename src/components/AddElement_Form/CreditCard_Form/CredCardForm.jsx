import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FancyDDL from '../BricksFor_Forms/FancyDDL/FancyDDL';
import FancyInputField from '../BricksFor_Forms/FancyInput/FancyInputField';
import { gatherValueByStateKey, handleCardNumberInput, handleCardSecurityCodeInput, handleExpirationYearInput, resetStateToInitial} from '../../../Store/credCardFormSlice';
import styles from './CredCardForm.module.css';
import SaveButton from '../BricksFor_Forms/SaveButton/SaveButton';
import { obtainCompletedCreditCardForm } from '../../../Store/completedFormsSlice';


const CredCardForm = () => {
  const currentYear = new Date().getFullYear();
  const arrOfCards = ['Visa', 'Mastercard', 'Maestro','American Express', 'Discover', 'UnionPay'];
  const arrOfMonths = ['01 January', '02 February', '03 March', '04 April', '05 May', '06 June', '07 July', '08 August', '09 September', '10 October', '11 November', '12 December'];

  
  const dispatch = useDispatch();
  const currentForm_State = useSelector(state => state.credCardForm);

  return (
    <div
      className={styles.formWrapper}
    >
      <FancyInputField
        textForUpperSpan='Title'
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'title', inputValue: e}))}
        usersInput={currentForm_State['title']}
      />
      <FancyInputField
        textForUpperSpan='Cardholder Name'
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'userName', inputValue: e}))}
        usersInput={currentForm_State['userName']}
      />
      <FancyInputField
        textForUpperSpan='Number'
        gotToHideInpText={true}
        inputHandler={(e) => dispatch(handleCardNumberInput(e))}
        usersInput={currentForm_State['cardNumber']}
      /> {/* 4 by 4 by 4 by 4*/}
      <FancyDDL
        textForUpperSpan='Brand'
        arrOfOptions={arrOfCards}
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'cardBrand', inputValue: e}))}
        usersInput={currentForm_State['cardBrand']}
      />
      <FancyDDL
        textForUpperSpan='Expiration Month'
        arrOfOptions={arrOfMonths}
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'expirationMonth', inputValue: e}))}
        usersInput={currentForm_State['expirationMonth']}
      />
      <FancyInputField
        textForUpperSpan='Expiration Year'
        inputHandler={(e) => dispatch(handleExpirationYearInput(e))}
        gotToHideInpText={true}
        usersInput={currentForm_State['expirationYear']}
        plHolder={`e.g ${currentYear}`}
      />
      <FancyInputField
        textForUpperSpan='Security code'
        inputHandler={(e) => dispatch(handleCardSecurityCodeInput(e))}
        gotToHideInpText={true}
        usersInput={currentForm_State['cardSecurityCode']}

      /> 
      <SaveButton 
       handleSavedForm={() => dispatch(obtainCompletedCreditCardForm(currentForm_State))}
       resetStateToInitial={()=> dispatch(resetStateToInitial())} 
       />
    </div>
  )
}


export default CredCardForm;