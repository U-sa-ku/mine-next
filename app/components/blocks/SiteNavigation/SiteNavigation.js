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
      <i
        className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
        onClick={switchActive}
      >
      </i>
      <SiteNavigationItems
        isActive={isActive}
        hamburgerInactive={inactive}
      />  
    </>
  );
}

export default SiteNavigation;