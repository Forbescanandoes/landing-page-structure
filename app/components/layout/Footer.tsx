'use client'

import { siteConfig } from '../../config/site.config'

const Footer = () => {
  const { companyText, copyright, linkSections } = siteConfig.footer
  const [quickLinks, legal, connect] = linkSections

  return (
    <footer className="w-full px-4 py-12 sm:px-6 md:px-8 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <p className="text-sm">
            {companyText}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">{quickLinks.title}</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.links.map((link, index) => (
              <li key={index}>
                <a href={`#${link.text.toLowerCase()}`} className="hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">{legal.title}</h3>
          <ul className="space-y-2 text-sm">
            {legal.links.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">{connect.title}</h3>
          <div className="flex space-x-4">
            {connect.links.map((link, index) => (
              <a key={index} href="#" className="hover:text-white">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
        <p className="text-sm text-center">
          {copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer