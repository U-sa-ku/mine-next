'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import styles from '@/app/components/elements/PageLoading/PageLoading.module.scss';
import LogoMineM from '@/public/logo_mine_m.svg';
import LogoMineI from '@/public/logo_mine_i.svg';
import LogoMineN from '@/public/logo_mine_n.svg';
import LogoMineE from '@/public/logo_mine_e.svg';

// コンポーネント
export default function PageLoading() {
  const pathname = usePathname()
  const [isHidden, setIsHidden] = useState(false);
  const hidden = () => setIsHidden(true);
  const visible = () => setIsHidden(false);

  useEffect(() => {
    const links = document.querySelectorAll('a');

    hidden(); // ページ読み込み時

    // ページ遷移開始時
    links.forEach((link) => {
      const href = new URL(link.href);
      
      if(href.pathname != pathname) link.addEventListener("click", visible);
    });

    return () => {
      links.forEach((link) => link.removeEventListener("click", visible));
    }
  }, [pathname])

  return (
    <div className={`${styles.wrapper} ${isHidden ? styles.hidden : ''}`}>
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
