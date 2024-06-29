import LayoutWithHeader from '@/app/layout/layoutWithHeader';

export default function SnapshotLayout({ children }) {
  return (
    <LayoutWithHeader>
      {children}
    </LayoutWithHeader>
  );
}