"use client";
import styles from "@/app/components/elements/Hamburger/Hamburger.module.scss";

// コンポーネント
export default function Hamburger({ isNavigationActive, switchNavigationState }) {
  return (
    <div
      className={styles.wrapper}
      onClick={switchNavigationState}
    >
      <i className={`${styles.icon} ${isNavigationActive ? styles.active : ''}`}></i>
    </div>
  );
}
