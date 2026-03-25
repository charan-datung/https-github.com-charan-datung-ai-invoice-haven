import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import StoreEditor from '@/components/dashboard/StoreEditor';
import AnalyticsPanel from '@/components/dashboard/AnalyticsPanel';
import BoostPanel from '@/components/dashboard/BoostPanel';
import OrdersList from '@/components/dashboard/OrdersList';
import { Package, Megaphone } from 'lucide-react';

const PlaceholderPanel = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="w-16 h-16 bg-kanto-cream rounded-2xl flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-kanto-gray" />
    </div>
    <h3 className="text-lg font-semibold text-kanto-brown mb-2">{title}</h3>
    <p className="text-sm text-kanto-gray">Coming soon. Stay tuned!</p>
  </div>
);

const MerchantDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('store');

  const renderPanel = () => {
    switch (activeTab) {
      case 'store':
        return <StoreEditor />;
      case 'products':
        return <PlaceholderPanel title="Products" icon={Package} />;
      case 'deals':
        return <PlaceholderPanel title="Post Deal" icon={Megaphone} />;
      case 'analytics':
        return <AnalyticsPanel />;
      case 'boost':
        return <BoostPanel />;
      case 'orders':
        return <OrdersList />;
      default:
        return <StoreEditor />;
    }
  };

  return (
    <div className="min-h-screen bg-kanto-cream flex flex-col">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-kanto-cream">
        <div className="flex items-center justify-between h-14 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-kanto-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-lg font-bold text-kanto-brown">Kanto</span>
          </Link>
          <h1 className="text-sm font-semibold text-kanto-brown">Merchant Dashboard</h1>
          <Link
            to="/"
            className="text-sm text-kanto-orange font-medium hover:underline"
          >
            Back to Kanto
          </Link>
        </div>
      </header>

      {/* Mobile tabs */}
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Body */}
      <div className="flex flex-1">
        {/* Desktop sidebar (rendered inside DashboardSidebar but only visible md+) */}
        <div className="hidden md:block">
          <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {renderPanel()}
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboardPage;
