import React, { useEffect, useRef, useState } from 'react';
import styles from './IndicatorOfDifficulty.module.css';
const IndicatorOfDifficulty = ({passwdLength}) => {

    const passBar = useRef(null);
    const [descrOfDiffic, setDescrOfDiffic] = useState('');
    const randerTheBar = (passwdLength) => {
        if(passwdLength <= 8 ) {
            setDescrOfDiffic('Easy')
            passBar.current.className = styles.basicBar + ` ${styles.weakPass}`;
        } 
        if(passwdLength > 8 && passwdLength <= 13) {
            setDescrOfDiffic('Medium');
            passBar.current.className = styles.basicBar + ` ${styles.mediumPass}`;
        } 
        if(passwdLength >= 14) {
            setDescrOfDiffic('Strong');
            passBar.current.className = styles.basicBar + ` ${styles.strongPass}`;
        } 
    }
    useEffect(()=> {
        randerTheBar(passwdLength);
    }, [passwdLength])

    return (
        <div 
            className={styles.basicBar}
            ref={passBar}
        > {descrOfDiffic} </div>
    )
}

export default IndicatorOfDifficulty;