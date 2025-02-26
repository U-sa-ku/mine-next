"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "@/app/components/layouts/SiteHeader/SiteHeader.module.scss";
import MineLogo from '@/app/components/elements/MineLogo/MineLogo';
import MineText from '@/app/components/elements/MineText/MineText';

// コンポーネント
export default function SiteHeader({ isScrollAnimation, isNoAnimation }) {
  const [isAnimation, setIsAnimation] = useState(false);

  const switchVisible = () => {
    const triggerPosition =  window.innerHeight * 0.5;
    const scrollTop = window.scrollY;

    scrollTop >= triggerPosition ? setIsAnimation(true) : setIsAnimation(false);    
  }

  useEffect(() => {
    if(isScrollAnimation) {
      window.addEventListener('scroll', switchVisible);
      return () => window.removeEventListener('scroll', switchVisible);
    } else {
      setIsAnimation(true);
    }
  }, [isScrollAnimation]); 

  return (
    <header className={`${styles.wrapper} ${isAnimation ? styles.animation : ''} ${isNoAnimation ? styles.noAnimation : ''}`}>
      <Link
        href="/"
        className={styles.logoWrapper}
      >
        <figure className={styles.logo}>
          <MineLogo
            isAnimation={isAnimation}
            isNoAnimation={isNoAnimation}
          />
        </figure>
        <figure className={styles.text}>
          <MineText
            isAnimation={isAnimation}
            isNoAnimation={isNoAnimation}
          />
        </figure>
      </Link>
    </header>
  );
}
