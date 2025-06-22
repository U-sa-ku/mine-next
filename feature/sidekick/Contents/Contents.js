"use client";
import { useState, useEffect } from 'react';
import styles from '@/feature/sidekick/Contents/Contents.module.scss';
import Mainvisual from '@/feature/sidekick/Mainvisual/Mainvisual';
import Description from '@/feature/sidekick/Description/Description';
import Movie from '@/feature/sidekick/Movie/Movie';
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

// コンポーネント
export default function Contents({ sidekickData, photographListData, snapshotListData }) {
  const [isAnimation, setIsAnimation] = useState(false);
  const [isMovieRendering, setIsMovieRendering] = useState(false);

  // オープニングアニメーション
  const contentsAnimation = () => {
    setIsAnimation(true);
    setTimeout(() => setIsMovieRendering(true), 2000);    
  }

  // PCブラウザの特定の高さ以下でパララックス無効化
  const [isMainvisualUnfixed, setMainvisualUnfixed] = useState(false);
  const [isPc, setIsPc] = useState(false);
  
  const switchMainvisualFixed = () => {
    const windowHeight = window.innerHeight;
    const userAgent = navigator.userAgent;

    userAgent.indexOf('iPhone') == -1 || (userAgent.indexOf('Android') == -1 && userAgent.indexOf('Mobile') == -1) ? setIsPc(true) : setIsPc(false);
    windowHeight <= 950 && isPc ? setMainvisualUnfixed(true) : setMainvisualUnfixed(false);
  }

  useEffect(() => {
    window.scroll({top: 0}); // ブラウザ幅1441px以上でのページ読み込み後のスクロールバグ対策
    switchMainvisualFixed();
    window.addEventListener('resize', switchMainvisualFixed);
    return () => window.removeEventListener('resize', switchMainvisualFixed);
  }, []);

  return (
    <>
      <Mainvisual
        sidekickData={sidekickData}
        contentsAnimation={contentsAnimation}
        isUnfixed={isMainvisualUnfixed}
        isPc={isPc}
      />     
      <main className={`${styles.wrapper} ${isAnimation ? styles.animation : ''} ${isMainvisualUnfixed ? styles.mainvisualUnfixed : ''}`}>
        <i className={`${styles.scrollIcon} ${isAnimation ? styles.animation : ''} ${isMainvisualUnfixed ? styles.mainvisualUnfixed : ''}`}></i>
        <Description sidekickData={sidekickData} />
        {sidekickData.movie.length >= 1 && isMovieRendering ? <Movie sidekickData={sidekickData} /> : null}
        {photographListData.contents.length >= 1 ?
          <PhotoSlider
            category='photograph'
            sidekick={sidekickData.id}
            photoListData={photographListData.contents}
          />
          : null
        }
        {snapshotListData.contents.length >= 1 ?
          <PhotoSlider
            category='snapshot'
            sidekick={sidekickData.id}
            photoListData={snapshotListData.contents}
          /> 
          : null
        }
      </main>
    </>
  );
}
