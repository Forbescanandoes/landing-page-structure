'use client';

import { siteConfig } from '../../config/site.config';
import { linksConfig } from '../../config/links.config';
import Logo from '../shared/Logo';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const { companyText, copyright } = siteConfig.footer;

  const quickLinks = [
    { href: linksConfig.footer.quickLinks.features, text: 'Features' },
    { href: linksConfig.footer.quickLinks.pricing, text: 'Pricing' },
    { href: linksConfig.footer.quickLinks.faq, text: 'FAQ' },
    { href: linksConfig.footer.quickLinks.contact, text: 'Contact' },
  ];

  const legalLinks = [
    { href: linksConfig.footer.legal.privacy, text: 'Privacy Policy' },
    { href: linksConfig.footer.legal.terms, text: 'Terms of Service' },
    { href: linksConfig.footer.legal.cookies, text: 'Cookie Policy' },
  ];

  const socialLinks = [
    {
      href: linksConfig.footer.social.twitter,
      icon: Twitter,
      label: 'Twitter',
    },
    { href: linksConfig.footer.social.github, icon: Github, label: 'GitHub' },
    {
      href: linksConfig.footer.social.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="w-full px-4 py-12 sm:px-6 md:px-8 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info with Logo */}
        <div className="col-span-1 md:col-span-2">
          <Logo className="mb-4" />
          <p className="text-sm">{companyText}</p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(({ href, text }) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            {legalLinks.map(({ href, text }) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
        <p className="text-sm text-center">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
