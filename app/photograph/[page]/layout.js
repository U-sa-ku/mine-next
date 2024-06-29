import LayoutWithHeader from '@/app/layout/layoutWithHeader';

export default function PhotographLayout({ children }) {
  return (
    <LayoutWithHeader>
      {children}
    </LayoutWithHeader>
  );
}