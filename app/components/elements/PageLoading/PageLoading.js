'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import styles from '@/app/components/elements/PageLoading/PageLoading.module.scss';
import LogoMineM from '@/public/logo_mine_m.svg';
import LogoMineI from '@/public/logo_mine_i.svg';
import LogoMineN from '@/public/logo_mine_n.svg';
import LogoMineE from '@/public/logo_mine_e.svg';

export default function Loading() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false);
    
  useEffect(() => {
    const links = document.querySelectorAll('a');

    // ページ読み込み時
    setIsMounted(true);

    // ページ遷移開始時
    links.forEach((link) => {
      const href = new URL(link.href);
      
      if(href.pathname != pathname) {
        link.addEventListener("click", () => {
          setIsMounted(false);
        });
      }
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {
          setIsMounted(true);
        });
      });  
    }
  }, [pathname])

  return (
    <div className={`${styles.wrapper} ${isMounted ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        <Image
          src={LogoMineM}
          alt="m"
          className={`${styles.image} ${styles.alphabetM}`}          
       />
       <Image
          src={LogoMineI}
          alt="i"
          className={`${styles.image} ${styles.alphabetI}`}          
       />
       <Image
          src={LogoMineN}
          alt="n"
          className={`${styles.image} ${styles.alphabetN}`}          
       />
       <Image
          src={LogoMineE}
          alt="e"
          className={`${styles.image} ${styles.alphabetE}`}          
       />
      </div>
    </div>
  );
}