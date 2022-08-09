import React from 'react';
import styles from '@styles/forms.module.css';
import { Divider, Flex } from '@chakra-ui/react';
import { DropDown } from '@components/DropDown';

export const InputField = ({ select, ...props }: any) => {
  if(!select?.length) return <input {...props} className={styles.inputField}/>
  return (
    <Flex justifyContent="center" alignItems="center" position='relative'>
      <DropDown options={select} />
      <input {...props} className={styles.inputField} />
    </Flex>
  )
}