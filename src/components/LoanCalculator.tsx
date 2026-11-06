import React, { useState } from 'react';
import { Calculator, ArrowRight, IndianRupee, PieChart, Info, ShieldCheck } from 'lucide-react';

interface LoanCalculatorProps {
  initialService?: string;
  initialAmount?: number;
  initialTenure?: number;
  initialRate?: number;
  onOpenApply: (service?: string, amount?: number, tenure?: number) => void;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  initialService = 'Personal Loan',
  initialAmount = 200000,
  initialTenure = 36,
  initialRate = 10.75,
  onOpenApply
}) => {
  const [loanType, setLoanType] = useState<string>(initialService);
  const [amount, setAmount] = useState<number>(initialAmount);
  const [tenureMonths, setTenureMonths] = useState<number>(initialTenure);
  const [annualRate, setAnnualRate] = useState<number>(initialRate);

  // EMI Calculation: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = annualRate / 12 / 100;
  const n = tenureMonths;
  const emi = monthlyRate === 0
    ? amount / n
    : Math.round((amount * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1));
  
  const totalPayment = emi * n;
  const totalInterest = Math.max(0, totalPayment - amount);
  const principalPercentage = Math.round((amount / totalPayment) * 100) || 75;
  const interestPercentage = 100 - principalPercentage;

  const loanOptions = [
    { name: 'Personal Loan', rate: 10.75, min: 25000, max: 1000000, defaultAmt: 200000, defaultMonths: 36 },
    { name: 'Home Loan', rate: 8.75, min: 200000, max: 5000000, defaultAmt: 1500000, defaultMonths: 120 },
    { name: 'Two Wheeler Refinance', rate: 11.0, min: 20000, max: 250000, defaultAmt: 80000, defaultMonths: 24 },
    { name: 'Daily / Micro Finance', rate: 12.0, min: 10000, max: 500000, defaultAmt: 50000, defaultMonths: 6 },
    { name: 'Kulu Loan (Magalir SHG)', rate: 9.5, min: 50000, max: 1000000, defaultAmt: 300000, defaultMonths: 24 },
    { name: 'Commercial Business', rate: 11.5, min: 100000, max: 2500000, defaultAmt: 500000, defaultMonths: 36 }
  ];

  const handleSelectLoanType = (option: typeof loanOptions[0]) => {
    setLoanType(option.name);
    setAnnualRate(option.rate);
    setAmount(option.defaultAmt);
    setTenureMonths(option.defaultMonths);
  };

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#F8F7FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E3FF]/70 text-[#292078] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#7161E9]" />
            <span>Interactive Loan Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171746] tracking-tight mb-3">
            Calculate Your Monthly Repayment
          </h2>
          <p className="text-sm sm:text-base text-[#171746]/70">
            Transparent interest rates with zero hidden markups. Adjust loan parameters to match your family or business budget.
          </p>
        </div>

        {/* Loan Type Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {loanOptions.map((opt) => (
            <button
              key={opt.name}
              onClick={() => handleSelectLoanType(opt)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                loanType === opt.name
                  ? 'bg-[#171746] text-white shadow-md'
                  : 'bg-white text-[#171746]/75 border border-[#E8E3FF] hover:border-[#7161E9]'
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#E8E3FF] shadow-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-[#171746]">
                  Desired Loan Amount
                </label>
                <span className="text-base sm:text-lg font-bold text-[#7161E9] tabular-nums">
                  {formatCurrency(amount)}
                </span>
              </div>
              <input
                type="range"
                min={20000}
                max={5000000}
                step={10000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-[#E8E3FF] rounded-lg appearance-none cursor-pointer accent-[#7161E9]"
              />
              <div className="flex justify-between text-[11px] text-[#171746]/50 mt-1 font-medium">
                <span>₹20,000</span>
                <span>₹25,00,000</span>
                <span>₹50,00,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-[#171746]">
                  Repayment Tenure
                </label>
                <span className="text-base sm:text-lg font-bold text-[#7161E9] tabular-nums">
                  {tenureMonths} Months ({Math.floor(tenureMonths / 12) > 0 ? `${(tenureMonths / 12).toFixed(1)} Yrs` : `${tenureMonths} Mo`})
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={180}
                step={3}
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full h-2.5 bg-[#E8E3FF] rounded-lg appearance-none cursor-pointer accent-[#7161E9]"
              />
              <div className="flex justify-between text-[11px] text-[#171746]/50 mt-1 font-medium">
                <span>3 Months</span>
                <span>60 Months (5 Yrs)</span>
                <span>180 Months (15 Yrs)</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-[#171746]">
                  Interest Rate (% p.a.)
                </label>
                <span className="text-base sm:text-lg font-bold text-[#7161E9] tabular-nums">
                  {annualRate}%
                </span>
              </div>
              <input
                type="range"
                min={7.5}
                max={20.0}
                step={0.25}
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-full h-2.5 bg-[#E8E3FF] rounded-lg appearance-none cursor-pointer accent-[#7161E9]"
              />
              <div className="flex justify-between text-[11px] text-[#171746]/50 mt-1 font-medium">
                <span>7.5%</span>
                <span>13.5%</span>
                <span>20.0%</span>
              </div>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 p-3 bg-[#F8F7FF] rounded-xl text-xs text-[#171746]/70">
              <Info className="w-4 h-4 text-[#7161E9] shrink-0 mt-0.5" />
              <span>
                Calculations are indicative. Actual terms may vary based on applicant credit profile, tenure, and eligible subsidies for Magalir SHGs.
              </span>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#171746] to-[#292078] rounded-2xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#C6B9FF] uppercase tracking-wider mb-1">
                Estimated Monthly Repayment
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums mb-6">
                {formatCurrency(emi)}
                <span className="text-sm font-normal text-[#C6B9FF] ml-1">/ month</span>
              </div>

              {/* Progress Breakdown Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-medium text-[#E8E3FF] mb-1.5">
                  <span>Principal: {principalPercentage}%</span>
                  <span>Interest: {interestPercentage}%</span>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${principalPercentage}%` }}
                    className="bg-[#52C9B0] h-full"
                  />
                  <div
                    style={{ width: `${interestPercentage}%` }}
                    className="bg-[#F2A04B] h-full"
                  />
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center text-[#E8E3FF]">
                  <span>Principal Amount</span>
                  <span className="font-semibold text-white tabular-nums">{formatCurrency(amount)}</span>
                </div>
                <div className="flex justify-between items-center text-[#E8E3FF]">
                  <span>Total Interest Payable</span>
                  <span className="font-semibold text-white tabular-nums">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center text-[#E8E3FF] pt-2 border-t border-white/10">
                  <span className="font-bold text-white text-sm">Total Repayment Amount</span>
                  <span className="font-bold text-white text-sm tabular-nums">{formatCurrency(totalPayment)}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => onOpenApply(loanType, amount, tenureMonths)}
              className="mt-8 w-full py-3.5 px-4 bg-gradient-to-r from-[#7161E9] to-[#8B5CF6] hover:from-[#604fe6] hover:to-[#7c43ee] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply for {formatCurrency(amount)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
