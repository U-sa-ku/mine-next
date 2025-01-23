"use client";
import { useEffect, useState } from 'react';
import { Barlow } from "next/font/google";
import styles from "@/feature/top/Mainvisual/Mainvisual.module.scss";
import MineLogo from '@/app/components/elements/MineLogo/MineLogo';
import MineText from '@/app/components/elements/MineText/MineText';
import SiteNavigationItems from '@/app/components/blocks/SiteNavigationItems/SiteNavigationItems';

// Googleフォント
const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

// コンポーネント
export default function topMainvisual() {
  // オープニングアニメーション
  const [isAnimation, setIsAnimation] = useState(false);
  const animation = () => setTimeout(() => setIsAnimation(true), 500);

  // ナビゲーション追従切替
  const [isWrapperMargin, setIsWrapperMargin] = useState(false);
  const [isNavigationFixed, setIsNavigationFixed] = useState(true);

  const switchFixedNavigation = () => {
    const windowHeight = window.innerHeight;
    const triggerPosition = windowHeight * 2;
    const scrollTop = window.scrollY;

    if(scrollTop >= triggerPosition) {
      setIsWrapperMargin(true);
      setIsNavigationFixed(false);
    } else {
      setIsWrapperMargin(false);
      setIsNavigationFixed(true);
    }
  }

  useEffect(() => {
    switchFixedNavigation();
    window.addEventListener('scroll', switchFixedNavigation);
    return () => window.removeEventListener('scroll', switchFixedNavigation);
  }, []);  

  return (
    <>
      <div className={`${styles.wrapper} ${isWrapperMargin ? styles.switchMargin : ''}`}>
        <div className={styles.inner}>
          <h1 className={styles.logo}>
            <MineLogo isAnimation={isAnimation} />
            <MineText isAnimation={isAnimation} />
          </h1>
          <p className={`${barlow.className} ${styles.lead} ${isAnimation ? styles.animation : ''}`}>sidekick &amp; photo archive</p>
        </div>
        <i className={`${styles.scrollIcon} ${isAnimation ? styles.animation : ''}`}>
          <i className={styles.scrollIconBorder}></i>
        </i>
        <figure className={`${styles.frame} ${styles.top} ${isAnimation ? styles.animation : ''}`}></figure>
        <figure className={`${styles.frame} ${styles.right} ${isAnimation ? styles.animation : ''}`}></figure>
        <figure className={`${styles.frame} ${styles.bottom} ${isAnimation ? styles.animation : ''}`}></figure>
        <figure className={`${styles.frame} ${styles.left} ${isAnimation ? styles.animation : ''}`}></figure>
      </div>
      <SiteNavigationItems
        isNavigationActive={true}
        isTop={true}
        isFixed={isNavigationFixed}        
        mainvisualAnimation={animation}
      />      
    </>
  );
}
