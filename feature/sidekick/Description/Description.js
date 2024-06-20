import styles from '@/feature/sidekick/Description/Description.module.scss';
import LazyAnimationImage from "@/app/components/elements/LazyAnimationImage/LazyAnimationImage";

const Contents = ({ sidekickData }) => {
  return (
    <section className={styles.wrapper}>
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
                alt={`${sidekickData.name}の写真${index + 1}`}
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
  );
}

export default Contents;
