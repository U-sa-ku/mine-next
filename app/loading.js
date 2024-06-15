import Image from 'next/image';
import styles from '@/app/loading.module.scss';
import LogoMineM from '@/public/logo_mine_m.svg';
import LogoMineI from '@/public/logo_mine_i.svg';
import LogoMineN from '@/public/logo_mine_n.svg';
import LogoMineE from '@/public/logo_mine_e.svg';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
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