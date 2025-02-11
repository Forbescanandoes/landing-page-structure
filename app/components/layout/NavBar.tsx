'use client'

import { useState } from 'react'
import Logo from '../shared/Logo'

interface NavBarProps {
  className?: string
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' }
  ]

  return (
    <nav className={`w-full px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 bg-white shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo className="flex-shrink-0" />
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-full h-0.5 bg-gray-600 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar