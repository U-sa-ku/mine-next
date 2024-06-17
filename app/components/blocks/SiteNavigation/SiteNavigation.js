"use client";
import { useState } from "react";
import styles from "@/app/components/blocks/SiteNavigation/SiteNavigation.module.scss";
import SiteNavigationItems from '@/app/components/blocks/SiteNavigationItems/SiteNavigationItems';

const SiteNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  const switchActive = () => {
    setIsActive(!isActive);
  };

  const inactive = () => {
    setIsActive(false);
  };  

  return (
    <>
      <div
        className={styles.hamburger}
        onClick={switchActive}
      >
        <i className={`${styles.hamburgerIcon} ${isActive ? styles.active : ''}`}></i>
      </div>
      <SiteNavigationItems
        isActive={isActive}
        hamburgerInactive={inactive}
      />  
    </>
  );
}

export default SiteNavigation;