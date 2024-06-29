import SiteHeader from '@/app/components/layouts/SiteHeader/SiteHeader';

export default function layoutWithScrollHeader({ children }) {
  return (
    <>
      <SiteHeader isScrollAnimation={true} />
      {children}
    </>
  );
}