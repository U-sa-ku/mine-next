"use client";
import { useState, useRef } from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import styles from "@/app/components/sections/PhotoSlider/PhotoSlider.module.scss";
import SectionTitle from "@/app/components/elements/SectionTitle/SectionTitle";
import PhotoListNavigation from "@/app/components/elements/PhotoListNavigation/PhotoListNavigation";
import LazyAnimationImage from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage";
import MorePhotoListButton from "@/app/components/elements/MorePhotoListButton/MorePhotoListButton";

// コンポーネント
export default function PhotoSlider({ category, sidekick, photoListData }) {
  // リード文
  let lead;

  if(category == 'photograph') {
    lead = 'ミラーレス一眼で撮影した写真';
  } else if(category == 'snapshot') {
    lead = 'スマートフォンで撮影した写真'
  } else {
    lead = '';
  }

  // 一覧リンクのパス
  const sidekickName = sidekick ? sidekick : 'all';

  // Swiperのコントローラー
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={styles.wrapper}>
      <SectionTitle title={category} />
      <p className={styles.lead}>{lead}</p>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.3}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 1.265
          },
          1921: {
            slidesPerView: 2.225
          }
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}        
        className={styles.slider}
      >
        {photoListData.map((data, index) => (
          <SwiperSlide
            key={index}
            className={styles.slide}
          >
            <div className={styles.image}>
              <LazyAnimationImage
                fill
                src={data.photo.url}
                alt={`${category}カテゴリの写真${index + 1}`}
                sizes="(max-width: 767px) 287px, (max-width: 1440px) 1125px, 1277px"
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          ref={navigationPrevRef}
          className={`${styles.navigationPrev} ${isBeginning ? styles.disabled : ''}`}
        ></div>
        <div
          ref={navigationNextRef}
          className={`${styles.navigationNext} ${isEnd ? styles.disabled : ''}`}
        ></div>      
      </Swiper>
      <MorePhotoListButton
        link={`/${category}/${sidekickName}/1/`}
        text={`${sidekickName} ${category}`}
      />
    </section>
  );
}
