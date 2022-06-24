import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './SubfolderBase.module.css';
import { deleteSingleSavedForm, passCurrentlyOpened, } from '../../../Store/completedFormsSlice';
import { twentyCharsLongKey } from '../../../utils';


const SubfolderBase = ({ arrOfcompletedForms, kindOfForm, }) => {
  
  const dispatch = useDispatch();

  return (
    <div className={styles.formsWrapper}>
      {
      arrOfcompletedForms.map( complForm =>
        <div 
          className={styles.formItemNickName} 
          onClick={() => dispatch(passCurrentlyOpened(complForm))}
          key={twentyCharsLongKey()}
        >
          <Link to='/filledOutForm' className={styles.navLink}> {complForm.title} </Link>
          <span className={styles.formItemSpan}> {complForm.userName} </span>
          <button 
            className={styles.formItemBttn}
            onClick={()=> dispatch(deleteSingleSavedForm({complForm: complForm, kindOfForm: kindOfForm}))}
          >Del.</button>
        </div>)
      }
    </div> 
  )
}

export default SubfolderBase;