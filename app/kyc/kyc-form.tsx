
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export interface KYCFormData {
  firstName: string;
  lastName: string;
  dob: string;
  nationality: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  documentFile: File | null;
}

const steps = [
  'Personal Info',
  'Documents',
  'Biometric',
  'Review',
];

const initialForm: KYCFormData = {
  firstName: '',
  lastName: '',
  dob: '',
  nationality: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  documentFile: null,
};

const KYCForm: React.FC<{ onSubmit: (data: KYCFormData) => void; submitting: boolean }> = ({ onSubmit, submitting }) => {
  const [form, setForm] = useState<KYCFormData>(initialForm);
  const [step, setStep] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      nextStep();
    } else {
      onSubmit(form);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8faf7] flex flex-col items-center pt-8 pb-16">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow p-8 mt-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">Identity Verification</span>
          </h2>
          <p className="mb-6 text-muted-foreground">Complete your KYC verification to access secure services</p>
          {/* Progress Bar */}
          <div className="flex items-center mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${i <= step ? 'bg-green-600' : 'bg-gray-300'}`}>{i + 1}</div>
                {i < steps.length - 1 && <div className={`flex-1 h-1 ${i < step ? 'bg-green-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">First Name *</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className="input w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Last Name *</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className="input w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Date of Birth *</label>
                  <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="input w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Nationality</label>
                  <select name="nationality" value={form.nationality} onChange={handleChange} className="input w-full">
                    <option value="">Select nationality</option>
                    <option value="Indian">Indian</option>
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="input w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="input w-full" />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">Address *</label>
                  <textarea name="address" value={form.address} onChange={handleChange} required className="input w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">City</label>
                  <input type="text" name="city" value={form.city} onChange={handleChange} className="input w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Postal Code</label>
                  <input type="text" name="postalCode" value={form.postalCode} onChange={handleChange} className="input w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Country</label>
                  <select name="country" value={form.country} onChange={handleChange} className="input w-full">
                    <option value="">Select country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Upload Document *</label>
                  <input type="file" name="documentFile" accept="image/*,application/pdf" onChange={handleChange} required className="input w-full" />
                  <p className="text-xs text-muted-foreground mt-1">Accepted: Passport, Driver's License, National ID, Aadhaar Card</p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Biometric Verification</label>
                  <p className="text-muted-foreground">(Facial recognition scan coming soon...)</p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-semibold">Review & Submit</h3>
                <pre className="bg-gray-100 rounded p-4 text-xs overflow-x-auto">{JSON.stringify(form, null, 2)}</pre>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button type="button" onClick={prevStep} disabled={step === 0} className="btn btn-outline">
                Previous
              </button>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {step === steps.length - 1 ? (submitting ? 'Submitting...' : 'Submit KYC') : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default KYCForm;
