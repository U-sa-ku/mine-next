"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Barlow } from 'next/font/google';
import styles from '@/app/components/blocks/SiteNavigationItems/SiteNavigationItems.module.scss';
import Image2wheels from '@/public/img_navigation_2wheels.jpg';
import Image4wheels from '@/public/img_navigation_4wheels.jpg';
import ImageMirrorless from '@/public/img_navigation_mirrorless.jpg';

// Googleフォント
const barlow = Barlow({
  weight: ['100'],
  subsets: ['latin'],
  display: 'swap',
});

// コンポーネント
export default function SiteNavigationItems({ isTop, isFixed, mainvisualAnimation, isNavigationActive, inactiveNavigation }) { 
  const items = [
    { href: '/sidekick/2wheels/', caption: '2wheels', imageSrc: Image2wheels, imageAlt: 'YAMAHA SR400の画像' },
    { href: '/sidekick/mirrorless/', caption: 'mirrorless', imageSrc: ImageMirrorless, imageAlt: 'OLYMPUS OM-D E-M10の画像' },
    { href: '/sidekick/4wheels/', caption: '4wheels', imageSrc: Image4wheels, imageAlt: 'SUZUKI Kei Worksの画像' },
  ];

  // トップページのオープニングアニメーション
  const [isLoadedImages, setIsLoadedImages] = useState(Array(items.length).fill(false));
  const [isImageAnimation, setIsImageAnimation] = useState(false);

  const updateLoadedImages = (index) => {
    if(isTop) {
      setIsLoadedImages((prev) => {
        const isLoadedImagesTemp = [...prev];
        isLoadedImagesTemp[index] = true;
        return isLoadedImagesTemp;
      });

      if(mainvisualAnimation) mainvisualAnimation();
    }
  }

  useEffect(() => {
    if(isTop && isLoadedImages.every(Boolean)) setIsImageAnimation(true); 
  }, [isTop, isLoadedImages]);

  // ナビゲーションクローズ
  const closeNavigation = () => {
    if(!isTop && inactiveNavigation) inactiveNavigation();
  }

  return (
    <nav className={`${styles.wrapper} ${isNavigationActive ? styles.active : ''} ${isTop ? styles.top : ''} ${isFixed ? styles.fixed : ''}`}>
      {items.map((itemData, index) => (
        <Link
          key={index}
          href={itemData.href}
          className={`${styles.item} ${isTop ? styles.top : ''}`}
          onClick={closeNavigation}
          prefetch={true}
        >
          <p className={`${barlow.className} ${styles.caption}`}>{itemData.caption}</p>
          <Image
            priority
            fill
            src={itemData.imageSrc}
            alt={itemData.imageAlt}
            sizes="(max-width: 767px) 365px, (max-width: 1440px) 698px, 1418px"
            className={`${styles.image} ${isImageAnimation ? styles.animation : ''}`}
            onLoad={() => updateLoadedImages(index)}
          />
        </Link>
      ))}
    </nav>
  );
}
