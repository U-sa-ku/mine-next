"use client";
import { useState } from "react";
import SiteNavigationItems from '@/app/components/blocks/SiteNavigationItems/SiteNavigationItems';
import Hamburger from '@/app/components/elements/Hamburger/Hamburger';

// コンポーネント
export default function SiteNavigation() {
  const [isActive, setIsActive] = useState(false);
  const switchState = () => setIsActive(!isActive);
  const inactive = () => setIsActive(false);

  return (
    <>
      <Hamburger
        isNavigationActive={isActive}
        switchNavigationState={switchState}
      />
      <SiteNavigationItems
        isNavigationActive={isActive}
        inactiveNavigation={inactive}
      />  
    </>
  );
}
