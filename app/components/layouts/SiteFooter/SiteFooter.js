import { Barlow } from "next/font/google";
import styles from "@/app/components/layouts/SiteFooter/SiteFooter.module.scss";

// Googleフォント
const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const SiteFooter = () => {
  return (
    <footer className={`${barlow.className} ${styles.layoutWrapper}`}>
      <p className={styles.copyright}>&copy;mine All Rights Reserved</p>
    </footer>
  );
};

export default SiteFooter;