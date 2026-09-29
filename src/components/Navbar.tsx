import { useState, useEffect } from 'react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Code } from 'lucide-react';

interface NavbarProps {
  onOpenSourceModal?: () => void;
}

export function Navbar({ onOpenSourceModal }: NavbarProps) {
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
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20'
          : 'bg-[#0b0f17]/70 backdrop-blur-xs border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#home"
          className="text-base sm:text-lg font-extrabold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>{STUDENT_PROFILE.name}</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative text-xs uppercase tracking-wider font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          {onOpenSourceModal && (
            <button
              type="button"
              onClick={onOpenSourceModal}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-md hover:border-slate-700 transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Source Files</span>
            </button>
          )}

          <a
            href={STUDENT_PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-all shadow-sm shadow-blue-900/30"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0e1422] px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 mt-3 space-y-2">
            <a
              href={STUDENT_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            {onOpenSourceModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSourceModal();
                }}
                className="flex items-center justify-center w-full px-4 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 transition-colors"
              >
                View HTML/CSS/JS Source Files
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
