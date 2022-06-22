import React from 'react'
import styles from './SaveButton.module.css';

const SaveButton = ({handleSavedForm, resetStateToInitial}) => {
  return (
    <button 
      onClick={() => {
        handleSavedForm();
        resetStateToInitial();
      }}
      className={styles.bttn}
    >
      Save
    </button>
  )
}

export default SaveButton;