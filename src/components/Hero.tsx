import React, { useState } from 'react';
import { ArrowRight, Calculator, ShieldCheck, Zap, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenApply: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F3F0FF] via-[#F8F7FF] to-[#FFFFFF]">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply overflow-hidden">
        <img
          src="/assets/aistudio/file_0000000032148211903a9893bbc9a90b_bf105563.png"
          alt=""
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-auto object-cover opacity-60"
        />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C6B9FF]/30 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#70B9E9]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start z-20">
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#C6B9FF]/60 shadow-xs mb-6 text-xs font-semibold text-[#292078]">
              <span className="flex h-2 w-2 rounded-full bg-[#52C9B0]" />
              <span>Direct Disbursal in 24 to 48 Hours</span>
              <span className="text-[#C6B9FF]">•</span>
              <span className="text-[#7161E9]">Mannargudi, Tamil Nadu</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171746] leading-[1.12] mb-6">
              Natchathra Finance – Loans in Mannargudi{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#7161E9] via-[#8B5CF6] to-[#292078]">
                Local Financial Support.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#171746]/75 max-w-xl leading-relaxed mb-8">
              Looking for personal, business, home, two-wheeler or Magalir SHG loan options in Mannargudi? Contact Natchathra Finance at Fathima Complex, Vanakara Street, Mannargudi, Tamil Nadu to discuss available financing options and eligibility.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenApply()}
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#7161E9] to-[#292078] hover:from-[#5e4dd3] hover:to-[#1e1759] rounded-xl shadow-lg shadow-[#7161E9]/25 hover:shadow-xl hover:shadow-[#7161E9]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Apply For Loan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-[#171746] bg-white hover:bg-[#F8F7FF] border border-[#C6B9FF]/80 rounded-xl shadow-xs hover:border-[#7161E9] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#7161E9]" />
                <span>Calculate EMI</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="w-full pt-6 border-t border-[#E8E3FF] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-[#171746] tabular-nums">₹50+ Cr</div>
                <div className="text-xs font-medium text-[#171746]/60">Disbursed</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#7161E9] tabular-nums">10,000+</div>
                <div className="text-xs font-medium text-[#171746]/60">Happy Borrowers</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#171746] tabular-nums">24-48h</div>
                <div className="text-xs font-medium text-[#171746]/60">Fast Approval</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#52C9B0] tabular-nums">99%</div>
                <div className="text-xs font-medium text-[#171746]/60">Transparent</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium 3D Floating Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] select-none">
            
            {/* Centerpiece 3D Glass Dashboard */}
            <div className="relative z-10 w-full max-w-[480px] sm:max-w-[540px] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/aistudio/file_00000000368482118a9eeab3da96d8a5_bde4bb80.png"
                alt="Natchathra Finance 3D Core Dashboard"
                className="w-full h-auto drop-shadow-2xl filter brightness-[1.02]"
              />
            </div>

            {/* Floating Element 1: Personal Loan (Top Left) */}
            <div
              className="absolute -top-3 left-0 sm:left-4 z-20 w-32 sm:w-40 md:w-44 cursor-pointer transition-transform duration-300 hover:scale-110 animate-float-1"
              onClick={() => onOpenApply('Personal Loan')}
              title="Personal Loan"
            >
              <div className="relative group">
                <img
                  src="/assets/clean/badge_personal_loan.png"
                  alt="Personal Loan"
                  className="w-full h-auto drop-shadow-xl filter group-hover:drop-shadow-2xl transition-all"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/file_0000000012e48208bc9a9619be700e33_27e23e95.png';
                  }}
                />
                <span className="sr-only">Personal Loan</span>
              </div>
            </div>

            {/* Floating Element 2: Home Loan (Top Right) */}
            <div
              className="absolute top-2 -right-2 sm:right-2 z-20 w-32 sm:w-40 md:w-44 cursor-pointer transition-transform duration-300 hover:scale-110 animate-float-2"
              onClick={() => onOpenApply('Home Loan')}
              title="Home Loan"
            >
              <div className="relative group">
                <img
                  src="/assets/clean/badge_home_loan.png"
                  alt="Home Loan"
                  className="w-full h-auto drop-shadow-xl filter group-hover:drop-shadow-2xl transition-all"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/file_000000009aa882089c838c4586a3c21c_64b09d3f.png';
                  }}
                />
                <span className="sr-only">Home Loan</span>
              </div>
            </div>

            {/* Floating Element 3: Apply To Grow 3D Chart Tablet (Upper Right Accent) */}
            <div
              className="absolute top-28 -right-4 sm:-right-8 z-15 w-24 sm:w-32 md:w-36 cursor-pointer transition-transform duration-300 hover:scale-105 animate-float-3"
              onClick={() => onOpenApply('Business Finance')}
              title="Apply To Grow"
            >
              <img
                src="/assets/clean/panel_apply_to_grow.png"
                alt="Apply to Grow"
                className="w-full h-auto drop-shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/file_00000000d1c48208953f1b7c206da047_8c6a841d.png';
                }}
              />
            </div>

            {/* Floating Element 4: Two Wheeler Refinance (Bottom Left) */}
            <div
              className="absolute -bottom-4 left-2 sm:left-6 z-25 w-32 sm:w-40 md:w-44 cursor-pointer transition-transform duration-300 hover:scale-110 animate-float-4"
              onClick={() => onOpenApply('Two Wheeler Refinance')}
              title="Two Wheeler Refinance"
            >
              <img
                src="/assets/clean/badge_two_wheeler.png"
                alt="Two Wheeler Refinance"
                className="w-full h-auto drop-shadow-xl hover:drop-shadow-2xl transition-all"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/file_00000000a1bc82119eebb402ee1ea190_b786ea83.png';
                }}
              />
            </div>

            {/* Floating Element 5: Daily Finance (Bottom Right) */}
            <div
              className="absolute -bottom-5 right-2 sm:right-6 z-25 w-32 sm:w-40 md:w-44 cursor-pointer transition-transform duration-300 hover:scale-110 animate-float-5"
              onClick={() => onOpenApply('Daily Finance')}
              title="Daily Finance"
            >
              <img
                src="/assets/clean/badge_daily_finance.png"
                alt="Daily Finance"
                className="w-full h-auto drop-shadow-xl hover:drop-shadow-2xl transition-all"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/file_000000005d0c8208a3f8e5f3286421d9_85a5caa2.png';
                }}
              />
            </div>

            {/* Floating Element 6: Kulu Loan Magalir SHG (Mid Left Accent) */}
            <div
              className="hidden sm:block absolute top-1/2 -left-6 -translate-y-1/2 z-22 w-32 sm:w-36 md:w-40 cursor-pointer transition-transform duration-300 hover:scale-110 animate-float-2"
              onClick={() => onOpenApply('Kulu Loan (Magalir SHG)')}
              title="Kulu Loan Magalir SHG"
            >
              <img
                src="/assets/clean/badge_kulu_loan.png"
                alt="Kulu Loan Magalir SHG"
                className="w-full h-auto drop-shadow-xl hover:drop-shadow-2xl transition-all"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/file_00000000f8b082089fd39a4317214743_8715e84b.png';
                }}
              />
            </div>

            {/* Subtle Pedestal Reflection Blur */}
            <div className="absolute -bottom-8 w-3/4 h-8 bg-[#171746]/10 rounded-full blur-xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
