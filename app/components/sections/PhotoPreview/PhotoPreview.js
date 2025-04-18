"use client";
import { useState, useEffect } from 'react';
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

// コンポーネント
export default function PhotoPreview({ category, currentPhotoData, previousPhotoData, nextPhotoData, listNumber }) {
  const [isSlideImageToRight, setIsSlideImageToRight] = useState(false);
  const [isSlideImageToLeft, setIsSlideImageToLeft] = useState(false);

  // 画像alt
  let imageAlt;

  if(category == 'photograph') {
    imageAlt = 'ミラーレス一眼で撮った写真';
  } else if(category == 'snapshot') {
    imageAlt = 'スマートフォンで撮った写真'
  }

  // 画像を右にスライドアウト
  const slideImageToRight = () => {
    setIsSlideImageToRight(true);
  }
  
  // 画像を左にスライドアウト
  const slideImageToLeft = () => {
    setIsSlideImageToLeft(true);
  }  

  return (
    <div className={styles.wrapper}>
      <div className={styles.previewStage}>
        <h1
          className={`${styles.imageWrapper} ${isSlideImageToRight ? styles.slideImageToRight : ''} ${isSlideImageToLeft ? styles.slideImageToLeft : ''}`}
        >
          <LazyAnimationImage
            fill
            src={currentPhotoData.photo.url}
            alt={imageAlt}
            sizes="100vw"
          />
        </h1>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.navigationInner}>
          {previousPhotoData != null ?
            <Link
              href={`/${category}/preview/${previousPhotoData.id}/?list=${listNumber}`}
              className={`${styles.navigationLink} ${styles.prev}`}
              onClick={slideImageToRight}
            >
              <span className={`${barlow.className} ${styles.caption}`}>prev</span>
            </Link>
            : null
          }        
          <Link
            href={`/${category}/${listNumber}/`}
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
              href={`/${category}/preview/${nextPhotoData.id}/?list=${listNumber}`}
              className={`${styles.navigationLink} ${styles.next}`}
              onClick={slideImageToLeft}
            >
              <span className={`${barlow.className} ${styles.caption}`}>next</span>
            </Link>
            : null
          }          
        </div>
      </nav>        
    </div>
  );
}
