import LayoutWithScrollHeader from '@/app/layout/layoutWithScrollHeader';

export default function SidekickLayout({ children }) {
  return (
    <LayoutWithScrollHeader>
      {children}
    </LayoutWithScrollHeader>
  );
}