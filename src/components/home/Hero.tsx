import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-[#E85D2C] via-[#D94A1A] to-[#C23A10]',
        'px-4 py-20 sm:py-28 lg:py-36'
      )}
    >
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ang Marketplace ng Iyong{' '}
          <span className="text-[#F5A623]">Kanto</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Discover, support, and order from the neighborhood businesses you walk
          past every day
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/discover"
            className={cn(
              'inline-flex items-center justify-center rounded-full px-8 py-3.5',
              'bg-white font-semibold text-[#E85D2C] shadow-lg',
              'transition-transform hover:scale-105 hover:shadow-xl'
            )}
          >
            Discover Nearby Stores
          </Link>
          <Link
            to="/list-store"
            className={cn(
              'inline-flex items-center justify-center rounded-full px-8 py-3.5',
              'border-2 border-white font-semibold text-white',
              'transition-transform hover:scale-105 hover:bg-white/10'
            )}
          >
            List Your Store Free
          </Link>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-6 text-sm text-white/70 sm:flex-row sm:gap-10">
          <div>
            <span className="block text-xl font-bold text-white">1.3M+</span>
            Target Businesses
          </div>
          <div className="hidden h-8 w-px bg-white/20 sm:block" />
          <div>
            <span className="block text-xl font-bold text-white">1 store per 98m²</span>
            Density
          </div>
          <div className="hidden h-8 w-px bg-white/20 sm:block" />
          <div>
            <span className="block text-xl font-bold text-white">Zero Capex</span>
            Free to Start
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
