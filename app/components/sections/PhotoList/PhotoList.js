"use client";
import Link from 'next/link';
import styles from "@/app/components/sections/PhotoList/PhotoList.module.scss";
import SectionTitle from "@/app/components/elements/SectionTitle/SectionTitle";
import LazyAnimationImage from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage";
import Pagination from "@/app/components/elements/Pagination/Pagination";

const PhotoList = ({ sectionName, photoListData, totalPages, currentPage }) => {
  return (
    <section className={styles.wrapper}>
      <SectionTitle title={sectionName} />
      <ul className={styles.list}>
        {photoListData.map((data, index) => (
          <li
            key={index}
            className={styles.listItem}
          >
            <Link
              href={`/${sectionName}/preview/${data.id}/`}
              className={styles.link}
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
};

export default PhotoList;
