import Hero from '@/components/home/Hero';
import EmotionalHooks from '@/components/home/EmotionalHooks';
import FeaturedStores from '@/components/home/FeaturedStores';
import HowItWorks from '@/components/home/HowItWorks';
import BusinessTypes from '@/components/home/BusinessTypes';
import DualCTA from '@/components/home/DualCTA';
import PageMeta from '@/components/shared/PageMeta';

const HomePage = () => {
  return (
    <main>
      <PageMeta title="Ang Marketplace ng Iyong Kapitbahay" />
      <Hero />
      <EmotionalHooks />
      <FeaturedStores />
      <HowItWorks />
      <BusinessTypes />
      <DualCTA />
    </main>
  );
};

export default HomePage;
