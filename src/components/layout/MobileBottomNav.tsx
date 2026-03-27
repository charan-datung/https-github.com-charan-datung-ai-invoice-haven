import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Zap, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
  { label: 'Home', icon: Home, to: '/' },
  { label: 'Discover', icon: Search, to: '/discover' },
  { label: 'Deals', icon: Zap, to: '/deals' },
  { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
];

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-kanto-gray-light md:hidden">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.to;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={cn(
                'flex flex-col items-center justify-center gap-1 flex-1 h-full text-xs font-medium transition-colors',
                isActive ? 'text-kanto-orange' : 'text-kanto-gray'
              )}
            >
              <tab.icon className={cn('w-5 h-5', isActive && 'stroke-[2.5]')} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
