import React from 'react';
import styles from '@styles/forms.module.css';
import { Flex, Box } from '@chakra-ui/react';
import { DropDown, DropDownOptionType } from '@components/DropDown';
import { IconBadge } from '@components/IconBadge';
import SearchIcon from '@static/icons/search.svg';

type InputFieldType = {
  data: Array<DropDownOptionType>,
  props?: any,
}

export const InputField = ({ data, ...props }: any) => {
  if(!data?.length) return <Box className={styles.inputField}><input {...props}/></Box>
  return (
    <Flex justifyContent="center" alignItems="center" className={styles.inputField} p={5}>
      <Box w={150}>
        <DropDown options={data} />
      </Box>
      <input {...props}/>
      <IconBadge imgSrc={SearchIcon} alt="search" props={{ width: 30, height: 30 }} />
    </Flex>
  )
}