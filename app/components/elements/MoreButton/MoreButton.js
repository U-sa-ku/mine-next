import Link from 'next/link';
import { Barlow } from "next/font/google";
import styles from "@/app/components/elements/MoreButton/MoreButton.module.scss";

// Googleフォント
const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

// コンポーネント
export default function MoreButton({ link, text }) {
  return (
    <div className={`${barlow.className} ${styles.wrapper}`}>
      <Link
        href={link}
        className={styles.link}
        prefetch={true}
      >
        more { text }
      </Link>
    </div>
  );
}
