import React from 'react';
import { Zap, FileText, ShieldCheck, HeartHandshake, MapPin, Lock, Award, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: Zap,
      title: 'Lightning 24-48 Hour Disbursal',
      description: 'Funds released directly to your verified bank account without bureaucratic hold-ups or unnecessary branch visits.',
      stat: '24-48h',
      statLabel: 'Average turnaround'
    },
    {
      icon: FileText,
      title: 'Minimal & Streamlined Paperwork',
      description: 'Simple verification using standard Aadhaar, PAN, and bank details. Hassle-free procedures for all categories.',
      stat: '3 Steps',
      statLabel: 'Paperless KYC'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Hidden Charges',
      description: 'Complete transparency with clear interest breakdowns and no surprise administrative deductions or penalties.',
      stat: '100%',
      statLabel: 'Fee transparency'
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Women SHG Support',
      description: 'Specialized low-interest Magalir Suyauthavi Kulu financing designed to uplift rural women micro-entrepreneurs.',
      stat: '2,500+',
      statLabel: 'Groups empowered'
    },
    {
      icon: MapPin,
      title: 'Doorstep Relationship Managers',
      description: 'Friendly regional field officers who speak Tamil and English, offering assistance right at your doorstep or shop.',
      stat: 'Tamil & EN',
      statLabel: 'Local language care'
    },
    {
      icon: Lock,
      title: 'Dignified & Confidential Service',
      description: 'Bank-grade borrower data protection and respectful customer handling throughout your entire loan lifecycle.',
      stat: '99.4%',
      statLabel: 'Borrower satisfaction'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-t border-[#E8E3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E3FF]/70 text-[#292078] text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-[#7161E9]" />
            <span>The Natchathra Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171746] tracking-tight mb-4">
            Why Contact Natchathra Finance in Mannargudi
          </h2>
          <p className="text-base sm:text-lg text-[#171746]/70 leading-relaxed">
            We bridge the gap between traditional banking complexity and everyday financial needs with compassion, speed, and integrity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#F8F7FF] border border-[#E8E3FF] hover:border-[#7161E9]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[#7161E9]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7161E9] to-[#292078] flex items-center justify-center text-white shadow-md shadow-[#7161E9]/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-[#171746] tabular-nums">{item.stat}</div>
                      <div className="text-[11px] text-[#171746]/50 font-medium">{item.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#171746] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#171746]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E3FF]/80 flex items-center gap-2 text-xs font-semibold text-[#7161E9]">
                  <CheckCircle className="w-4 h-4 text-[#52C9B0]" />
                  <span>Guaranteed Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
