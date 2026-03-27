import { useState } from 'react';
import { ChevronDown, Zap, Award, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import PricingCard from '@/components/pricing/PricingCard';
import { pricingTiers } from '@/data/pricing-tiers';
import PageMeta from '@/components/shared/PageMeta';

const boostAddOns = [
  { name: 'Boost Post', price: '₱49–99 per boost', icon: Zap },
  { name: 'Featured Store', price: '₱299–699/week', icon: Award },
  { name: 'Promo Campaign', price: '₱199–499 per campaign', icon: Bell },
];

const faqs = [
  {
    q: 'Kailangan ko ba magbayad para makapag-list ng store?',
    a: 'Hindi! Ang Libre plan ay forever free. Pwede kang mag-list ng store, mag-post ng products, at tanggapin ang reviews nang walang bayad.',
  },
  {
    q: 'Paano mag-upgrade sa Plus o Pro?',
    a: 'Pwede kang mag-upgrade anytime sa iyong Merchant Dashboard. Tanggap namin ang GCash, Maya, at bank transfer na payment.',
  },
  {
    q: 'May lock-in period ba?',
    a: 'Wala! Pwede kang mag-cancel anytime. Walang contract, walang hidden fees. Kung mag-cancel ka, babalik lang sa Libre plan ang store mo.',
  },
  {
    q: 'Ano ang Boost at paano ito gumagana?',
    a: 'Ang Boost ay paid visibility tool na pinu-push ang iyong store o deal sa harap ng mas maraming customers sa iyong area. Ito ay one-time purchase, hindi subscription.',
  },
  {
    q: 'May discount ba para sa matagal nang nag-subscribe?',
    a: 'Oo! Kung mag-subscribe ng annual plan, makaka-save ka ng 2 months free. Available ito sa Plus at Pro plans.',
  },
];

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-kanto-cream">
      <PageMeta title="Pricing" />
      {/* Hero */}
      <div className="bg-gradient-to-b from-kanto-orange/5 via-kanto-cream to-kanto-cream pt-12 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-kanto-brown mb-3">
            Mga Plano at Presyo
          </h1>
          <p className="text-kanto-brown/70 max-w-xl mx-auto">
            Libre magpalista. Libre gamitin. Magbayad lang kung gusto mo ng mas maraming visibility.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>

      {/* Boost Add-ons */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-kanto-brown text-center mb-2">
          Boost Add-ons
        </h2>
        <p className="text-sm text-kanto-gray text-center mb-8">
          Available sa lahat ng plans — kahit Libre!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {boostAddOns.map((addon) => {
            const Icon = addon.icon;
            return (
              <div
                key={addon.name}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-kanto-cream"
              >
                <div className="w-10 h-10 bg-kanto-orange/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-kanto-orange" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-kanto-brown">{addon.name}</p>
                  <p className="text-xs text-kanto-gray">{addon.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-kanto-brown text-center mb-8">
          Mga Madalas Itanong
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-kanto-cream overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-sm text-kanto-brown pr-4">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-kanto-gray shrink-0 transition-transform',
                    openFaq === index && 'rotate-180'
                  )}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-kanto-brown/70 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
