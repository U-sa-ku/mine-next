'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from '@/app/components/elements/ReloadButton/ReloadButton.module.scss';
import Icon from '@/public/icon_reload.svg';

export default function Loading() {
  const [isPwa, setIsPwa] = useState(false);

  const windowReload = () => {
    location.reload();
  }

  useEffect(() => {
    if(window.matchMedia('(display-mode: standalone)').matches){
      setIsPwa(true);
    } else {
      setIsPwa(false);
    }
  }, [])

  return (
    <>
      {isPwa ?
         <div
          className={styles.wrapper}
          onClick={windowReload}
        >
          <Image
            src={Icon}
            alt="更新ボタン"
            className={styles.icon}
          />
        </div>
        :
        null
      }
    </>
  );
}