import React from 'react';
import { Box, Center, HStack, Flex } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex p={15} justifyContent="space-between">
      <HStack>
        <Center h='30px' color={'var(--main-text-color)'}>
          <Box as="span" fontSize="sm">
            Contact with us
          </Box>
        </Center>
        <Center h='30px' color='black'>
          <Box as='a' href="tel:998909454475" fontSize='sm'>
            +998(90) 945-44-75
          </Box>
        </Center>
        <Center h='30px' color='black'>
          <Box as='a' href='mailto:otabekbutcher@gmail.com' fontSize='sm'>
            otabekbutcher@gmail.com
          </Box>
        </Center>
      </HStack>
      <HStack>
        <Center h='30px' color={'var(--main-text-color)'}>
          <Box as="a" href="#blog" fontSize="sm">
            Blog
          </Box>
        </Center>
        <Center h='30px' color={'var(--main-text-color)'}>
          <Box as="a" href="#about-us" fontSize="sm">
            About Us
          </Box>
        </Center>
        <Center h='30px' color={'var(--main-text-color)'}>
          <Box as="a" href="#careers" fontSize="sm">
            Careers
          </Box>
        </Center>
      </HStack>
    </Flex>
  )
}