import React, { useState } from 'react';
import { ChevronDown, Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, HelpCircle } from 'lucide-react';

export const FaqAndContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Mannargudi',
    service: 'Personal Loan',
    amount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const faqs = [
    {
      q: 'What basic documents do I need to apply for a loan?',
      a: 'We keep documentation minimal: (1) Identity Proof (Aadhaar Card or Voter ID), (2) PAN Card, (3) Recent 3-6 months bank statement or passbook copy, and (4) Address proof. For Two-Wheeler Refinance, your vehicle RC book and insurance copy are required. For Magalir SHG, group resolution and member KYC are sufficient.'
    },
    {
      q: 'How quickly is the loan sanctioned and credited?',
      a: 'Upon digital verification of your documents, approval is granted in under 4 hours, and the funds are disbursed directly via NEFT/IMPS to your bank account within 24 to 48 hours.'
    },
    {
      q: 'What is a "Kulu Loan (Magalir SHG)" and how can our group qualify?',
      a: 'A Kulu Loan is tailored for registered women Self-Help Groups (Magalir Suyauthavi Kulu) comprising 10-20 members. It provides collective, collateral-free credit for tailoring, cattle rearing, organic trading, and micro-enterprises at concessional interest rates with peer support.'
    },
    {
      q: 'How does the Two Wheeler Refinance facility work?',
      a: 'If you already own a motorcycle or scooter with clear registration, you can unlock up to 75-85% of its current market value in liquid cash without selling or handing over your vehicle. You continue riding your bike while repaying comfortable monthly EMIs.'
    },
    {
      q: 'Are there any hidden fees or pre-payment penalties?',
      a: 'Absolutely none. We believe in complete transparency. All interest rates, processing fees (if applicable), and tenure schedules are explicitly documented upfront before loan agreement signing. You can foreclose or prepay anytime without exorbitant penalty fees.'
    },
    {
      q: 'Can small retail vendors apply for Daily or Weekly finance?',
      a: 'Yes! Our Daily & Micro Finance program is created specifically for grocery stores, tea stalls, textile vendors, and vegetable merchants. Our relationship officer collects daily or weekly installments directly at your shop with instant digital SMS receipts.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F7FF] relative overflow-hidden border-t border-[#E8E3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E3FF] text-[#292078] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#7161E9]" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171746] tracking-tight mb-4">
            Mannargudi Loan FAQs & Contact Natchathra Finance
          </h2>
          <p className="text-base sm:text-lg text-[#171746]/70 leading-relaxed">
            Contact Natchathra Finance in Mannargudi, Tamil Nadu for information about loan options, eligibility, documents and repayment. Visit our office at Fathima Complex, Vanakara Street, Mannargudi – 614001.
          </p>
        </div>

        {/* 2-Column Grid: FAQs on Left, Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-[#171746] mb-4">
              Loan Questions Answered
            </h3>

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E8E3FF] bg-white overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#171746] hover:text-[#7161E9] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7161E9] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#171746]/75 leading-relaxed border-t border-[#F8F7FF] animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Contact Box */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#171746] to-[#292078] rounded-3xl text-white shadow-lg space-y-4">
              <h4 className="text-base font-bold text-white">Need Immediate Help?</h4>
              <p className="text-xs text-[#E8E3FF] leading-relaxed">
                Contact our Mannargudi team Monday to Saturday for assistance in Tamil or English.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+917010354426"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#171746] rounded-xl text-xs font-semibold hover:bg-[#E8E3FF] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7161E9]" />
                  <span>Call: +91 70103 54426</span>
                </a>
                <a
                  href="https://wa.me/917010354426?text=Hello%20Natchathra%20Finance,%20I%20would%20like%20to%20know%20more%20about%20loans"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#52C9B0] text-[#171746] rounded-xl text-xs font-semibold hover:bg-[#43b59d] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Consultation Form Column */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E8E3FF] p-6 sm:p-10 shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-[#171746] tracking-tight">
                Request a Free Call Back
              </h3>
              <p className="text-xs sm:text-sm text-[#171746]/70 mt-1">
                Enter your details below and a loan relationship manager will call you within 2 business hours.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center bg-[#F8F7FF] rounded-2xl border border-[#C6B9FF] space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 bg-[#52C9B0]/20 rounded-full flex items-center justify-center mx-auto text-[#52C9B0]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold text-[#171746]">Application Received!</h4>
                <p className="text-xs sm:text-sm text-[#171746]/75 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#171746]">{formData.name}</span>. Our loan specialist will call you at <span className="font-semibold text-[#7161E9]">{formData.phone}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      phone: '',
                      city: 'Mannargudi',
                      service: 'Personal Loan',
                      amount: '',
                      message: ''
                    });
                  }}
                  className="px-5 py-2 text-xs font-semibold text-[#7161E9] bg-white border border-[#C6B9FF] rounded-xl hover:bg-[#E8E3FF]/50 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#171746] mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar / Priya Sundaram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 transition-all"
                  />
                </div>

                {/* Phone & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171746] mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171746] mb-1">
                      Town / District
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 transition-all bg-white"
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
                      <option value="Thanjavur">Thanjavur</option>
                      <option value="Other">Other Tamil Nadu Town</option>
                    </select>
                  </div>
                </div>

                {/* Loan Type & Desired Amount */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171746] mb-1">
                      Loan Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 transition-all bg-white"
                    >
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Two Wheeler Refinance">Two Wheeler Loan / Refinance</option>
                      <option value="Daily Finance">Daily & Micro Finance</option>
                      <option value="Kulu Loan (Magalir SHG)">Kulu Loan (Magalir SHG)</option>
                      <option value="Commercial Business">Commercial Business Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171746] mb-1">
                      Required Amount (₹)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1,00,000"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-semibold text-[#171746] mb-1">
                    Special Notes or Preferred Contact Time
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your purpose or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-[#E8E3FF] focus:border-[#7161E9] focus:outline-none focus:ring-2 focus:ring-[#7161E9]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#7161E9] to-[#292078] hover:from-[#5e4dd3] hover:to-[#1e1759] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-[#7161E9]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Free Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#171746]/50">
                  🔒 Your contact information is strictly confidential. No spam, ever.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
