import LayoutWithHeader from '@/app/layout/layoutWithHeader';

export default function photograph({ children }) {
  return (
    <LayoutWithHeader>
      {children}
    </LayoutWithHeader>
  );
}