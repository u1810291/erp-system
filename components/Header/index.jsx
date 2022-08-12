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
import { BreadCrumb } from '@components/BreadCrumb';
import { Categories } from '@components/Categories';

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
const breadCrumbData = [
  {
    id: 'asddsada',
    value: 'Home',
    link: '/home',
    isCurrentPage: false
  },
  {
    id: 'asddsada2',
    value: 'About',
    link: '/about',
    isCurrentPage: false
  },
  {
    id: 'asddsada3',
    value: 'Contact',
    link: '/contact',
    isCurrentPage: true
  },
]
const categoriesData = [
  {
    id: 'idstring1',
    label: 'Some name'
  },
  {
    id: 'idstring2',
    label: 'Some name'
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
        <InputField data={data} placeholder='Some text' />
      </Box>
      <Flex justifyContent='space-between' gap={20}>
        <IconBadge imgSrc={UserIcon} alt='User'/>
        <IconBadge imgSrc={PackIcon} alt='Pack' text='5'/>
      </Flex>
    </Flex>
    <BreadCrumb data={breadCrumbData}/>
    <Categories data={categoriesData}/>
  </>
)