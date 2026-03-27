import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Phone, ShieldCheck, Store, ShoppingBag } from 'lucide-react';

type UserType = 'customer' | 'merchant';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [userType, setUserType] = useState<UserType>('customer');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendOtp = () => {
    if (phone.length < 10) {
      setError('Ilagay ang tamang phone number');
      return;
    }
    setError('');
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setOtpSent(true);
    }, 1000);
  };

  const handleVerify = () => {
    if (otp === '123456') {
      setError('');
      if (userType === 'merchant') {
        navigate('/list-store');
      } else {
        navigate('/discover');
      }
    } else {
      setError('Mali ang OTP. Subukan ulit. (Hint: 123456)');
    }
  };

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    setPhone(digits);
    setError('');
  };

  return (
    <div className="min-h-screen bg-kanto-cream flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-kanto-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Store className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-kanto-brown">Kanto Marketplace</h1>
          <p className="text-sm text-kanto-gray mt-1">Ang marketplace ng iyong kapitbahay</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-kanto-gray-light p-6 sm:p-8">
          {/* User Type Toggle */}
          <div className="flex bg-kanto-gray-light rounded-xl p-1 mb-6">
            <button
              type="button"
              onClick={() => setUserType('customer')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                userType === 'customer'
                  ? 'bg-white text-kanto-brown shadow-sm'
                  : 'text-kanto-gray hover:text-kanto-brown'
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              Customer ako
            </button>
            <button
              type="button"
              onClick={() => setUserType('merchant')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                userType === 'merchant'
                  ? 'bg-white text-kanto-brown shadow-sm'
                  : 'text-kanto-gray hover:text-kanto-brown'
              )}
            >
              <Store className="w-4 h-4" />
              Merchant ako
            </button>
          </div>

          {/* Phone Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-kanto-brown mb-1.5">Phone Number</label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-3 bg-kanto-gray-light rounded-xl text-sm font-medium text-kanto-brown shrink-0">
                <Phone className="w-4 h-4 text-kanto-orange" />
                +63
              </div>
              <input
                type="tel"
                className="flex-1 px-4 py-3 rounded-xl border border-kanto-gray-light bg-white text-kanto-brown placeholder:text-kanto-gray/60 focus:outline-none focus:ring-2 focus:ring-kanto-orange/40 focus:border-kanto-orange transition"
                placeholder="9XX XXX XXXX"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                disabled={otpSent}
              />
            </div>
          </div>

          {/* OTP Section */}
          {!otpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={sending}
              className={cn(
                'w-full py-3 rounded-xl text-sm font-semibold transition-all',
                sending
                  ? 'bg-kanto-gray-light text-kanto-gray cursor-not-allowed'
                  : 'bg-kanto-orange text-white hover:bg-kanto-orange-dark shadow-sm hover:shadow-md'
              )}
            >
              {sending ? 'Nagpapadala...' : 'Magpadala ng OTP'}
            </button>
          ) : (
            <div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-kanto-brown mb-1.5">
                  OTP Code
                </label>
                <p className="text-xs text-kanto-gray mb-2">Naipadala na ang 6-digit code sa +63{phone}</p>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-kanto-teal shrink-0" />
                  <input
                    type="text"
                    className="flex-1 px-4 py-3 rounded-xl border border-kanto-gray-light bg-white text-kanto-brown text-center text-lg tracking-[0.3em] font-mono placeholder:text-kanto-gray/60 placeholder:tracking-normal placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-kanto-orange/40 focus:border-kanto-orange transition"
                    placeholder="------"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                      setError('');
                    }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleVerify}
                className="w-full py-3 bg-kanto-orange text-white text-sm font-semibold rounded-xl hover:bg-kanto-orange-dark transition-all shadow-sm hover:shadow-md"
              >
                I-verify
              </button>

              <button
                type="button"
                onClick={() => {
                  setOtpSent(false);
                  setOtp('');
                  setError('');
                }}
                className="w-full py-2 mt-3 text-sm text-kanto-gray hover:text-kanto-orange transition-colors"
              >
                Magpadala ulit ng OTP
              </button>
            </div>
          )}

          {/* Error */}
          {error && (
            <p className="mt-4 text-sm text-kanto-red text-center">{error}</p>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-kanto-gray mt-6">
          Sa pag-login, sumasang-ayon ka sa aming Terms of Service at Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
