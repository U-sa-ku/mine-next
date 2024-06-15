"use client";
import { useState } from 'react';
import styles from '@/feature/sidekick/Contents/Contents.module.scss';
import LazyAnimationImage from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage";
import Mainvisual from '@/feature/sidekick/Mainvisual/Mainvisual';
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

const Contents = ({ sidekickData, photographListData, snapshotListData }) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const animation = () => {
    setIsAnimation(true);
  }

  return (
    <>
      <Mainvisual
        sidekickData={sidekickData}
        contentsAnimation={animation}
      />
      <div className={`${styles.wrapper}`}>
        <i className={`${styles.scrollIcon} ${isAnimation ? styles.animation : ''}`}></i>
        <section className={`${styles.inner} ${isAnimation ? styles.animation : ''}`}>
          <div className={styles.title} dangerouslySetInnerHTML={{ __html: sidekickData.description_title }} />
          <div>
            {sidekickData.description_body.map((data, index) => (
              <div
                key={index}
                className={styles.body}
              >
                <div className={styles.imageWrapper}>
                  <LazyAnimationImage
                    fill
                    src={data.image.url}
                    alt={`${sidekickData.name}の写真${index}`}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.leadWrapper}>
                  <div className={styles.lead} dangerouslySetInnerHTML={{ __html: data.lead }} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <PhotoSlider
          sectionName='photograph'
          photoListData={photographListData.contents}
        />
        <PhotoSlider
          sectionName='snapshot'
          photoListData={snapshotListData.contents}
        />        
      </div>
    </>
  );
}

export default Contents;
