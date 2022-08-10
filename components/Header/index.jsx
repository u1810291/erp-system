import React from 'react';
import { Navbar } from './Navbar';
import { IconBadge } from '@components/IconBadge';
import { 
  Divider,
  Box,
  Flex
} from '@chakra-ui/react';
import Image from 'next/image';
import imageUrl from '@static/logo/logo-v1.svg';
import { InputField } from '@components/Input';
import UserIcon from '@static/icons/user.svg'
import PackIcon from '@static/icons/pack.svg'

const data = [
  {
    id: 'asddsada',
    value: 'option1',
    label: 'option one'
  },
  {
    id: 'asddsada2',
    value: 'option2',
    label: 'option two'
  },
  {
    id: 'asddsada3',
    value: 'option3',
    label: 'option three'
  },
]

export const Header = ({ component }) => (
  <>
    {component}
    <Navbar />
    <Divider orientation='horizontal' />
    <Flex p={10} justifyContent='space-between' alignItems='center'>
      <Box as="a" href="/" w='200px'>
        <Image src={imageUrl} alt='logo' />
      </Box>
      <Box width='500px'>
        <InputField select={data} placeHolder='Some text' />
      </Box>
      <Flex justifyContent='space-between' gap={20}>
        <IconBadge imgSrc={UserIcon} alt='User'/>
        <IconBadge imgSrc={PackIcon} alt='Pack' text='5'/>
      </Flex>
    </Flex>
  </>
)