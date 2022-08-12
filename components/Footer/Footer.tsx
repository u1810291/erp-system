import React from 'react';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import Vercel from '@static/logo/vercel.svg'

export const Footer = () => (
  <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styles.logo}>
        <Image src={Vercel} alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
)