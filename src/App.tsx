import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LoanCalculator } from './components/LoanCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Personal Loan');
  const [selectedAmount, setSelectedAmount] = useState<number>(200000);
  const [selectedTenure, setSelectedTenure] = useState<number>(36);

  const handleOpenApply = (service?: string, amount?: number, tenure?: number) => {
    if (service) setSelectedService(service);
    if (amount) setSelectedAmount(amount);
    if (tenure) setSelectedTenure(tenure);
    setIsApplyModalOpen(true);
  };

  const handleSelectCalculator = (service: string, amount: number, tenure: number, rate: number) => {
    setSelectedService(service);
    setSelectedAmount(amount);
    setSelectedTenure(tenure);
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7FF] text-[#171746] flex flex-col selection:bg-[#7161E9] selection:text-white">
      {/* 1. Navigation */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 2. Hero with Floating 3D Panels */}
        <Hero onOpenApply={handleOpenApply} />

        {/* 3. Financial Services */}
        <ServicesSection
          onOpenApply={handleOpenApply}
          onSelectCalculator={handleSelectCalculator}
        />

        {/* Interactive Loan EMI Calculator */}
        <LoanCalculator
          initialService={selectedService}
          initialAmount={selectedAmount}
          initialTenure={selectedTenure}
          onOpenApply={handleOpenApply}
        />

        {/* 4. Why Choose Natchathra Finance */}
        <WhyChooseUs />

        {/* 5. How It Works (4-Step Sequential Process) */}
        <HowItWorks onOpenApply={() => handleOpenApply()} />

        {/* 6. About Natchathra Finance */}
        <AboutSection />

        {/* 7. FAQ and Contact */}
        <FaqAndContact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Universal Loan Application Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        defaultService={selectedService}
        defaultAmount={selectedAmount}
        defaultTenure={selectedTenure}
      />
    </div>
  );
}
