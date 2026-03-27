import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import PWAInstallPrompt from '../shared/PWAInstallPrompt';

const PageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-kanto-cream">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <PWAInstallPrompt />
    </div>
  );
};

export default PageLayout;
