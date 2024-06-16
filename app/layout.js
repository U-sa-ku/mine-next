import { Noto_Sans_JP } from "next/font/google";
import "@/app/styles/reset.scss";
import "@/app/styles/globals.scss";
import styles from "@/app/layout.module.scss";
import ReloadButton from '@/app/components/elements/ReloadButton/ReloadButton';
import PageLoading from '@/app/components/elements/PageLoading/PageLoading';
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
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/icon-64x64.png"></link>
        <link rel="apple-touch-icon" type="image/png" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#252525" />
      </head>      
      <body className={notojp.className}>
        <ReloadButton />
        <PageLoading />
        <div className={styles.contentsWrapper}>
          <SiteNavigation />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
