import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

const HomePage = lazy(() => import('@/pages/HomePage'));
const DiscoverPage = lazy(() => import('@/pages/DiscoverPage'));
const StoreProfilePage = lazy(() => import('@/pages/StoreProfilePage'));
const DealsPage = lazy(() => import('@/pages/DealsPage'));
const JunkShopFinderPage = lazy(() => import('@/pages/JunkShopFinderPage'));
const MerchantDashboardPage = lazy(() => import('@/pages/MerchantDashboardPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ListStorePage = lazy(() => import('@/pages/ListStorePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/store/:storeId" element={<StoreProfilePage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/junk-shops" element={<JunkShopFinderPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/list-store" element={<ListStorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/dashboard" element={<MerchantDashboardPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
