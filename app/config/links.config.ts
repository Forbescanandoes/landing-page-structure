/**
 * This configuration file controls all links, URLs, and scroll targets throughout the site.
 * Edit the values below to update where buttons and links point to.
 */

export const linksConfig = {
  // Navigation scroll targets and external links
  nav: {
    scroll: {
      features: '#features',
      pricing: '#pricing',
      faq: '#faq',
      contact: '#contact'
    },
    cta: '#get-started'
  },

  // Hero section scroll target
  hero: {
    cta: '#pricing' // Scrolls to pricing section
  },

  // Pricing section external links
  pricing: {
    basic: 'https://twitter.com/buildwithlogan',
    pro: '/purchase/pro',
    enterprise: '/contact-sales'
  },

  // Call to action section
  cta: {
    primary: '#get-started',
    secondary: 'https://twitter.com/buildwithlogan'
  },

  // Footer links
  footer: {
    // Quick links (scroll targets)
    quickLinks: {
      features: '#features',
      pricing: '#pricing',
      faq: '#faq',
      contact: '#contact'
    },
    // Legal pages
    legal: {
      privacy: 'https://twitter.com/buildwithlogan',
      terms: '/terms',
      cookies: '/cookies'
    },
    // Social media
    social: {
      twitter: 'https://twitter.com/buildwithlogan',
      github: 'https://github.com/buildwithlogan',
      linkedin: 'https://linkedin.com/in/buildwithlogan'
    }
  }
} as const; 