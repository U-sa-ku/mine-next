import styles from "@/app/components/elements/ImageLoading/ImageLoading.module.scss";
import MineLogo from '@/app/components/elements/MineLogo/MineLogo';

const ImageLoading = ({ isLoaded }) => {
  return (
    <div className={`${styles.wrapper} ${isLoaded ? styles.loaded : ''}`}>
      <figure className={styles.logo}>
        <MineLogo isAnimation={true} />
      </figure>
    </div>
  );
};

export default ImageLoading;
