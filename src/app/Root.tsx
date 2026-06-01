import { Outlet, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export function Root() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}