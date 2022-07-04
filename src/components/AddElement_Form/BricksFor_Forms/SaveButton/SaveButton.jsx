import React from 'react'
import styles from './SaveButton.module.css';

const SaveButton = ({ handleSavedForm, resetStateToInitial, forbidToProceed }) => {
  return (
    <button
      onClick={() => {
        if (forbidToProceed()) return null;  
        else {
          handleSavedForm();
          resetStateToInitial();
        }
      }}
      className={styles.bttn}
    >
      Save
    </button>
  )
}

export default SaveButton;