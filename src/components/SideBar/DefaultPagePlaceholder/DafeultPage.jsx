import React from 'react';
import { screen_HEIGHT } from '../../../utils';

import styles from './DafeultPage.module.css';

const DafeultPage = () => {

    return (
        <div
            className={styles.defaultPageWrapper}
            style={{ height: `${(screen_HEIGHT() / 1.8)}px` }}
        >
            <h3>Keep all your passwords and personal info</h3>
            <h3>Create and store unique, complex passwords in one click</h3>
            <h3>Have your passwords organized</h3>
            <h3>Keep sensitive or important information safe and easily accessible</h3>
        </div>
    )
}

export default DafeultPage;