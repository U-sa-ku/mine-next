import SiteHeader from '@/app/components/layouts/SiteHeader/SiteHeader';

export default function layoutWithHeader({ children }) {
  return (
    <>
      <SiteHeader isNoAnimation={true} />
      {children}
    </>
  );
}