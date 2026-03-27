import {
  Store,
  Package,
  Megaphone,
  BarChart3,
  Rocket,
  ShoppingCart,
  QrCode,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'store', label: 'My Store', icon: Store },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'deals', label: 'Post Deal', icon: Megaphone },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'boost', label: 'Boost', icon: Rocket },
  { id: 'orders', label: 'Orders', icon: ShoppingCart },
  { id: 'qrcode', label: 'QR Code', icon: QrCode },
];

const DashboardSidebar = ({ activeTab, onTabChange }: DashboardSidebarProps) => {
  return (
    <>
      {/* Mobile: Horizontal scrolling tabs */}
      <div className="md:hidden overflow-x-auto scrollbar-hide border-b border-kanto-cream bg-white">
        <div className="flex min-w-max px-2 py-2 gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                  isActive
                    ? 'bg-kanto-orange text-white'
                    : 'text-kanto-brown/60 hover:bg-kanto-cream hover:text-kanto-brown'
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop: Vertical sidebar */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 bg-white border-r border-kanto-cream min-h-[calc(100vh-4rem)]">
        <div className="p-4">
          <h2 className="text-xs font-semibold text-kanto-gray uppercase tracking-wider mb-3 px-3">
            Dashboard
          </h2>
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={cn(
                    'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left',
                    isActive
                      ? 'bg-kanto-orange/10 text-kanto-orange'
                      : 'text-kanto-brown/60 hover:bg-kanto-cream hover:text-kanto-brown'
                  )}
                >
                  <Icon className={cn('w-5 h-5', isActive ? 'text-kanto-orange' : '')} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
