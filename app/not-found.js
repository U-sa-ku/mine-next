import SiteHeader from '@/app/components/layouts/SiteHeader/SiteHeader';
import { Barlow } from 'next/font/google';
import styles from "@/app/error.module.scss";

// Googleフォント
const barlow = Barlow({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
});

// メタデータ生成
export const metadata = {
  title: "404 | mine",
  description: "ページが見つかりませんでした。",
}

// コンポーネント
export default async function notFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={`${barlow.className} ${styles.errorCode}`}>404</h1>
          <p className={styles.message}>ページが見つかりませんでした。</p>
        </div>
      </main>
    </>
  );
}
