import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '@/data/categories';
import type { BusinessCategory, PaymentMethod, FulfillmentType } from '@/types';
import { cn } from '@/lib/utils';
import {
  Store,
  ChevronRight,
  ChevronLeft,
  Check,
  MapPin,
  Clock,
  CreditCard,
  Truck,
  Sparkles,
} from 'lucide-react';

interface FormData {
  category: BusinessCategory | '';
  name: string;
  owner: string;
  tagline: string;
  description: string;
  address: string;
  barangay: string;
  city: string;
  hours: string;
  paymentMethods: PaymentMethod[];
  fulfillmentTypes: FulfillmentType[];
  gcashNumber: string;
  mayaNumber: string;
}

const INITIAL_FORM: FormData = {
  category: '',
  name: '',
  owner: '',
  tagline: '',
  description: '',
  address: '',
  barangay: '',
  city: '',
  hours: '',
  paymentMethods: [],
  fulfillmentTypes: [],
  gcashNumber: '',
  mayaNumber: '',
};

const paymentOptions: { id: PaymentMethod; label: string; desc: string }[] = [
  { id: 'cash', label: 'Cash', desc: 'Bayad sa kamay' },
  { id: 'gcash', label: 'GCash', desc: 'Digital wallet' },
  { id: 'maya', label: 'Maya', desc: 'Digital wallet' },
];

const fulfillmentOptions: { id: FulfillmentType; label: string; desc: string }[] = [
  { id: 'pickup', label: 'Pickup', desc: 'Kunin sa tindahan' },
  { id: 'self-delivery', label: 'Self Delivery', desc: 'Kami ang magde-deliver' },
  { id: 'message-to-arrange', label: 'Message to Arrange', desc: 'Mag-chat muna' },
  { id: 'service-booking', label: 'Service Booking', desc: 'I-book ang serbisyo' },
  { id: 'junk-collection', label: 'Junk Collection', desc: 'Kukunin namin ang junk' },
];

const ListStorePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [published, setPublished] = useState(false);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const toggleArrayItem = <T,>(arr: T[], item: T): T[] =>
    arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.category) newErrors.category = 'Pumili ng kategorya';
    }

    if (step === 2) {
      if (!form.name.trim()) newErrors.name = 'Kinakailangan ang pangalan ng tindahan';
      if (!form.owner.trim()) newErrors.owner = 'Kinakailangan ang pangalan ng may-ari';
      if (!form.address.trim()) newErrors.address = 'Kinakailangan ang address';
      if (!form.barangay.trim()) newErrors.barangay = 'Kinakailangan ang barangay';
      if (!form.city.trim()) newErrors.city = 'Kinakailangan ang lungsod';
    }

    if (step === 3) {
      if (form.paymentMethods.length === 0) newErrors.paymentMethods = 'Pumili ng kahit isang paraan ng pagbabayad';
      if (form.fulfillmentTypes.length === 0) newErrors.fulfillmentTypes = 'Pumili ng kahit isang paraan ng paghahatid';
      if (form.paymentMethods.includes('gcash') && !form.gcashNumber.trim()) newErrors.gcashNumber = 'Ilagay ang GCash number';
      if (form.paymentMethods.includes('maya') && !form.mayaNumber.trim()) newErrors.mayaNumber = 'Ilagay ang Maya number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, 4));
    }
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handlePublish = () => {
    console.log('Store data:', form);
    setPublished(true);
    setTimeout(() => navigate('/dashboard'), 3000);
  };

  // --- Step Indicator ---
  const StepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-kanto-brown">Hakbang {step} ng 4</span>
        <span className="text-sm text-kanto-gray">{Math.round((step / 4) * 100)}%</span>
      </div>
      <div className="h-2 bg-kanto-gray-light rounded-full overflow-hidden">
        <div
          className="h-full bg-kanto-orange rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>
      <div className="flex justify-between mt-3">
        {['Kategorya', 'Tindahan', 'Bayad & Delivery', 'Review'].map((label, i) => (
          <span
            key={label}
            className={cn(
              'text-xs font-medium transition-colors',
              i + 1 <= step ? 'text-kanto-orange' : 'text-kanto-gray'
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );

  // --- Step 1: Choose Category ---
  const Step1 = () => (
    <div>
      <h2 className="text-2xl font-bold text-kanto-brown mb-2">Pumili ng Kategorya</h2>
      <p className="text-kanto-gray mb-6">Anong uri ng negosyo ang iyong itatayo?</p>
      {errors.category && <p className="text-kanto-red text-sm mb-4">{errors.category}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const isSelected = form.category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => updateField('category', cat.id)}
              className={cn(
                'relative flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-center',
                isSelected
                  ? 'border-kanto-orange bg-orange-50 shadow-md scale-[1.02]'
                  : 'border-kanto-gray-light bg-white hover:border-kanto-orange-light hover:shadow-sm'
              )}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-kanto-orange rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', cat.color)}>
                <Store className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-kanto-brown text-sm">{cat.name}</p>
                <p className="text-xs text-kanto-gray">{cat.nameTagalog}</p>
              </div>
              <span className="text-xs text-kanto-gray">{cat.count} tindahan</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  // --- Step 2: Store Info ---
  const Step2 = () => {
    const fieldClass =
      'w-full px-4 py-3 rounded-xl border border-kanto-gray-light bg-white text-kanto-brown placeholder:text-kanto-gray/60 focus:outline-none focus:ring-2 focus:ring-kanto-orange/40 focus:border-kanto-orange transition';

    return (
      <div>
        <h2 className="text-2xl font-bold text-kanto-brown mb-2">Impormasyon ng Tindahan</h2>
        <p className="text-kanto-gray mb-6">Ilagay ang mga detalye ng iyong negosyo.</p>

        <div className="space-y-5">
          {/* Store Name */}
          <div>
            <label className="block text-sm font-medium text-kanto-brown mb-1.5">
              Pangalan ng Tindahan <span className="text-kanto-red">*</span>
            </label>
            <input
              type="text"
              className={cn(fieldClass, errors.name && 'border-kanto-red')}
              placeholder="hal. Aling Nena's Sari-Sari"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
            />
            {errors.name && <p className="text-kanto-red text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-kanto-brown mb-1.5">
              Pangalan ng May-ari <span className="text-kanto-red">*</span>
            </label>
            <input
              type="text"
              className={cn(fieldClass, errors.owner && 'border-kanto-red')}
              placeholder="hal. Nena Santos"
              value={form.owner}
              onChange={(e) => updateField('owner', e.target.value)}
            />
            {errors.owner && <p className="text-kanto-red text-xs mt-1">{errors.owner}</p>}
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-sm font-medium text-kanto-brown mb-1.5">Tagline</label>
            <input
              type="text"
              className={fieldClass}
              placeholder="hal. Bukas palagi para sa kapitbahay!"
              value={form.tagline}
              onChange={(e) => updateField('tagline', e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-kanto-brown mb-1.5">Paglalarawan</label>
            <textarea
              className={cn(fieldClass, 'resize-none h-24')}
              placeholder="Ilarawan ang iyong tindahan..."
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-kanto-orange mt-8 shrink-0" />
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-kanto-brown mb-1.5">
                  Address <span className="text-kanto-red">*</span>
                </label>
                <input
                  type="text"
                  className={cn(fieldClass, errors.address && 'border-kanto-red')}
                  placeholder="hal. 123 Rizal Street"
                  value={form.address}
                  onChange={(e) => updateField('address', e.target.value)}
                />
                {errors.address && <p className="text-kanto-red text-xs mt-1">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-kanto-brown mb-1.5">
                    Barangay <span className="text-kanto-red">*</span>
                  </label>
                  <input
                    type="text"
                    className={cn(fieldClass, errors.barangay && 'border-kanto-red')}
                    placeholder="hal. Brgy. San Isidro"
                    value={form.barangay}
                    onChange={(e) => updateField('barangay', e.target.value)}
                  />
                  {errors.barangay && <p className="text-kanto-red text-xs mt-1">{errors.barangay}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-kanto-brown mb-1.5">
                    Lungsod / Bayan <span className="text-kanto-red">*</span>
                  </label>
                  <input
                    type="text"
                    className={cn(fieldClass, errors.city && 'border-kanto-red')}
                    placeholder="hal. Quezon City"
                    value={form.city}
                    onChange={(e) => updateField('city', e.target.value)}
                  />
                  {errors.city && <p className="text-kanto-red text-xs mt-1">{errors.city}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-2">
            <Clock className="w-5 h-5 text-kanto-orange mt-8 shrink-0" />
            <div className="flex-1">
              <label className="block text-sm font-medium text-kanto-brown mb-1.5">Oras ng Tindahan</label>
              <input
                type="text"
                className={fieldClass}
                placeholder="hal. 6:00 AM - 9:00 PM, Lunes - Sabado"
                value={form.hours}
                onChange={(e) => updateField('hours', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Step 3: Payment & Fulfillment ---
  const Step3 = () => (
    <div>
      <h2 className="text-2xl font-bold text-kanto-brown mb-2">Pagbabayad at Delivery</h2>
      <p className="text-kanto-gray mb-6">Paano magbabayad at makukuha ng customer ang kanilang orders?</p>

      {/* Payment Methods */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-kanto-orange" />
          <h3 className="font-semibold text-kanto-brown">Paraan ng Pagbabayad</h3>
        </div>
        {errors.paymentMethods && <p className="text-kanto-red text-sm mb-3">{errors.paymentMethods}</p>}
        <div className="space-y-3">
          {paymentOptions.map((opt) => {
            const checked = form.paymentMethods.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => updateField('paymentMethods', toggleArrayItem(form.paymentMethods, opt.id))}
                className={cn(
                  'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left',
                  checked
                    ? 'border-kanto-orange bg-orange-50'
                    : 'border-kanto-gray-light bg-white hover:border-kanto-orange-light'
                )}
              >
                <div
                  className={cn(
                    'w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all shrink-0',
                    checked ? 'bg-kanto-orange border-kanto-orange' : 'border-kanto-gray'
                  )}
                >
                  {checked && <Check className="w-4 h-4 text-white" />}
                </div>
                <div>
                  <p className="font-medium text-kanto-brown">{opt.label}</p>
                  <p className="text-xs text-kanto-gray">{opt.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* GCash Number */}
        {form.paymentMethods.includes('gcash') && (
          <div className="mt-4 ml-10">
            <label className="block text-sm font-medium text-kanto-brown mb-1.5">GCash Number</label>
            <input
              type="tel"
              className={cn(
                'w-full px-4 py-3 rounded-xl border border-kanto-gray-light bg-white text-kanto-brown placeholder:text-kanto-gray/60 focus:outline-none focus:ring-2 focus:ring-kanto-orange/40 focus:border-kanto-orange transition',
                errors.gcashNumber && 'border-kanto-red'
              )}
              placeholder="09XX XXX XXXX"
              value={form.gcashNumber}
              onChange={(e) => updateField('gcashNumber', e.target.value)}
            />
            {errors.gcashNumber && <p className="text-kanto-red text-xs mt-1">{errors.gcashNumber}</p>}
          </div>
        )}

        {/* Maya Number */}
        {form.paymentMethods.includes('maya') && (
          <div className="mt-4 ml-10">
            <label className="block text-sm font-medium text-kanto-brown mb-1.5">Maya Number</label>
            <input
              type="tel"
              className={cn(
                'w-full px-4 py-3 rounded-xl border border-kanto-gray-light bg-white text-kanto-brown placeholder:text-kanto-gray/60 focus:outline-none focus:ring-2 focus:ring-kanto-orange/40 focus:border-kanto-orange transition',
                errors.mayaNumber && 'border-kanto-red'
              )}
              placeholder="09XX XXX XXXX"
              value={form.mayaNumber}
              onChange={(e) => updateField('mayaNumber', e.target.value)}
            />
            {errors.mayaNumber && <p className="text-kanto-red text-xs mt-1">{errors.mayaNumber}</p>}
          </div>
        )}
      </div>

      {/* Fulfillment Types */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Truck className="w-5 h-5 text-kanto-orange" />
          <h3 className="font-semibold text-kanto-brown">Paraan ng Paghahatid</h3>
        </div>
        {errors.fulfillmentTypes && <p className="text-kanto-red text-sm mb-3">{errors.fulfillmentTypes}</p>}
        <div className="space-y-3">
          {fulfillmentOptions.map((opt) => {
            const checked = form.fulfillmentTypes.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => updateField('fulfillmentTypes', toggleArrayItem(form.fulfillmentTypes, opt.id))}
                className={cn(
                  'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left',
                  checked
                    ? 'border-kanto-orange bg-orange-50'
                    : 'border-kanto-gray-light bg-white hover:border-kanto-orange-light'
                )}
              >
                <div
                  className={cn(
                    'w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all shrink-0',
                    checked ? 'bg-kanto-orange border-kanto-orange' : 'border-kanto-gray'
                  )}
                >
                  {checked && <Check className="w-4 h-4 text-white" />}
                </div>
                <div>
                  <p className="font-medium text-kanto-brown">{opt.label}</p>
                  <p className="text-xs text-kanto-gray">{opt.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // --- Step 4: Review ---
  const Step4 = () => {
    const selectedCategory = categories.find((c) => c.id === form.category);

    return (
      <div>
        <h2 className="text-2xl font-bold text-kanto-brown mb-2">Review & Publish</h2>
        <p className="text-kanto-gray mb-6">Suriin ang lahat ng detalye bago i-publish ang iyong tindahan.</p>

        <div className="space-y-6">
          {/* Category */}
          <div className="p-5 bg-white rounded-2xl border border-kanto-gray-light">
            <h3 className="text-xs font-semibold text-kanto-gray uppercase tracking-wider mb-2">Kategorya</h3>
            <p className="text-kanto-brown font-medium">{selectedCategory?.name} ({selectedCategory?.nameTagalog})</p>
          </div>

          {/* Store Details */}
          <div className="p-5 bg-white rounded-2xl border border-kanto-gray-light">
            <h3 className="text-xs font-semibold text-kanto-gray uppercase tracking-wider mb-3">Detalye ng Tindahan</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-kanto-gray">Pangalan</span>
                <span className="text-sm font-medium text-kanto-brown">{form.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-kanto-gray">May-ari</span>
                <span className="text-sm font-medium text-kanto-brown">{form.owner}</span>
              </div>
              {form.tagline && (
                <div className="flex justify-between">
                  <span className="text-sm text-kanto-gray">Tagline</span>
                  <span className="text-sm font-medium text-kanto-brown">{form.tagline}</span>
                </div>
              )}
              {form.description && (
                <div>
                  <span className="text-sm text-kanto-gray">Paglalarawan</span>
                  <p className="text-sm text-kanto-brown mt-1">{form.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="p-5 bg-white rounded-2xl border border-kanto-gray-light">
            <h3 className="text-xs font-semibold text-kanto-gray uppercase tracking-wider mb-3">Lokasyon</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-kanto-orange mt-0.5 shrink-0" />
              <p className="text-sm text-kanto-brown">{form.address}, {form.barangay}, {form.city}</p>
            </div>
            {form.hours && (
              <div className="flex items-start gap-2 mt-2">
                <Clock className="w-4 h-4 text-kanto-orange mt-0.5 shrink-0" />
                <p className="text-sm text-kanto-brown">{form.hours}</p>
              </div>
            )}
          </div>

          {/* Payment & Fulfillment */}
          <div className="p-5 bg-white rounded-2xl border border-kanto-gray-light">
            <h3 className="text-xs font-semibold text-kanto-gray uppercase tracking-wider mb-3">Pagbabayad at Delivery</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {form.paymentMethods.map((m) => (
                <span key={m} className="px-3 py-1 bg-orange-50 text-kanto-orange rounded-full text-xs font-medium capitalize">
                  {m}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {form.fulfillmentTypes.map((f) => (
                <span key={f} className="px-3 py-1 bg-teal-50 text-kanto-teal rounded-full text-xs font-medium">
                  {f.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Published Success ---
  if (published) {
    return (
      <div className="min-h-screen bg-kanto-cream flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-kanto-orange rounded-full flex items-center justify-center mx-auto animate-bounce">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            {/* Confetti-style dots */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-ping"
                  style={{
                    backgroundColor: ['#E85D2C', '#F5A623', '#0D7377', '#27AE60', '#FF7A4D', '#FFD166'][i % 6],
                    top: `${20 + Math.sin(i * 30 * (Math.PI / 180)) * 40}%`,
                    left: `${50 + Math.cos(i * 30 * (Math.PI / 180)) * 40}%`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '1.5s',
                  }}
                />
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-kanto-brown mb-3">Congratulations!</h1>
          <p className="text-kanto-gray mb-2">
            Ang <span className="font-semibold text-kanto-orange">{form.name}</span> ay live na sa Kanto!
          </p>
          <p className="text-sm text-kanto-gray">Ire-redirect ka sa dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kanto-cream">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-kanto-orange rounded-xl flex items-center justify-center">
            <Store className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-kanto-brown">I-list ang Tindahan Mo</h1>
            <p className="text-xs text-kanto-gray">Libre lang mag-sign up sa Kanto Marketplace</p>
          </div>
        </div>

        <StepIndicator />

        {/* Step Content */}
        <div className="mb-8">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-kanto-gray-light">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-kanto-brown hover:text-kanto-orange transition-colors rounded-xl hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4" />
              Bumalik
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-kanto-orange text-white text-sm font-semibold rounded-xl hover:bg-kanto-orange-dark transition-colors shadow-sm hover:shadow-md"
            >
              Susunod
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePublish}
              className="flex items-center gap-2 px-6 py-3 bg-kanto-orange text-white text-sm font-semibold rounded-xl hover:bg-kanto-orange-dark transition-colors shadow-sm hover:shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              I-publish ang Tindahan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListStorePage;
