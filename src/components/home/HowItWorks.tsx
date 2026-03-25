import {
  Search,
  MapPin,
  ShoppingBag,
  Store,
  ClipboardList,
  PackageCheck,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const buyerSteps: Step[] = [
  {
    number: 1,
    icon: Search,
    title: 'Maghanap',
    description: 'Find stores near your kanto',
  },
  {
    number: 2,
    icon: MapPin,
    title: 'Tumuklas',
    description: 'Browse products, menus, and live deals',
  },
  {
    number: 3,
    icon: ShoppingBag,
    title: 'Sumuporta',
    description: 'Order and pick up from your neighbor',
  },
];

const merchantSteps: Step[] = [
  {
    number: 1,
    icon: Store,
    title: 'List Your Store',
    description: 'Create your free digital storefront in minutes',
  },
  {
    number: 2,
    icon: ClipboardList,
    title: 'Post Availability',
    description: 'Share what you have today — products, menus, or deals',
  },
  {
    number: 3,
    icon: PackageCheck,
    title: 'Get Orders',
    description: 'Receive orders and serve your community',
  },
];

const StepRow = ({
  steps,
  accentColor,
}: {
  steps: Step[];
  accentColor: string;
}) => (
  <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-0">
    {steps.map((step, idx) => (
      <div key={step.number} className="flex items-center">
        <div className="flex flex-col items-center text-center">
          <div
            className={cn(
              'relative flex h-16 w-16 items-center justify-center rounded-full',
              accentColor
            )}
          >
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2D1B0E] text-xs font-bold text-white">
              {step.number}
            </span>
            <step.icon className="h-7 w-7" />
          </div>
          <h4 className="mt-4 text-lg font-bold text-[#2D1B0E]">
            {step.title}
          </h4>
          <p className="mt-1 max-w-[200px] text-sm text-[#2D1B0E]/70">
            {step.description}
          </p>
        </div>

        {idx < steps.length - 1 && (
          <ChevronRight className="mx-4 hidden h-6 w-6 flex-shrink-0 text-[#2D1B0E]/30 sm:block" />
        )}
      </div>
    ))}
  </div>
);

const HowItWorks = () => {
  return (
    <section className="bg-[#FFF8F0] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-[#2D1B0E] sm:text-4xl">
          Paano Gumagana ang Kanto?
        </h2>
        <p className="mt-2 text-[#2D1B0E]/60">How Does Kanto Work?</p>

        {/* For Buyers */}
        <div className="mt-14">
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-[#0D7377]">
            For Buyers
          </h3>
          <div className="flex justify-center">
            <StepRow
              steps={buyerSteps}
              accentColor="bg-[#0D7377]/10 text-[#0D7377]"
            />
          </div>
        </div>

        {/* For Merchants */}
        <div className="mt-16">
          <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-[#E85D2C]">
            For Merchants
          </h3>
          <div className="flex justify-center">
            <StepRow
              steps={merchantSteps}
              accentColor="bg-[#E85D2C]/10 text-[#E85D2C]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
