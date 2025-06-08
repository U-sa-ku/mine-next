import Link from 'next/link';
import { Barlow } from "next/font/google";
import styles from "@/app/components/elements/Pagination/Pagination.module.scss";

// Googleフォント
const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

// コンポーネント
export default function Pagination({ sectionName, totalPages, currentPage }) {
  return (
    <ul className={styles.wrapper}>
      {Array.from({ length: totalPages }, (_, index) => (
        <li
          className={`${styles.item} ${index + 1 === currentPage ? styles.current : ''}`}
          key={index}
        >
          <Link
            href={`/${sectionName}/${index + 1}/`}
            className={`${barlow.className} ${styles.link}`}
            prefetch={true}
          >
            {index + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
}
