import styles from '@/app/components/elements/MineLogo/MineLogo.module.scss';

// コンポーネント
export default function MineLogo({ isAnimation }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <g>
          <rect x="361.4" y="78.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 37.868 308.5786)" className={`${styles.rect01} ${isAnimation ? styles.animation : ''}`} width="60" height="60"></rect>
          <path className={`${styles.path01} ${isAnimation ? styles.animation : ''}`} d="M419.7,207.6l-42.4-42.4l-42.4-42.4l-42.4-42.4L250,37.9l-42.4,42.4l-42.4,42.4l-42.4,42.4l-42.4,42.4L37.9,250l42.4,42.4l42.4-42.4l42.4-42.4l42.4-42.4l42.4-42.4l42.4,42.4L250,207.6L207.6,250l-42.4,42.4l-42.4,42.4l42.4,42.4l42.4,42.4l42.4,42.4l42.4-42.4l42.4-42.4l42.4-42.4l42.4-42.4l42.4-42.4L419.7,207.6z M334.9,292.4l-42.4,42.4L250,377.3l-42.4-42.4l42.4-42.4l42.4-42.4l42.4-42.4l42.4,42.4L334.9,292.4z"></path>
        </g>
      </svg>
    </>
  );
}
