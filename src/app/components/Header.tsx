import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/gaim', label: 'GAIM' },
    { path: '/ai-business-transformation', label: 'AI Business' },
    { path: '/venture-builder', label: 'Venture Builder' },
    { path: '/ai-products', label: 'AI Products' },
    { path: '/squads', label: 'Squads' },
    { path: '/cases', label: 'Cases' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00FF88] to-[#00CC6A] flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[#0A0A0A] font-bold text-sm">G</span>
            </motion.div>
            <span className="text-white tracking-tight" style={{ fontFamily: 'var(--font-headline)' }}>
              Growvera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#00FF88]'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/diagnostico"
              className="px-6 py-2.5 bg-[#00FF88] text-[#0A0A0A] rounded-lg hover:bg-[#00CC6A] transition-all"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Diagnóstico
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#00FF88]'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/diagnostico"
              className="px-6 py-2.5 bg-[#00FF88] text-[#0A0A0A] rounded-lg text-center"
              style={{ fontFamily: 'var(--font-headline)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Diagnóstico
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
