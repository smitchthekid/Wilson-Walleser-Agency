import React, { useState, useEffect, useCallback } from 'react';
import { Listing, BookingFormData, GuestInfo } from '../types';

interface BookingFormProps {
  listing: Listing;
}

const BookingForm: React.FC<BookingFormProps> = ({ listing }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    addressStreet: '',
    addressApt: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    adults: 1,
    children: 0,
    additionalGuests: []
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Handle number of guests changes and update additional guest fields array
  useEffect(() => {
    const totalGuests = Math.max(1, formData.adults + formData.children);
    const requiredAdditionalGuests = Math.max(0, totalGuests - 1);

    setFormData(prev => {
      const currentAdditional = [...prev.additionalGuests];
      
      if (currentAdditional.length < requiredAdditionalGuests) {
        // Add needed fields
        const needed = requiredAdditionalGuests - currentAdditional.length;
        for (let i = 0; i < needed; i++) {
          currentAdditional.push({ firstName: '', lastName: '', age: 0 });
        }
      } else if (currentAdditional.length > requiredAdditionalGuests) {
        // Remove excess fields
        currentAdditional.splice(requiredAdditionalGuests);
      }
      
      return {
        ...prev,
        additionalGuests: currentAdditional
      };
    });
  }, [formData.adults, formData.children]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Math.max(0, parseInt(value) || 0);
    setFormData(prev => ({ ...prev, [name]: numValue }));
  };

  const handleGuestChange = (index: number, field: keyof GuestInfo, value: string | number) => {
    setFormData(prev => {
      const updatedGuests = [...prev.additionalGuests];
      updatedGuests[index] = { ...updatedGuests[index], [field]: value };
      return { ...prev, additionalGuests: updatedGuests };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API delay
    setTimeout(() => {
      console.log('Form Data to be sent to GAS:', {
        listingId: listing.id,
        listingName: listing.name,
        ...formData
      });
      setStatus('success');
      // In a real app, you'd perform the fetch() here to your Google Apps Script URL
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-neutral-900 border border-green-800 p-8 rounded-lg text-center shadow-2xl">
        <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-white mb-2">Request Sent!</h3>
        <p className="text-neutral-400 mb-6">
          We have received your reservation request for <span className="text-yellow-500">{listing.name}</span>. 
          We'll be in touch shortly to confirm details.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-yellow-500 hover:text-yellow-400 underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClasses = "w-full p-3 rounded bg-gray-100 text-black border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition-all placeholder:text-gray-500";
  const labelClasses = "block text-sm font-medium text-neutral-400 mb-1 uppercase tracking-wide";

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-2xl sticky top-24">
      <div className="mb-6 pb-6 border-b border-neutral-800">
        <h3 className="text-2xl font-serif text-white mb-1">Book Your Stay</h3>
        <p className="text-yellow-600 font-medium">${listing.price_per_night} <span className="text-neutral-500 text-sm font-normal">/ night</span></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-serif text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Contact Details
          </h4>
          
          <div>
            <label className={labelClasses} htmlFor="fullName">Full Name</label>
            <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClasses} htmlFor="email">Email</label>
              <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" />
            </div>
            <div>
              <label className={labelClasses} htmlFor="phone">Phone</label>
              <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="(555) 123-4567" />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4">
           <h4 className="text-lg font-serif text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Mailing Address
          </h4>
           <div className="grid grid-cols-1 gap-4">
            <div>
              <label className={labelClasses} htmlFor="addressStreet">Street Address</label>
              <input required type="text" id="addressStreet" name="addressStreet" value={formData.addressStreet} onChange={handleChange} className={inputClasses} />
            </div>
             <div className="grid grid-cols-2 gap-4">
               <div>
                <label className={labelClasses} htmlFor="addressApt">Apt/Unit <span className="text-neutral-600 normal-case">(Optional)</span></label>
                <input type="text" id="addressApt" name="addressApt" value={formData.addressApt} onChange={handleChange} className={inputClasses} />
              </div>
               <div>
                <label className={labelClasses} htmlFor="addressCity">City</label>
                <input required type="text" id="addressCity" name="addressCity" value={formData.addressCity} onChange={handleChange} className={inputClasses} />
              </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div>
                <label className={labelClasses} htmlFor="addressState">State</label>
                <input required type="text" id="addressState" name="addressState" value={formData.addressState} onChange={handleChange} className={inputClasses} />
              </div>
               <div>
                <label className={labelClasses} htmlFor="addressZip">Zip Code</label>
                <input required type="text" id="addressZip" name="addressZip" value={formData.addressZip} onChange={handleChange} className={inputClasses} />
              </div>
             </div>
           </div>
        </div>

        {/* Guest Counts */}
        <div className="space-y-4 pt-4 border-t border-neutral-800">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClasses} htmlFor="adults">Adults</label>
              <input required type="number" min="1" max={listing.max_guests} id="adults" name="adults" value={formData.adults} onChange={handleNumberChange} className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="children">Children</label>
              <input required type="number" min="0" max={listing.max_guests} id="children" name="children" value={formData.children} onChange={handleNumberChange} className={inputClasses} />
            </div>
          </div>
          <p className="text-xs text-neutral-500 text-right">Max guests: {listing.max_guests}</p>
        </div>

        {/* Dynamic Guest Fields */}
        {formData.additionalGuests.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-neutral-800 animate-fade-in">
             <div className="bg-yellow-900/20 border border-yellow-900/30 p-4 rounded mb-4">
              <p className="text-yellow-200 text-sm">
                Since you are booking for a group, please provide details for your additional guests so we can accommodate everyone comfortably.
              </p>
             </div>
            {formData.additionalGuests.map((guest, idx) => (
              <div key={idx} className="bg-neutral-800/50 p-4 rounded border border-neutral-700">
                <h5 className="text-white font-medium mb-3 text-sm">Guest #{idx + 2}</h5>
                <div className="grid grid-cols-1 gap-3">
                   <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-neutral-400 mb-1 block">First Name</label>
                        <input required type="text" value={guest.firstName} onChange={(e) => handleGuestChange(idx, 'firstName', e.target.value)} className={inputClasses} />
                      </div>
                      <div>
                        <label className="text-xs text-neutral-400 mb-1 block">Last Name</label>
                        <input required type="text" value={guest.lastName} onChange={(e) => handleGuestChange(idx, 'lastName', e.target.value)} className={inputClasses} />
                      </div>
                   </div>
                   <div>
                      <label className="text-xs text-neutral-400 mb-1 block">Age</label>
                      <input required type="number" min="0" max="120" value={guest.age || ''} onChange={(e) => handleGuestChange(idx, 'age', parseInt(e.target.value) || 0)} className={inputClasses} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`w-full py-4 px-6 rounded font-bold uppercase tracking-wider transition-all transform active:scale-95 ${
            status === 'submitting' 
              ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed' 
              : 'bg-yellow-600 hover:bg-yellow-500 text-black hover:shadow-[0_0_20px_rgba(202,138,4,0.3)]'
          }`}
        >
          {status === 'submitting' ? 'Processing...' : 'Request Reservation'}
        </button>
        
        <p className="text-center text-xs text-neutral-600 mt-4">
          This form sends a reservation request. No payment is processed immediately.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;