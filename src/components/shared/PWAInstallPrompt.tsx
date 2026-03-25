import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      if (Date.now() - dismissedAt < 7 * 24 * 60 * 60 * 1000) return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 md:bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-kanto-orange to-kanto-red text-white rounded-xl p-4 shadow-lg flex items-center gap-3 animate-slide-up">
      <Download className="w-8 h-8 flex-shrink-0" />
      <div className="flex-1">
        <p className="font-bold text-sm">I-install ang Kanto!</p>
        <p className="text-xs opacity-90">Mas mabilis, mas magaan. Parang app sa phone mo.</p>
      </div>
      <button
        onClick={handleInstall}
        className="bg-white text-kanto-orange font-bold px-4 py-2 rounded-lg text-sm whitespace-nowrap hover:bg-orange-50 transition-colors"
      >
        Install
      </button>
      <button onClick={handleDismiss} className="p-1 hover:bg-white/20 rounded-full">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PWAInstallPrompt;
