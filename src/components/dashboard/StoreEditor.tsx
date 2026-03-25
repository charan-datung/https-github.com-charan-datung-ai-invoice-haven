import { useState } from 'react';
import { Save } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BusinessCategory, PaymentMethod, FulfillmentType } from '@/types';

const categoryOptions: { value: BusinessCategory; label: string }[] = [
  { value: 'sari-sari', label: 'Sari-Sari Store' },
  { value: 'carinderia', label: 'Carinderia' },
  { value: 'wet-market', label: 'Wet Market' },
  { value: 'junk-shop', label: 'Junk Shop' },
  { value: 'services', label: 'Services' },
  { value: 'home-based', label: 'Home-Based Food' },
];

const paymentOptions: { value: PaymentMethod; label: string }[] = [
  { value: 'cash', label: 'Cash' },
  { value: 'gcash', label: 'GCash' },
  { value: 'maya', label: 'Maya' },
];

const fulfillmentOptions: { value: FulfillmentType; label: string }[] = [
  { value: 'pickup', label: 'Pickup' },
  { value: 'self-delivery', label: 'Self-Delivery' },
  { value: 'message-to-arrange', label: 'Message to Arrange' },
  { value: 'service-booking', label: 'Service Booking' },
  { value: 'junk-collection', label: 'Junk Collection' },
];

const inputClasses =
  'w-full px-4 py-2.5 bg-white border border-kanto-cream rounded-lg text-sm text-kanto-brown placeholder:text-kanto-gray/50 focus:outline-none focus:ring-2 focus:ring-kanto-orange/30 focus:border-kanto-orange transition-colors';

const labelClasses = 'block text-sm font-semibold text-kanto-brown mb-1.5';

const StoreEditor = () => {
  const [storeName, setStoreName] = useState('');
  const [category, setCategory] = useState<BusinessCategory>('sari-sari');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [address, setAddress] = useState('');
  const [barangay, setBarangay] = useState('');
  const [city, setCity] = useState('');
  const [openTime, setOpenTime] = useState('06:00');
  const [closeTime, setCloseTime] = useState('18:00');
  const [payments, setPayments] = useState<PaymentMethod[]>(['cash']);
  const [fulfillment, setFulfillment] = useState<FulfillmentType[]>(['pickup']);

  const togglePayment = (method: PaymentMethod) => {
    setPayments((prev) =>
      prev.includes(method) ? prev.filter((p) => p !== method) : [...prev, method]
    );
  };

  const toggleFulfillment = (type: FulfillmentType) => {
    setFulfillment((prev) =>
      prev.includes(type) ? prev.filter((f) => f !== type) : [...prev, type]
    );
  };

  const handleSave = () => {
    // Placeholder save logic
    console.log('Store saved:', {
      storeName,
      category,
      tagline,
      description,
      ownerName,
      address,
      barangay,
      city,
      hours: { open: openTime, close: closeTime },
      payments,
      fulfillment,
    });
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-bold text-kanto-brown mb-6">Store Profile</h2>

      <div className="space-y-5">
        {/* Store Name */}
        <div>
          <label className={labelClasses}>Store Name</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="e.g. Aling Nena's Sari-Sari"
            className={inputClasses}
          />
        </div>

        {/* Category */}
        <div>
          <label className={labelClasses}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as BusinessCategory)}
            className={inputClasses}
          >
            {categoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Tagline */}
        <div>
          <label className={labelClasses}>Tagline</label>
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="e.g. Mura na, masarap pa!"
            className={inputClasses}
          />
        </div>

        {/* Description */}
        <div>
          <label className={labelClasses}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your store, what you sell, and what makes you special..."
            rows={4}
            className={cn(inputClasses, 'resize-none')}
          />
        </div>

        {/* Owner Name */}
        <div>
          <label className={labelClasses}>Owner Name</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="e.g. Nena Santos"
            className={inputClasses}
          />
        </div>

        {/* Address */}
        <div>
          <label className={labelClasses}>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. 143 Dagupan St."
            className={inputClasses}
          />
        </div>

        {/* Barangay & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Barangay</label>
            <input
              type="text"
              value={barangay}
              onChange={(e) => setBarangay(e.target.value)}
              placeholder="e.g. Tondo"
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Manila"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Hours */}
        <div>
          <label className={labelClasses}>Store Hours</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-kanto-gray mb-1 block">Open</span>
              <input
                type="time"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div>
              <span className="text-xs text-kanto-gray mb-1 block">Close</span>
              <input
                type="time"
                value={closeTime}
                onChange={(e) => setCloseTime(e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <label className={labelClasses}>Payment Methods</label>
          <div className="flex flex-wrap gap-3">
            {paymentOptions.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 border rounded-lg cursor-pointer text-sm transition-colors',
                  payments.includes(opt.value)
                    ? 'border-kanto-orange bg-kanto-orange/5 text-kanto-orange font-medium'
                    : 'border-kanto-cream text-kanto-brown/60 hover:border-kanto-gray'
                )}
              >
                <input
                  type="checkbox"
                  checked={payments.includes(opt.value)}
                  onChange={() => togglePayment(opt.value)}
                  className="sr-only"
                />
                <div
                  className={cn(
                    'w-4 h-4 rounded border-2 flex items-center justify-center transition-colors',
                    payments.includes(opt.value)
                      ? 'border-kanto-orange bg-kanto-orange'
                      : 'border-kanto-gray/40'
                  )}
                >
                  {payments.includes(opt.value) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Fulfillment Types */}
        <div>
          <label className={labelClasses}>Fulfillment Types</label>
          <div className="flex flex-wrap gap-3">
            {fulfillmentOptions.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 border rounded-lg cursor-pointer text-sm transition-colors',
                  fulfillment.includes(opt.value)
                    ? 'border-kanto-orange bg-kanto-orange/5 text-kanto-orange font-medium'
                    : 'border-kanto-cream text-kanto-brown/60 hover:border-kanto-gray'
                )}
              >
                <input
                  type="checkbox"
                  checked={fulfillment.includes(opt.value)}
                  onChange={() => toggleFulfillment(opt.value)}
                  className="sr-only"
                />
                <div
                  className={cn(
                    'w-4 h-4 rounded border-2 flex items-center justify-center transition-colors',
                    fulfillment.includes(opt.value)
                      ? 'border-kanto-orange bg-kanto-orange'
                      : 'border-kanto-gray/40'
                  )}
                >
                  {fulfillment.includes(opt.value) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-3 bg-kanto-orange text-white font-semibold rounded-lg hover:bg-kanto-orange/90 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreEditor;
