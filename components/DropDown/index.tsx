import React from 'react';
import styles from '@styles/forms.module.css';

export type DropDownOptionType = { 
  id: string; 
  value: string; 
  label: string
}
export const DropDown = ({ options }: { options: Array<DropDownOptionType>}) => {
  return (
    <select placeholder='Select option' className={styles.dropdown} >
      {options.map((option: DropDownOptionType) => (
        <option key={option.id} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}