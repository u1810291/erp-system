import React from 'react';
import Image from 'next/image';
import { Badge } from '@chakra-ui/react';
import styles from '@styles/forms.module.css'

export const IconBadge = ({ imgSrc, alt, text }: { imgSrc: string; alt: string; text: string }) => {
  return (
    <div className={styles.iconBadge}>
      <Image src={imgSrc} alt={alt}/>
      <Badge borderRadius='full' px='2' colorScheme='teal'>
        {text}
      </Badge>
    </div>
  )
}