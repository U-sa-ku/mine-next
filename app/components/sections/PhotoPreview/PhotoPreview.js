"use client";
import Link from "next/link";
import { Barlow } from 'next/font/google';
import styles from "@/app/components/sections/PhotoPreview/PhotoPreview.module.scss";
import LazyAnimationImage from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage";

// Googleフォント
const barlow = Barlow({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
});

const PhotoPreview = ({ currentPhotoData, previousPhotoData, nextPhotoData, photoListUrl, category }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.previewStage}>
        <h1
          className={styles.imageWrapper}
        >
          <LazyAnimationImage
            fill
            src={currentPhotoData.photo.url}
            alt='ミラーレス一眼で撮った写真'
            sizes="100vw"
          />
        </h1>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          {previousPhotoData != null ?
            <Link
              href={`/${category}/preview/${previousPhotoData.id}/`}
              className={`${styles.navigationLink} ${styles.prev}`}
            >
              <span className={`${barlow.className} ${styles.caption}`}>prev</span>
            </Link>
            : null
          }        
          <Link
            href={photoListUrl}
            className={`${styles.navigationLink} ${styles.list}`}
          >
            <span className={styles.navigationListIcon}>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
              <i className={styles.navigationListIconSquare}></i>
            </span>
          </Link>
          {nextPhotoData != null ?
            <Link
              href={`/${category}/preview/${nextPhotoData.id}/`}
              className={`${styles.navigationLink} ${styles.next}`}
            >
              <span className={`${barlow.className} ${styles.caption}`}>next</span>
            </Link>
            : null
          }          
        </div>
      </nav>        
    </div>
  );
};

export default PhotoPreview;
