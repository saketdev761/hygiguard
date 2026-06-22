'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingCTA } from './FloatingCTA';
import { CartProvider } from '@/context/CartContext';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBilling = pathname === '/billing';

  return (
    <CartProvider>
      {!isBilling && <Header />}
      <main className="flex-1">{children}</main>
      {!isBilling && <Footer />}
      {!isBilling && <FloatingCTA />}
    </CartProvider>
  );
}
