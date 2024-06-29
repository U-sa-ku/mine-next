import LayoutWithHeader from '@/app/layout/layoutWithHeader';

export default function SnapshotPreviewLayout({ children }) {
  return (
    <LayoutWithHeader>
      {children}
    </LayoutWithHeader>
  );
}