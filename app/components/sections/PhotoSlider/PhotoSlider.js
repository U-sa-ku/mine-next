"use client";
import { useState, useRef } from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import styles from "@/app/components/sections/PhotoSlider/PhotoSlider.module.scss";
import SectionTitle from "@/app/components/elements/SectionTitle/SectionTitle";
import LazyAnimationImage from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage";
import MoreButton from "@/app/components/elements/MoreButton/MoreButton";

const PhotoSlider = ({ sectionName, photoListData }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={styles.sectionWrapper}>
      <SectionTitle title={sectionName} />
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.3}
        spaceBetween={10}
        centeredSlides={true}
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
                alt={`${sectionName}カテゴリの写真${index + 1}`}
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
      <MoreButton
        link={`/${sectionName}/1/`}
        text={sectionName}
      />
    </section>
  );
};

export default PhotoSlider;
