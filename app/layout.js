import { Noto_Sans_JP } from "next/font/google";
import "@/app/styles/reset.scss";
import "@/app/styles/globals.scss";
import styles from "@/app/layout.module.scss";
import SiteNavigation from '@/app/components/blocks/SiteNavigation/SiteNavigation';
import SiteFooter from '@/app/components/layouts/SiteFooter/SiteFooter';

// Googleフォント
const notojp = Noto_Sans_JP({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body className={notojp.className}>
        <div className={styles.contentsWrapper}>
          <SiteNavigation />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
