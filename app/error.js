"use client"
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
  title: "500 | mine",
  description: "サーバーエラーが発生しました。",
}

// コンポーネント
export default async function error() {
  return (
    <>
      <SiteHeader />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={`${barlow.className} ${styles.errorCode}`}>500</h1>
          <p className={styles.message}>サーバーエラーが発生しました。</p>
        </div>
      </main>
    </>
  );
}
