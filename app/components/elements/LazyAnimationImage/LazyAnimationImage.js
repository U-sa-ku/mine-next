"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage.module.scss";
import ImageLoading from "@/app/components/elements/ImageLoading/ImageLoading";

// コンポーネント
export default function LazyAnimationImage(props) {
  const [isLoaded, setLoaded] = useState(false);
  
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        onLoad={() => setLoaded(true)}
      />
      <ImageLoading isLoaded={isLoaded} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
    </>
  );
}
