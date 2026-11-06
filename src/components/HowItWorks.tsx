import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileCheck, PhoneCall, Check, Sparkles, Clock } from 'lucide-react';

interface HowItWorksProps {
  onOpenApply: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenApply }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      badgeText: '01',
      title: 'Submit Basic Application',
      tamilSubtitle: 'விண்ணப்பம் சமர்ப்பித்தல்',
      image: '/assets/clean/step_01.png',
      fallbackImage: '/assets/aistudio/file_0000000073b88207b2564d01b9d29493_118e0d99.png',
      duration: '5 Minutes',
      description: 'Fill our simple online form or call our advisor with your basic requirement and contact details. No preliminary fee or commitment required.',
      details: [
        'Select your loan category and required amount',
        'Provide basic KYC details (Aadhaar / Phone)',
        'Receive instant preliminary eligibility check'
      ]
    },
    {
      num: 2,
      badgeText: '02',
      title: 'Consultation & Custom Plan',
      tamilSubtitle: 'வழிகாட்டுதல் & ஆலோசனை',
      image: '/assets/clean/step_02.png',
      fallbackImage: '/assets/aistudio/file_00000000ddb082078664501def876259_fea29ce7.png',
      duration: 'Within 2 Hours',
      description: 'Our dedicated relationship manager connects with you in Tamil or English to discuss the most affordable tenure and EMI schedule for your income.',
      details: [
        'Personalized consultation for lowest EMI',
        'Guidance on government subsidy for SHGs',
        'Transparent explanation of all terms'
      ]
    },
    {
      num: 3,
      badgeText: '03',
      title: 'Quick Verification & Review',
      tamilSubtitle: 'விரைவான ஆவண சரிபார்ப்பு',
      image: '/assets/clean/step_03.png',
      fallbackImage: '/assets/aistudio/file_00000000710c8211890e90f20a7f60d8_a0c85e97.png',
      duration: 'Same Day',
      description: 'Quick digital review of identity and address proof. For two-wheelers, RC verification; for SHGs, group leader verification at your local center.',
      details: [
        'Doorstep document collection if needed',
        'Fast digital verification within hours',
        'Fair credit evaluation without prejudice'
      ]
    },
    {
      num: 4,
      badgeText: '04',
      title: 'Instant Approval & Disbursal',
      tamilSubtitle: 'உடனடி நிதி வழங்கல்',
      image: '/assets/clean/step_04.png',
      fallbackImage: '/assets/aistudio/file_00000000421482118458eb7578f35e90_fc1f2bf7.png',
      duration: '24-48 Hours',
      description: 'Once approved, the sanctioned amount is credited directly to your bank account with immediate SMS and official digital agreement copy.',
      details: [
        'Direct NEFT/RTGS bank transfer',
        'Digital receipt & repayment schedule card',
        '24/7 customer assistance for ongoing service'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8F7FF] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E8E3FF]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E3FF] text-[#292078] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7161E9]" />
            <span>How to Enquire About a Loan in Mannargudi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171746] tracking-tight mb-4">
            How It Works: Simple, Transparent, Fast
          </h2>
          <p className="text-base sm:text-lg text-[#171746]/70 leading-relaxed">
            We removed the tedious red tape so you can focus on building your home, business, or community goals.
          </p>
        </div>

        {/* 4 Steps Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const isSelected = activeStep === step.num;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white shadow-xl shadow-[#7161E9]/15 border-2 border-[#7161E9] transform -translate-y-2'
                    : 'bg-white/70 hover:bg-white border border-[#E8E3FF] hover:border-[#C6B9FF] shadow-xs'
                }`}
              >
                <div>
                  {/* Step Image */}
                  <div className="relative h-36 w-full mb-4 flex items-center justify-center bg-gradient-to-b from-[#F8F7FF] to-white rounded-2xl p-2 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = step.fallbackImage;
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-[#E8E3FF] text-[#292078] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                      {step.duration}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#7161E9] text-white flex items-center justify-center text-xs font-bold">
                      {step.num}
                    </span>
                    <h3 className="text-base font-bold text-[#171746]">
                      {step.title}
                    </h3>
                  </div>

                  <div className="text-[11px] font-medium text-[#7161E9] mb-3">
                    {step.tamilSubtitle}
                  </div>

                  <p className="text-xs text-[#171746]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Micro bullets */}
                <div className="mt-4 pt-4 border-t border-[#E8E3FF] space-y-1.5">
                  {step.details.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#171746]/75">
                      <Check className="w-3 h-3 text-[#52C9B0] shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Banner with CTA */}
        <div className="bg-gradient-to-r from-[#171746] via-[#292078] to-[#171746] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C6B9FF] mb-2 uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#52C9B0]" />
              <span>Fast Track Application</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Ready to take the first step towards your financial goal?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8E3FF]/80">
              Apply in less than 5 minutes. No paperwork headaches, no hidden fees, total clarity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenApply}
              className="py-3.5 px-7 bg-gradient-to-r from-[#7161E9] to-[#8B5CF6] hover:from-[#604fe6] hover:to-[#7c43ee] text-white text-sm font-semibold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Start Application Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+917010354426"
              className="py-3.5 px-5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Talk to Advisor
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
