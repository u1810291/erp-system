import React from 'react';
import Image from 'next/image';
import { Badge } from '@chakra-ui/react';
import styles from '@styles/forms.module.css'

export const IconBadge = ({ imgSrc, alt, text }: { imgSrc: string; alt: string; text: string }) => {
  return (
    <div className={styles.icon}>
      <Image src={imgSrc} alt={alt}/>
      <Badge px='2' className={styles.iconBadge}>
        {text}
      </Badge>
    </div>
  )
}