'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from '@/app/components/elements/ReloadButton/ReloadButton.module.scss';
import Icon from '@/public/icon_reload.svg';

// コンポーネント
export default function ReloadButton() {
  const [isPwa, setIsPwa] = useState(false);

  // リロード
  const windowReload = () => location.reload();

  // PWA判定
  const checkPwaMode = () => {
    if(window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsPwa(true);
    } else {
      setIsPwa(false);
    }
  }

  useEffect(() => {
    checkPwaMode();
    window.addEventListener('resize', checkPwaMode);
    return () => window.removeEventListener('resize', checkPwaMode);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${isPwa ? styles.active : ''}`}
      onClick={windowReload}
    >
      <Image
        src={Icon}
        alt="更新ボタン"
        className={styles.icon}
      />
    </div>
  );
}
