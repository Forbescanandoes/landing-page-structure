'use client'

import { siteConfig } from '../../config/site.config'
import { trackEvent } from '../../lib/analytics'

const CallToActionFinal = () => {
  const { headline, subheadline, ctaText, ctaUrl } = siteConfig.finalCTA

  const handleClick = () => {
    trackEvent({
      action: 'click',
      category: 'CTA',
      label: 'Final CTA Button Click',
    })
  }

  return (
    <section id="finalcta" className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {headline}
        </h2>
        
        <p className="mt-6 text-lg sm:text-xl text-blue-100">
          {subheadline}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {ctaUrl ? (
            <a 
              href={ctaUrl}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-bold hover:bg-blue-50 transition-colors"
            >
              {ctaText}
            </a>
          ) : (
            <button 
              onClick={handleClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-bold hover:bg-blue-50 transition-colors"
            >
              {ctaText}
            </button>
          )}
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            Schedule a Demo
          </button>
        </div>
        
        <p className="mt-6 text-sm text-blue-100">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CallToActionFinal