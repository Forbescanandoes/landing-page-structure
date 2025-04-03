'use client';

import { siteConfig } from '../../config/site.config';
import { trackEvent } from '../../lib/analytics';

const Hero = () => {
  const { headline, subheadline, button: ctaText } = siteConfig.hero;

  const handleHeroClick = () => {
    trackEvent({
      action: 'click',
      category: 'Hero',
      label: 'CTA Button Click',
    });
  };

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            {headline}
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {subheadline}
          </p>

          <div className="mt-8 sm:mt-10">
            <button
              onClick={handleHeroClick}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
