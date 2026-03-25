import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const dealMessages = [
  'May adobo pa si Aling Rosa! 2h natitira',
  'Galunggong sale ₱120/kg kay Aling Puring!',
  'Tapsilog ₱35 lang kay Mang Tony hanggang 9 AM!',
];

const LiveDealsBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dealMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      to="/deals"
      className="block w-full bg-gradient-to-r from-kanto-orange to-kanto-gold px-4 py-2.5 rounded-xl"
    >
      <div className="flex items-center justify-center gap-2 text-white text-sm font-medium">
        <Zap className="w-4 h-4 shrink-0 fill-white" />
        <span className="font-bold">Live Deals</span>
        <span className="mx-1">—</span>
        <span className="truncate">{dealMessages[current]}</span>
      </div>
    </Link>
  );
};

export default LiveDealsBanner;
