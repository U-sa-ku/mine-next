"use client";
import { useState, useEffect } from 'react';
import styles from '@/feature/sidekick/Contents/Contents.module.scss';
import Mainvisual from '@/feature/sidekick/Mainvisual/Mainvisual';
import Description from '@/feature/sidekick/Description/Description';
import Movie from '@/feature/sidekick/Movie/Movie';
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

const Contents = ({ sidekickData, photographListData, snapshotListData }) => {
  const [isAnimation, setIsAnimation] = useState(false);
  const [isMovieRendering, setIsMovieRendering] = useState(false);

  // オープニングアニメーション
  const contentsAnimation = () => {
    setIsAnimation(true);
    
    setTimeout(() =>{
      setIsMovieRendering(true);
    }, 1000);    
  }

  // ブラウザがメインビジュアルの高さ以下でパララックス無効化
  const [isMainvisualUnfixed, setMainvisualUnfixed] = useState(false);
  
  const switchMainvisualFixed = () => {
    const windowHeight = window.innerHeight;

    if(windowHeight <= 950) {
      setMainvisualUnfixed(true);
    } else {
      setMainvisualUnfixed(false);
    }
  }

  useEffect(() => {
    switchMainvisualFixed();
    window.addEventListener('resize', switchMainvisualFixed);

    return () => {
      window.removeEventListener('resize', switchMainvisualFixed);
    };
  }, []);    

  return (
    <>
      <Mainvisual
        sidekickData={sidekickData}
        contentsAnimation={contentsAnimation}
        isUnfixed={isMainvisualUnfixed}
      />     
      <main className={`${styles.wrapper} ${isAnimation ? styles.animation : ''} ${isMainvisualUnfixed ? styles.mainvisualUnfixed : ''}`}>
        <i className={`${styles.scrollIcon} ${isAnimation ? styles.animation : ''} ${isMainvisualUnfixed ? styles.mainvisualUnfixed : ''}`}></i>
        <Description sidekickData={sidekickData} />
        {sidekickData.movie.length >= 1 && isMovieRendering ? <Movie sidekickData={sidekickData} /> : null}
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
