"use client";
import { useState } from 'react';
import styles from '@/feature/sidekick/Contents/Contents.module.scss';
import Mainvisual from '@/feature/sidekick/Mainvisual/Mainvisual';
import Description from '@/feature/sidekick/Description/Description';
import Movie from '@/feature/sidekick/Movie/Movie';
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

        {sidekickData.movie.length >= 1 ? <Movie sidekickData={sidekickData} /> : null}

        {photographListData.contents.length >= 1 ?
          <PhotoSlider
            sectionName='photograph'
            photoListData={photographListData.contents}
          />
          : null
        }
        {snapshotListData.contents.length >= 1 ?
          <PhotoSlider
            sectionName='snapshot'
            photoListData={snapshotListData.contents}
          /> 
          : null
        }        


       
      </main>
    </>
  );
}

export default Contents;
