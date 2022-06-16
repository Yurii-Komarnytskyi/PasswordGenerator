import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FancyDDL from '../BricksFor_Forms/FancyDDL/FancyDDL';
import FancyInputField from '../BricksFor_Forms/FancyInput/FancyInputField';
import { gatherValueByStateKey, handleCardNumberInput, handleCardSecurityCodeInput, handleExpirationYearInput, } from '../../../Store/credCardFormSlice';
import styles from './CredCardForm.module.css';


const CredCardForm = () => {
  const currentYear = new Date().getFullYear();
  const mokArrOfCards = ['Visa', 'Mastercard', 'American Express', 'Ощад банк'];
  const mokArrOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dispatch = useDispatch();
  const currentForm_State = useSelector(state => state.credCardForm);
  console.log(currentForm_State);

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
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'cardholderName', inputValue: e}))}
        usersInput={currentForm_State['cardholderName']}
      />
      <FancyInputField
        textForUpperSpan='Number'
        // gotToHideInpText={true}
        inputHandler={(e) => dispatch(handleCardNumberInput(e))}
        usersInput={currentForm_State['cardNumber']}
      /> {/* 4 by 4 by 4 by 4*/}
      <FancyDDL
        textForUpperSpan='Brand'
        arrOfOptions={mokArrOfCards}
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'cardBrand', inputValue: e}))}
        usersInput={currentForm_State['cardBrand']}
      />
      <FancyDDL
        textForUpperSpan='Expiration Month'
        arrOfOptions={mokArrOfMonths}
        inputHandler={(e) => dispatch(gatherValueByStateKey({dynamicKey: 'expirationMonth', inputValue: e}))}
        usersInput={currentForm_State['expirationMonth']}
      />
      <FancyInputField
        textForUpperSpan='Expiration Year'
        inputHandler={(e) => dispatch(handleExpirationYearInput(e))}
        usersInput={currentForm_State['expirationYear']}
        plHolder={`e.g ${currentYear}`}
      />
      <FancyInputField
        textForUpperSpan='Security code'
        gotToHideInpText={true}
        inputHandler={(e) => dispatch(handleCardSecurityCodeInput(e))}
        usersInput={currentForm_State['cardSecurityCode']}

      />  {/* MUST MAKE LIMIT OF CHAR THAT COULD BE INPUTED */}
    </div>
  )
}


export default CredCardForm;