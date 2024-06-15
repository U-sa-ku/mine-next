import LayoutWithHeader from '@/app/layout/layoutWithHeader';

export default function snapshot({ children }) {
  return (
    <LayoutWithHeader>
      {children}
    </LayoutWithHeader>
  );
}