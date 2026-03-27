import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DualCTA = () => {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {/* For Merchants */}
        <div
          className={cn(
            'rounded-2xl bg-gradient-to-br from-[#E85D2C] to-[#C23A10] p-8 text-white',
            'flex flex-col justify-between sm:p-10'
          )}
        >
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              I-list ang Iyong Negosyo
            </h3>
            <p className="mt-3 leading-relaxed text-white/80">
              Free forever. No monthly fees. Get your digital storefront in 10
              minutes.
            </p>
          </div>
          <Link
            to="/list-store"
            className={cn(
              'mt-8 inline-flex w-fit items-center justify-center rounded-full',
              'bg-white px-7 py-3 font-semibold text-[#E85D2C]',
              'transition-transform hover:scale-105 hover:shadow-lg'
            )}
          >
            Start Listing — It&apos;s Free
          </Link>
        </div>

        {/* For Consumers */}
        <div
          className={cn(
            'rounded-2xl bg-gradient-to-br from-[#0D7377] to-[#095456] p-8 text-white',
            'flex flex-col justify-between sm:p-10'
          )}
        >
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Tuklasin ang Iyong Barangay
            </h3>
            <p className="mt-3 leading-relaxed text-white/80">
              Find the hidden gems, catch live deals, and support your
              community.
            </p>
          </div>
          <Link
            to="/discover"
            className={cn(
              'mt-8 inline-flex w-fit items-center justify-center rounded-full',
              'bg-white px-7 py-3 font-semibold text-[#0D7377]',
              'transition-transform hover:scale-105 hover:shadow-lg'
            )}
          >
            Browse Stores Near Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;
