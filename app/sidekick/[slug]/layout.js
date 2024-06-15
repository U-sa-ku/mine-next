import LayoutWithScrollHeader from '@/app/layout/layoutWithScrollHeader';

export default function photograph({ children }) {
  return (
    <LayoutWithScrollHeader>
      {children}
    </LayoutWithScrollHeader>
  );
}