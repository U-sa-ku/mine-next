import Link from 'next/link';
import { Barlow } from "next/font/google";
import styles from "@/app/components/elements/PhotoListNavigation/PhotoListNavigation.module.scss";

// Googleフォント
const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

// コンポーネント
export default function PhotoListNavigation({ category, sidekick }) {
  const paths = ['all', '2wheels', '4wheels', 'mirrorless'];

  return (
    <nav className={`${barlow.className} ${styles.wrapper}`}>
      {paths.map((path) => {
        if (category === 'snapshot' && path === 'mirrorless') return null;
        return (
          <Link
            key={path}
            href={`/${category}/${path}/1/`}
            className={`${styles.link} ${sidekick == path ? styles.current : ''}`}
            prefetch={true}
          >
            {path}
          </Link>
        );
      })}
    </nav>
  );
}
