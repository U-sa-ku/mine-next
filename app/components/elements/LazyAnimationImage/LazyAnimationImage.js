"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage.module.scss";
import ImageLoading from "@/app/components/elements/ImageLoading/ImageLoading";

const LazyAnimationImage = (props, alt) => {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        {...props}
        alt={alt}
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        onLoad={() => setLoaded(true)}
      />
      <ImageLoading isLoaded={isLoaded} />
    </>
  );
};

export default LazyAnimationImage;
