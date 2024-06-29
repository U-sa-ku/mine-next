"use client";
import styles from '@/feature/sidekick/Movie/Movie.module.scss';
import SectionTitle from "@/app/components/elements/SectionTitle/SectionTitle";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

// コンポーネント
export default function Contents({ sidekickData }) {
  return (
    <section className={styles.wrapper}>
      <SectionTitle title='movie' />
      <ul className={styles.list}>
        {sidekickData.movie.map((data, index) => (
          <li
            key={index}
            className={styles.item}
          >
            <div className={styles.iframe}>
              <ReactPlayer
                url={`https://www.youtube.com/embed/${data.movie_id}`}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
