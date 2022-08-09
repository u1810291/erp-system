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


export const Header = ({ component }) => (
  <>
    {component}
    <Navbar />
    <Divider orientation='horizontal' />
    <Flex p={10} justifyContent='space-between' alignItems='center'>
      <Box w='200px'>
        <Image src={imageUrl} alt='logo' />
      </Box>
      <Box width='500px'>
        <InputField />
      </Box>
      <Flex justifyContent='space-between'>
        <Image src={UserIcon} alt='User'/>
        <IconBadge imgSrc={PackIcon} alt='Pack'/>
      </Flex>
    </Flex>
  </>
)