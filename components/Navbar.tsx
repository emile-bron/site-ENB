import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'À propos', href: '#case-studies' },
  { label: 'Nos Services', href: '#nos-services' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Style Liquid Glass réutilisable
  const glassBase = "backdrop-blur-xl bg-white/30 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:bg-white/50 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] transition-all duration-300";

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    // Si c'est un lien d'ancrage, on gère le défilement fluide manuellement
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 py-6 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo - Style Modern Tech Elegant */}
        <div className="flex items-center gap-6">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group z-50">
            {/* Icon Container: Plus "sharp", plus lumineux */}
            <div className="p-2.5 rounded-lg bg-white/80 border border-white/60 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                <img 
                  src="https://i.postimg.cc/Z5Ms0dPc/Logo-ENB-Agency.png" 
                  alt="ENB Agency Logo" 
                  className="w-4 h-4 object-contain opacity-90" 
                />
            </div>
            {/* Text: Tracking large pour l'élégance, font-medium pour la finesse */}
            <span className="text-base font-display font-medium tracking-[0.2em] text-gray-900 uppercase whitespace-nowrap pt-0.5 transition-opacity hover:opacity-80">
            ENB Agency
            </span>
          </a>
        </div>

        {/* Desktop Menu - Centered (Liquid Pills) */}
        <div className="hidden md:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick(item.href)}
              className={`px-5 py-2 rounded-full text-sm font-medium text-gray-700 ${glassBase} cursor-pointer`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Right (Liquid Glass Highlight) */}
        <div className="hidden md:flex items-center">
          <a
            href="https://cal.com/emile-bron/decouverte"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-sm font-semibold text-black ${glassBase}`}
          >
            <span>Discutons</span>
            <div className="bg-white/80 rounded-full p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-3 h-3 text-black" />
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-3 rounded-xl text-black z-50 ${glassBase}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="fixed inset-0 bg-[#F2F3F5]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 animate-fade-in">
                {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="text-3xl font-display font-medium text-black cursor-pointer"
                    onClick={handleNavClick(item.href)}
                >
                    {item.label}
                </a>
                ))}
                 <a
                    href="https://cal.com/emile-bron/decouverte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold mt-4 ${glassBase}`}
                    onClick={() => setIsOpen(false)}
                >
                    Discutons
                    <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;