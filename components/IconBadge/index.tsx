import React from 'react';
import Image from 'next/image';
import { Badge } from '@chakra-ui/react';
import styles from '@styles/forms.module.css'

type IconBadgeType = { 
  imgSrc: string; 
  alt: string; 
  text?: string; 
  props?: any 
}

export const IconBadge = ({ imgSrc, alt, text, ...props }: IconBadgeType) => {
  return (
    <div className={styles.icon}>
      <Image src={imgSrc} alt={alt} {...props} />
      <Badge px='2' className={styles.iconBadge} {...props}>
        {text}
      </Badge>
    </div>
  )
}