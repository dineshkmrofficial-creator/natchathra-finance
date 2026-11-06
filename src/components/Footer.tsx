import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171746] text-[#E8E3FF] pt-16 pb-12 border-t border-[#292078]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-xl bg-gradient-to-tr from-[#7161E9] to-[#292078] p-1.5 flex items-center justify-center shadow-md overflow-hidden">
                <img
                  src="/assets/clean/logo_transparent.png"
                  alt="Natchathra Finance"
                  className="w-full h-full object-contain filter drop-shadow"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/file_000000003a588211a8aa2e62ba11e394_b8c0de35.png';
                  }}
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  Natchathra<span className="text-[#C6B9FF] ml-1">Finance</span>
                </span>
                <span className="text-[10px] tracking-wider text-[#C6B9FF] uppercase font-semibold">
                  Your Financial Goals. Our Commitment.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8E3FF]/70 leading-relaxed pr-4">
              Natchathra Finance serves customers in Mannargudi, Tamil Nadu with information on personal, business, home, two-wheeler and Magalir SHG loan options. Visit our office at Fathima Complex, Vanakara Street.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/917010354426"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#52C9B0] hover:text-[#171746] flex items-center justify-center transition-colors text-white"
                title="WhatsApp Support"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+917010354426"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#7161E9] flex items-center justify-center transition-colors text-white"
                title="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@natchathrafinance.in"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#7161E9] flex items-center justify-center transition-colors text-white"
                title="Email Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#E8E3FF]/75">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home Overview</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">All Financial Services</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">EMI Loan Calculator</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Natchathra</a>
              </li>
            </ul>
          </div>

          {/* Loan Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs text-[#E8E3FF]/75">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Home Construction & Purchase</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Two Wheeler Refinance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Daily & Weekly Merchant Finance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Magalir Kulu Loan (Women SHG)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Personal Milestone Loans</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Commercial & Business Credit</a>
              </li>
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#E8E3FF]/75">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Mannargudi Office & Contact
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#7161E9] shrink-0 mt-0.5" />
              <span>Fathima Complex, Vanakara Street, Mannargudi – 614001, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#52C9B0] shrink-0" />
              <a href="tel:+917010354426" className="hover:text-white transition-colors">+91 70103 54426</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#E8A4D7] shrink-0" />
              <a href="mailto:support@natchathrafinance.in" className="hover:text-white transition-colors">support@natchathrafinance.in</a>
            </div>
            <div className="pt-2 text-[11px] text-[#E8E3FF]/60">
              Operating Hours: Mon – Sat: 9:00 AM – 7:00 PM IST
            </div>
          </div>

        </div>

        {/* Regulatory & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8E3FF]/60">
          <p>© {new Date().getFullYear()} Natchathra Finance. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Fair Lending Practices · RBI Advisory Compliant</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
