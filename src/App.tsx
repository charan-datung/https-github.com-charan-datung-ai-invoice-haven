import { Routes, Route } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import HomePage from '@/pages/HomePage'
import DiscoverPage from '@/pages/DiscoverPage'
import StoreProfilePage from '@/pages/StoreProfilePage'
import DealsPage from '@/pages/DealsPage'
import JunkShopFinderPage from '@/pages/JunkShopFinderPage'
import MerchantDashboardPage from '@/pages/MerchantDashboardPage'
import PricingPage from '@/pages/PricingPage'
import AboutPage from '@/pages/AboutPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/store/:storeId" element={<StoreProfilePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/junk-shops" element={<JunkShopFinderPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/dashboard" element={<MerchantDashboardPage />} />
    </Routes>
  )
}

export default App
