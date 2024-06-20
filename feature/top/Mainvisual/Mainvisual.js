"use client";
import { useEffect, useState } from 'react';
import styles from "@/feature/top/Mainvisual/Mainvisual.module.scss";
import MineLogo from '@/app/components/elements/MineLogo/MineLogo';
import MineText from '@/app/components/elements/MineText/MineText';
import SiteNavigationItems from '@/app/components/blocks/SiteNavigationItems/SiteNavigationItems';

const topMainvisual = () => {
  // オープニングアニメーション
  const [isAnimation, setIsAnimation] = useState(false);
  const animation = () => setIsAnimation(true);

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
  };

  useEffect(() => {
    window.addEventListener('scroll', switchFixedNavigation);
    return () => window.removeEventListener('scroll', switchFixedNavigation);
  }, []);  

  return (
    <>
      <div className={`${styles.wrapper} ${isWrapperMargin ? styles.switchMargin : ''}`}>
        <h1 className={styles.logo}>
          <MineLogo isAnimation={isAnimation} />
          <MineText isAnimation={isAnimation} />
        </h1>
        <i className={`${styles.scrollIcon} ${isAnimation ? styles.animation : ''}`}>
          <i className={styles.scrollIconBorder}></i>
        </i>
        <figure className={`${styles.frame} ${styles.top} ${isAnimation ? styles.animation : ''}`}></figure>
        <figure className={`${styles.frame} ${styles.right} ${isAnimation ? styles.animation : ''}`}></figure>
        <figure className={`${styles.frame} ${styles.bottom} ${isAnimation ? styles.animation : ''}`}></figure>
        <figure className={`${styles.frame} ${styles.left} ${isAnimation ? styles.animation : ''}`}></figure>
      </div>
      <SiteNavigationItems
        isActive={true}
        isTop={true}
        isFixed={isNavigationFixed}        
        mainvisualAnimation={animation}
      />      
    </>
  );
}

export default topMainvisual;
