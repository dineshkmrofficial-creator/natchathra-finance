import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, IndianRupee, Sparkles } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultAmount?: number;
  defaultTenure?: number;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Personal Loan',
  defaultAmount = 200000,
  defaultTenure = 36
}) => {
  const [service, setService] = useState(defaultService);
  const [amount, setAmount] = useState(defaultAmount.toString());
  const [tenure, setTenure] = useState(defaultTenure.toString());
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Mannargudi');
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (defaultService) setService(defaultService);
    if (defaultAmount) setAmount(defaultAmount.toString());
    if (defaultTenure) setTenure(defaultTenure.toString());
  }, [defaultService, defaultAmount, defaultTenure, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsDone(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E8E3FF] overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#171746] to-[#292078] text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#C6B9FF] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#52C9B0]" />
              <span>Natchathra Finance Fast-Track</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight">Apply for Instant Loan</h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isDone ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#52C9B0]/20 text-[#52C9B0] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#171746]">Application Submitted!</h4>
              <p className="text-xs sm:text-sm text-[#171746]/75 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#171746]">{fullName}</span>. Your application for <span className="font-bold text-[#7161E9]">{service}</span> (₹{Number(amount).toLocaleString('en-IN')}) has been registered with reference ID <span className="font-mono font-bold text-[#171746]">NF-{Math.floor(100000 + Math.random() * 900000)}</span>.
              </p>
              <div className="p-4 bg-[#F8F7FF] rounded-2xl border border-[#E8E3FF] text-xs text-[#171746]/70 text-left space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">Assigned Officer:</span>
                  <span className="font-semibold text-[#171746]">Regional RM (Tamil Nadu Desk)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Next Action:</span>
                  <span className="text-[#52C9B0] font-semibold">Verification Call within 2 hrs</span>
                </div>
              </div>
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-[#7161E9] hover:bg-[#5e4dd3] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all cursor-pointer"
              >
                Close & Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#171746] mb-1">
                  Selected Financial Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 font-medium text-[#171746] bg-white"
                >
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Two Wheeler Refinance">Two Wheeler Loan & Refinance</option>
                  <option value="Daily Finance">Daily & Micro Finance</option>
                  <option value="Kulu Loan (Magalir SHG)">Kulu Loan (Magalir SHG)</option>
                  <option value="Commercial Business">Commercial Business Loan</option>
                </select>
              </div>

              {/* Amount and Tenure */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#171746] mb-1">
                    Amount Required (₹)
                  </label>
                  <input
                    type="number"
                    required
                    min={10000}
                    step={5000}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 text-[#171746] font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#171746] mb-1">
                    Tenure (Months)
                  </label>
                  <input
                    type="number"
                    required
                    min={3}
                    max={240}
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 text-[#171746] font-medium"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#171746] mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="As per Aadhaar Card"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 text-[#171746]"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#171746] mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 text-[#171746]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#171746] mb-1">
                    City / Town (Tamil Nadu)
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 text-[#171746] bg-white"
                  >
                    <option value="Mannargudi">Mannargudi</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Salem">Salem</option>
                    <option value="Tiruchirappalli">Tiruchirappalli</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Erode">Erode</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Other">Other District</option>
                  </select>
                </div>
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-xs font-semibold text-[#171746] mb-1">
                  Employment / Business Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Salaried', 'Self-Employed', 'Daily Merchant', 'SHG Member'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setEmploymentType(type)}
                      className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        employmentType === type
                          ? 'border-[#7161E9] bg-[#E8E3FF]/70 text-[#171746] font-semibold'
                          : 'border-[#E8E3FF] text-[#171746]/70 hover:bg-[#F8F7FF]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#7161E9] focus:ring-[#7161E9]"
                />
                <label htmlFor="consent" className="text-[11px] text-[#171746]/70 leading-snug">
                  I authorize Natchathra Finance to contact me via Call or WhatsApp regarding my loan application. Zero spam commitment.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !agreeTerms}
                className="w-full mt-4 py-3.5 px-4 bg-gradient-to-r from-[#7161E9] to-[#292078] hover:from-[#5e4dd3] hover:to-[#1e1759] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit & Check Eligibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
