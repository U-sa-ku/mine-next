import LayoutWithHeader from '@/app/layout/layoutWithHeader';

export default function PhotographPreviewLayout({ children }) {
  return (
    <LayoutWithHeader>
      {children}
    </LayoutWithHeader>
  );
}