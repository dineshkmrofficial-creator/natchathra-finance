import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenApply: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'FAQ & Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E8E3FF]/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Zone */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7161E9] rounded-lg"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-tr from-[#171746] to-[#292078] p-1.5 flex items-center justify-center shadow-md shadow-[#7161E9]/20 overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src="/assets/clean/logo_transparent.png"
                alt="Natchathra Finance"
                className="w-full h-full object-contain filter drop-shadow"
                onError={(e) => {
                  // Fallback to original asset
                  (e.target as HTMLImageElement).src = '/assets/aistudio/file_000000003a588211a8aa2e62ba11e394_b8c0de35.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#171746] leading-none">
                Natchathra<span className="text-[#7161E9] ml-1">Finance</span>
              </span>
              <span className="text-[10px] font-medium tracking-wider text-[#7161E9] uppercase mt-0.5">
                Loans & Finance in Mannargudi
              </span>
            </div>
          </a>

          {/* Nav Links - Single Line */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#171746]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#7161E9] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#7161E9] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+917010354426"
              className="flex items-center gap-2 text-xs font-semibold text-[#292078] bg-[#E8E3FF]/60 hover:bg-[#E8E3FF] px-3.5 py-2 rounded-full transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#7161E9]" />
              <span>+91 70103 54426</span>
            </a>

            <button
              onClick={() => onOpenApply()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#7161E9] to-[#292078] hover:from-[#5e4dd3] hover:to-[#1e1759] rounded-xl shadow-md shadow-[#7161E9]/25 hover:shadow-lg hover:shadow-[#7161E9]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenApply()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#7161E9] rounded-lg"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171746] hover:text-[#7161E9] hover:bg-[#E8E3FF]/50 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#E8E3FF] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#171746] hover:text-[#7161E9] py-2 px-3 rounded-lg hover:bg-[#F8F7FF] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8E3FF] flex flex-col gap-3">
              <a
                href="tel:+917010354426"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#292078] bg-[#E8E3FF]/60 py-2.5 rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#7161E9]" />
                <span>Call Advisor: +91 70103 54426</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#7161E9] to-[#292078] rounded-xl shadow-md text-center"
              >
                Start Loan Application
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
