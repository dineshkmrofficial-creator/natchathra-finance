import React, { useState } from 'react';
import { ArrowRight, Check, Clock, Percent, Shield, Sparkles, Building2, User, Users, Bike, Wallet, Briefcase } from 'lucide-react';

interface ServicesSectionProps {
  onOpenApply: (service?: string) => void;
  onSelectCalculator: (service: string, amount: number, tenure: number, rate: number) => void;
}

export interface ServiceItem {
  id: string;
  name: string;
  tamilName?: string;
  category: 'personal' | 'home' | 'vehicle' | 'business' | 'shg';
  image: string;
  tagline: string;
  description: string;
  maxAmount: string;
  minAmountVal: number;
  maxAmountVal: number;
  defaultAmountVal: number;
  interestRate: string;
  defaultRate: number;
  tenure: string;
  defaultTenureMonths: number;
  processingTime: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'home-loan',
    name: 'Home Loan',
    tamilName: 'வீட்டுக் கடன்',
    category: 'home',
    image: '/assets/aistudio/file_0000000075cc82119af81e9ac28f457c_85e193df.png',
    tagline: 'Build, buy, or renovate your dream family home with peace of mind.',
    description: 'Competitive interest rates with flexible repayment tenures up to 20 years. Designed for salaried employees, self-employed individuals, and agricultural landowners.',
    maxAmount: 'Up to ₹50,00,000',
    minAmountVal: 200000,
    maxAmountVal: 5000000,
    defaultAmountVal: 1500000,
    interestRate: 'From 8.5% p.a.',
    defaultRate: 8.75,
    tenure: '5 to 20 Years',
    defaultTenureMonths: 120,
    processingTime: '3 - 5 Days',
    features: [
      'Simple documentation & doorstep assistance',
      'Plot purchase & home construction financing',
      'No hidden processing or prepayment penalties',
      'Balance transfer option with top-up facility'
    ]
  },
  {
    id: 'two-wheeler',
    name: 'Two Wheeler Loan & Refinance',
    tamilName: 'இருசக்கர வாகன மறுநிதி',
    category: 'vehicle',
    image: '/assets/aistudio/file_00000000f6c08207969772fcd623ac11_b83e24af.png',
    tagline: 'Drive your new bike today or unlock liquid cash from your existing vehicle.',
    description: 'Instant approvals with up to 95% on-road funding for new bikes and scooters, plus prompt cash refinance against your existing registered two-wheeler with RC copy.',
    maxAmount: 'Up to ₹2,50,000',
    minAmountVal: 20000,
    maxAmountVal: 250000,
    defaultAmountVal: 80000,
    interestRate: 'From 10.5% p.a.',
    defaultRate: 11.0,
    tenure: '12 to 48 Months',
    defaultTenureMonths: 24,
    processingTime: 'Same Day Disbursal',
    features: [
      'Instant RC-based cash refinance available',
      'Fast approval with minimal KYC documents',
      'Zero income proof schemes for select models',
      'Flexible weekly or monthly installment choices'
    ]
  },
  {
    id: 'daily-finance',
    name: 'Daily & Micro Finance',
    tamilName: 'தினசரி & சிறு தொழில் நிதி',
    category: 'business',
    image: '/assets/aistudio/file_000000009e8c8211b77d9222ae168c41_b3125025.png',
    tagline: 'Daily and weekly working capital for shopkeepers, traders & vendors.',
    description: 'Designed specifically for local retail shop owners, vegetable/fruit merchants, and small service providers who need immediate liquidity without lengthy bank queues.',
    maxAmount: 'Up to ₹5,00,000',
    minAmountVal: 10000,
    maxAmountVal: 500000,
    defaultAmountVal: 50000,
    interestRate: 'Low Flat Rates',
    defaultRate: 12.0,
    tenure: '30 to 180 Days',
    defaultTenureMonths: 6,
    processingTime: 'Within 24 Hours',
    features: [
      'Doorstep cash collection with digital receipts',
      'Quick daily or weekly installment options',
      'Easy repeat top-up loans upon prompt repayment',
      'No complex balance sheet or audit reports needed'
    ]
  },
  {
    id: 'kulu-loan',
    name: 'Kulu Loan (Magalir SHG)',
    tamilName: 'மகளிர் குழு கடன் (SHG)',
    category: 'shg',
    image: '/assets/aistudio/file_000000003b1082118718486f073b9b93_e9a1835d.png',
    tagline: 'Empowering women entrepreneurs and neighborhood self-help groups.',
    description: 'Collective micro-financing crafted to support women self-help groups (Magalir Suyauthavi Kulu) in starting or expanding cottage industries, tailoring, dairy farming, and handicraft businesses.',
    maxAmount: 'Up to ₹10,00,000 per Group',
    minAmountVal: 50000,
    maxAmountVal: 1000000,
    defaultAmountVal: 300000,
    interestRate: 'Concessional Subsidy Rates',
    defaultRate: 9.5,
    tenure: '12 to 36 Months',
    defaultTenureMonths: 24,
    processingTime: '24 - 48 Hours',
    features: [
      'Joint liability group model with peer support',
      'Subsidized low interest rates for women groups',
      'Dedicated relationship officer for group meetings',
      'Financial literacy and savings guidance included'
    ]
  },
  {
    id: 'business-loan',
    name: 'Commercial & Business Finance',
    tamilName: 'வணிக & தொழில் கடன்',
    category: 'business',
    image: '/assets/aistudio/file_00000000690c8211a9f7f3985d533871_f9ef9fb2.png',
    tagline: 'Capital expansion, equipment purchase & inventory scale for growing enterprises.',
    description: 'Customized financing for manufacturers, wholesalers, educational centers, and contractors looking to fulfill larger purchase orders and scale their business operations.',
    maxAmount: 'Up to ₹25,00,000',
    minAmountVal: 100000,
    maxAmountVal: 2500000,
    defaultAmountVal: 500000,
    interestRate: 'From 11.5% p.a.',
    defaultRate: 11.5,
    tenure: '1 to 5 Years',
    defaultTenureMonths: 36,
    processingTime: '48 Hours',
    features: [
      'Collateral-free working capital limits available',
      'Machinery, technology, & commercial vehicle loans',
      'Flexible term loan or overdraft structure',
      'Transparent documentation and dedicated RM'
    ]
  },
  {
    id: 'personal-loan',
    name: 'Personal Loan',
    tamilName: 'தனிநபர் கடன்',
    category: 'personal',
    image: '/assets/clean/badge_personal_loan.png',
    tagline: 'Instant funds for weddings, higher education, medical care, or travel.',
    description: 'Unsecured personal loans with fast digital approval. Borrow for planned milestones or unforeseen medical emergencies with dignified terms and straightforward EMIs.',
    maxAmount: 'Up to ₹10,00,000',
    minAmountVal: 25000,
    maxAmountVal: 1000000,
    defaultAmountVal: 200000,
    interestRate: 'From 10.75% p.a.',
    defaultRate: 10.75,
    tenure: '12 to 60 Months',
    defaultTenureMonths: 36,
    processingTime: '24 Hours',
    features: [
      'No collateral or security deposit needed',
      'Transparent interest calculations with zero hidden fees',
      'Disbursal directly to borrower bank account',
      'Easy documentation via Aadhaar and Bank Statement'
    ]
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenApply,
  onSelectCalculator
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'personal', label: 'Personal & Home' },
    { id: 'vehicle', label: 'Two Wheeler' },
    { id: 'business', label: 'Business & Daily' },
    { id: 'shg', label: 'Women SHG (Kulu)' }
  ];

  const filteredServices = servicesData.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'personal') return service.category === 'personal' || service.category === 'home';
    if (selectedFilter === 'vehicle') return service.category === 'vehicle';
    if (selectedFilter === 'business') return service.category === 'business';
    if (selectedFilter === 'shg') return service.category === 'shg';
    return true;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background soft aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8E3FF]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#C6B9FF]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E3FF]/70 text-[#292078] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7161E9]" />
            <span>Tailored Financial Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171746] tracking-tight mb-4">
            Loan Options in Mannargudi for Personal, Business & Family Needs
          </h2>
          <p className="text-base sm:text-lg text-[#171746]/70 leading-relaxed">
            Explore personal, home, two-wheeler, business and Magalir SHG loan options in Mannargudi. Speak with Natchathra Finance to understand eligibility, applicable charges and repayment terms.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F8F7FF] border border-[#E8E3FF] rounded-2xl max-w-2xl mx-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-gradient-to-r from-[#7161E9] to-[#292078] text-white shadow-md shadow-[#7161E9]/20'
                    : 'text-[#171746]/70 hover:text-[#171746] hover:bg-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#F8F7FF] rounded-3xl border border-[#E8E3FF] hover:border-[#7161E9]/50 shadow-sm hover:shadow-xl hover:shadow-[#7161E9]/10 transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1.5"
            >
              {/* Image Showcase Container */}
              <div className="relative h-56 sm:h-64 w-full bg-gradient-to-b from-[#E8E3FF]/40 to-[#F8F7FF] p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder badge if path differs
                    (e.target as HTMLImageElement).src = '/assets/clean/badge_personal_loan.png';
                  }}
                />
                
                {/* Processing time badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#292078] border border-[#E8E3FF] shadow-xs flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#7161E9]" />
                  <span>{service.processingTime}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#171746] tracking-tight">
                      {service.name}
                    </h3>
                    {service.tamilName && (
                      <span className="text-xs font-medium text-[#7161E9] bg-[#E8E3FF]/60 px-2.5 py-0.5 rounded-full">
                        {service.tamilName}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#171746]/70 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Financial Metrics Strip */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 bg-white rounded-2xl border border-[#E8E3FF]/80 mb-6 text-xs">
                    <div>
                      <div className="text-[11px] font-medium text-[#171746]/60">Max Limit</div>
                      <div className="font-bold text-[#171746] text-sm tabular-nums mt-0.5">{service.maxAmount}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-[#171746]/60">Interest Rate</div>
                      <div className="font-bold text-[#7161E9] text-sm tabular-nums mt-0.5">{service.interestRate}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-[#171746]/60">Tenure</div>
                      <div className="font-semibold text-[#171746] mt-0.5">{service.tenure}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-[#171746]/60">Approval</div>
                      <div className="font-semibold text-[#52C9B0] mt-0.5">{service.processingTime}</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#171746]/80 leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#52C9B0] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8E3FF]">
                  <button
                    onClick={() => onOpenApply(service.name)}
                    className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#7161E9] to-[#292078] hover:from-[#5e4dd3] hover:to-[#1e1759] rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectCalculator(service.name, service.defaultAmountVal, service.defaultTenureMonths, service.defaultRate)}
                    className="py-2.5 px-3.5 text-xs font-semibold text-[#292078] bg-white hover:bg-[#E8E3FF]/50 border border-[#C6B9FF] rounded-xl transition-colors cursor-pointer"
                    title="Calculate Monthly EMI"
                  >
                    EMI
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
