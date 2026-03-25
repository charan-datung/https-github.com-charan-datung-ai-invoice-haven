import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';


const navLinks = [
  { label: 'Discover', to: '/discover' },
  { label: 'Deals', to: '/deals' },
  { label: 'Junk Shops', to: '/junk-shops' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-kanto-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-kanto-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-kanto-brown">Kanto</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 text-sm font-medium text-kanto-brown/70 hover:text-kanto-orange rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 text-kanto-brown/60 hover:text-kanto-orange transition-colors rounded-lg"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/list-store"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-kanto-orange text-white text-sm font-semibold rounded-lg hover:bg-kanto-orange/90 transition-colors"
              >
                List Your Store
              </Link>
              <button
                className="md:hidden p-2 text-kanto-brown/60 hover:text-kanto-orange transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-kanto-gray-light">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <div className="w-8 h-8 bg-kanto-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-lg font-bold text-kanto-brown">Kanto</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-kanto-brown/60 hover:text-kanto-orange"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-kanto-brown/80 hover:text-kanto-orange hover:bg-kanto-cream rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto p-4 border-t border-kanto-gray-light">
              <Link
                to="/list-store"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-3 bg-kanto-orange text-white font-semibold rounded-lg hover:bg-kanto-orange/90 transition-colors"
              >
                List Your Store
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
