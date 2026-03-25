import { Link } from 'react-router-dom';
import { MapPinOff } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-kanto-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-kanto-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <MapPinOff className="w-10 h-10 text-kanto-orange" />
        </div>
        <h1 className="text-6xl font-extrabold text-kanto-brown mb-2">404</h1>
        <h2 className="text-2xl font-bold text-kanto-brown mb-3">
          Naliligaw ka yata!
        </h2>
        <p className="text-kanto-brown/60 mb-8 leading-relaxed">
          Mukhang wala sa mapa ang hinahanap mo. Baka mali ang address, o inalis na ang page na ito.
          Huwag mag-alala — ibabalik ka namin sa kanto.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-kanto-orange text-white font-semibold rounded-lg hover:bg-kanto-orange/90 transition-colors"
        >
          Bumalik sa Kanto
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
