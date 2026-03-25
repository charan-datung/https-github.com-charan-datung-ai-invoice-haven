import { Search, Heart, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HookCard {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  tagline: string;
  description: string;
}

const hooks: HookCard[] = [
  {
    icon: Search,
    iconBg: 'bg-[#E85D2C]/10 text-[#E85D2C]',
    title: 'Discover Hidden Gems',
    tagline: 'Ang daming hindi mo pa nakikita sa inyong barangay',
    description:
      'Hundreds of neighborhood stores are within walking distance — sari-sari, carinderia, home cooks, and more. Kanto maps them all so you never miss one.',
  },
  {
    icon: Heart,
    iconBg: 'bg-[#0D7377]/10 text-[#0D7377]',
    title: 'Support Your Kapitbahay',
    tagline: 'Bawat pisong gastusin mo, nananatili sa inyong komunidad',
    description:
      'When you buy from your neighbor, every peso stays local. You keep families thriving and communities strong — one order at a time.',
  },
  {
    icon: Zap,
    iconBg: 'bg-[#F5A623]/10 text-[#F5A623]',
    title: 'Catch Deals Now',
    tagline: 'May sobrang adobo si Aling Rosa. Ngayon lang.',
    description:
      'Real-time, time-limited deals from real people. Leftover stock, extra servings, flash discounts — gone when they\'re gone.',
  },
];

const EmotionalHooks = () => {
  return (
    <section className="bg-[#FFF8F0] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-[#2D1B0E] sm:text-4xl">
          Bakit Kanto?
        </h2>
        <p className="mt-2 text-center text-[#2D1B0E]/60">Why Kanto?</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hooks.map((hook) => (
            <div
              key={hook.title}
              className={cn(
                'rounded-xl bg-white p-8 shadow-sm',
                'transition-shadow hover:shadow-md'
              )}
            >
              <div
                className={cn(
                  'inline-flex h-14 w-14 items-center justify-center rounded-full',
                  hook.iconBg
                )}
              >
                <hook.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#2D1B0E]">
                {hook.title}
              </h3>

              <p className="mt-2 text-sm italic text-[#E85D2C]">
                {hook.tagline}
              </p>

              <p className="mt-3 leading-relaxed text-[#2D1B0E]/70">
                {hook.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalHooks;
