import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'For Merchants',
    links: [
      { label: 'List Your Store', to: '/list-store' },
      { label: 'Pricing Plans', to: '/pricing' },
      { label: 'Merchant Dashboard', to: '/dashboard' },
      { label: 'Success Stories', to: '/stories' },
    ],
  },
  {
    title: 'For Consumers',
    links: [
      { label: 'Discover Stores', to: '/discover' },
      { label: 'Today\'s Deals', to: '/deals' },
      { label: 'Junk Shop Prices', to: '/junk-shops' },
      { label: 'How It Works', to: '/how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Kanto', to: '/about' },
      { label: 'Our Mission', to: '/mission' },
      { label: 'Careers', to: '/careers' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', to: '/help' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-kanto-brown text-kanto-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-kanto-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-kanto-cream">Kanto</span>
            </Link>
            <p className="text-sm text-kanto-cream/70 leading-relaxed">
              Bawat pisong gastusin mo, nananatili sa inyong komunidad
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-kanto-cream mb-3">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-kanto-cream/60 hover:text-kanto-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-kanto-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-kanto-cream/50">
          <span>&copy; {new Date().getFullYear()} Kanto. All rights reserved.</span>
          <span>Made with love for Filipino communities</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
