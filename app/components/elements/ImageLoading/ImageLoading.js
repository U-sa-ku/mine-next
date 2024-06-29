import styles from "@/app/components/elements/ImageLoading/ImageLoading.module.scss";
import MineLogo from '@/app/components/elements/MineLogo/MineLogo';

// コンポーネント
export default function ImageLoading({ isLoaded }) {
  return (
    <div className={`${styles.wrapper} ${isLoaded ? styles.loaded : ''}`}>
      <figure className={styles.logo}>
        <MineLogo isAnimation={true} />
      </figure>
    </div>
  );
}
