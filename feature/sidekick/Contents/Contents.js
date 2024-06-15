"use client";
import { useState } from 'react';
import styles from '@/feature/sidekick/Contents/Contents.module.scss';
import Mainvisual from '@/feature/sidekick/Mainvisual/Mainvisual';
import Description from '@/feature/sidekick/Description/Description';
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

const Contents = ({ sidekickData, photographListData, snapshotListData }) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const contentsAnimation = () => {
    setIsAnimation(true);
  }

  return (
    <>
      <Mainvisual
        sidekickData={sidekickData}
        contentsAnimation={contentsAnimation}
      />     
      <main className={`${styles.wrapper} ${isAnimation ? styles.animation : ''}`}>
        <i className={`${styles.scrollIcon} ${isAnimation ? styles.animation : ''}`}></i>
        <Description sidekickData={sidekickData} />        
        <PhotoSlider
          sectionName='photograph'
          photoListData={photographListData.contents}
        />
        <PhotoSlider
          sectionName='snapshot'
          photoListData={snapshotListData.contents}
        />        
      </main>
    </>
  );
}

export default Contents;
