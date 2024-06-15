"use client";
import { useRouter } from 'next/navigation';
import { Barlow } from "next/font/google";
import styles from "@/app/components/elements/Pagination/Pagination.module.scss";

// Googleフォント
const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const Pagination = ({ sectionName, totalPages, currentPage }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`/${sectionName}/${page}/`);
  }

  return (
    <ul className={styles.wrapper}>
      {Array.from({ length: totalPages }, (_, index) => (
        <li className={`${styles.item} ${index + 1 === currentPage ? styles.current : ''}`}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          <span className={`${barlow.className} ${styles.text}`}>{index + 1}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;