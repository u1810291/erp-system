import React from 'react';
import styles from '@styles/forms.module.css';

export const InputField = (props: any) => {
  return <input {...props} className={styles.inputField}/>
}