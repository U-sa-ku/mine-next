"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "@/app/components/sections/PhotoList/PhotoList.module.scss";
import SectionTitle from "@/app/components/elements/SectionTitle/SectionTitle";
import LazyAnimationImage from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage";
import Pagination from "@/app/components/elements/Pagination/Pagination";

// コンポーネント
export default function PhotoList({ sectionName, photoListData, totalPages, currentPage }) {
  // リード文
  let lead;

  if(sectionName == 'photograph') {
    lead = 'ミラーレス一眼で撮った写真';
  } else if(sectionName == 'snapshot') {
    lead = 'スマートフォンで撮った写真'
  } else {
    lead = '';
  }

  // 読み込みアニメーション
  const [isAnimation, setIsAnimation] = useState(false);
  
  useEffect(() => setIsAnimation(true), []);

  return (
    <section className={styles.wrapper}>
      <SectionTitle title={sectionName} />
      <p className={styles.lead}>{lead}</p>
      <ul className={`${styles.list} ${isAnimation ? styles.animation : ''}`}>
        {photoListData.map((data, index) => (
          <li
            key={index}
            className={styles.listItem}
          >
            <Link
              href={`/${sectionName}/preview/${data.id}/?list=${currentPage}`}
              className={styles.link}
              prefetch={true}
            >
              <figure className={styles.image}>
                <LazyAnimationImage
                  fill
                  src={data.photo.url}
                  alt={`${sectionName}カテゴリの写真${index + 1}`}
                  sizes="(max-width: 767px) 124px, (max-width: 1440px) 356px, 477px"
                />
              </figure>
              <figure className={`${styles.frame} ${styles.top}`}></figure>
              <figure className={`${styles.frame} ${styles.right}`}></figure>
              <figure className={`${styles.frame} ${styles.bottom}`}></figure>
              <figure className={`${styles.frame} ${styles.left}`}></figure>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        sectionName={sectionName}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </section>
  );
}
