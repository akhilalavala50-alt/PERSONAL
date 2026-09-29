import { useState, useEffect } from 'react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-stone-50/80 backdrop-blur-xs border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#home"
          className="text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
        >
          {STUDENT_PROFILE.name}
        </a>

        {/* Zone 2: Navigation Links (Clean text with hover indicators) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <a
            href={STUDENT_PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors shadow-xs"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-stone-200/50 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-stone-50 px-4 pt-2 pb-6 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-stone-200/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-stone-200 mt-2 space-y-2">
            <a
              href={STUDENT_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
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
                className="flex items-center justify-center w-full px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors"
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
