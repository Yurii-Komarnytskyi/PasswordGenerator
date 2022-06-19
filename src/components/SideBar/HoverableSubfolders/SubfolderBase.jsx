import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { passCurrentlyOpened, } from '../../../Store/completedFormsSlice';
import styles from './SubfolderBase.module.css';


const SubfolderBase = ({ arrOfcompletedForms, }) => {
  
  const dispatch = useDispatch();

  return (
    <div className={styles.formsWrapper}>
      {
      arrOfcompletedForms.map( complForm =>
        <div 
          className={styles.formItemNickName} 
          onClick={() => dispatch(passCurrentlyOpened(complForm))}
        >
          <Link to='/filledOutForm' className={styles.navLink}> {complForm.title} </Link>
          <span> {complForm.userName} </span>
        </div>)
      }
    </div> 
  )
}

export default SubfolderBase;