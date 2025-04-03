'use client';

import { useState } from 'react';
import Logo from '../shared/Logo';
import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: linksConfig.nav.scroll.features, label: 'Features' },
    { href: linksConfig.nav.scroll.pricing, label: 'Pricing' },
    { href: linksConfig.nav.scroll.faq, label: 'FAQ' },
    { href: linksConfig.nav.scroll.contact, label: 'Contact' },
  ];

  return (
    <nav
      className={`w-full px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 bg-white shadow-sm ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="flex-shrink-0" size="medium" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-600 ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={linksConfig.nav.cta}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {siteConfig.nav.button}
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={linksConfig.nav.cta}
            className="block px-3 py-2 text-blue-600 hover:text-blue-700 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.nav.button}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
