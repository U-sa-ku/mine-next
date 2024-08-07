"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Barlow } from 'next/font/google';
import styles from '@/feature/sidekick/Mainvisual/Mainvisual.module.scss';

// Googleフォント
const barlow = Barlow({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
});

// コンポーネント
export default function sidekickMainvisual({ sidekickData, contentsAnimation, isUnfixed, isPc }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // オープニングアニメーション
  const animation = () => {
    setIsAnimation(true);
    if(contentsAnimation) contentsAnimation();
  }

  // デバイスによって画像切り替え
  const switchImage = () => {
    const windowWidth = window.innerWidth;
    
    if(windowWidth >= 768 || isPc) setIsMobile(false);
  }

  useEffect(() => {
    switchImage();
    setIsMounted(true);
  }, []);

  return (
    <div className={`${styles.wrapper} ${isUnfixed ? styles.unfixed : ''}`}>
      <div className={`${styles.initImageWrapper} ${isAnimation ? styles.animation : ''}`}>
        {
          isMobile ?
          <Image
            priority
            fill
            src={sidekickData.init_mainvisual_sp.url}
            alt={``}
            sizes="(max-width: 767px) 100vw, (max-width: 1440px) 100vw, 100vw"
            className={`${styles.initImage} ${isMounted ? styles.visible : '' }`}
          />
          :
          <Image
            priority
            fill
            src={sidekickData.init_mainvisual.url}
            alt={``}
            sizes="(max-width: 767px) 100vw, (max-width: 1440px) 100vw, 100vw"
            className={`${styles.initImage} ${isMounted ? styles.visible : '' }`}
          />                    
        }
      </div>
      {
        isMobile ?
        <Image
          priority
          fill
          src={sidekickData.mainvisual_sp.url}
          alt={``}
          sizes="(max-width: 767px) 100vw, (max-width: 1440px) 100vw, 100vw"
          className={styles.image}
          onLoad={animation}
        />
        :
        <Image
          priority
          fill
          src={sidekickData.mainvisual.url}
          alt={``}
          sizes="(max-width: 767px) 100vw, (max-width: 1440px) 100vw, 100vw"
          className={styles.image}
          onLoad={animation}
        />                    
      }      
      <p className={`${barlow.className} ${styles.catchphrase} ${styles.row1} ${isAnimation ? styles.animation : ''}`}>{ sidekickData.catchphrase.catchphrase1 }</p>
      <p className={`${barlow.className} ${styles.catchphrase} ${styles.row2} ${isAnimation ? styles.animation : ''}`}>{ sidekickData.catchphrase.catchphrase2 }</p>
      <h1 className={`${barlow.className} ${styles.title} ${isAnimation ? styles.animation : ''}`}>
        <span className={styles.titleInner}>{ sidekickData.maker } { sidekickData.name }</span>
      </h1>
      <p className={`${barlow.className} ${styles.since} ${isAnimation ? styles.animation : ''}`}>since { sidekickData.since_year }.{ sidekickData.since_month }</p>
    </div>
  );
}
