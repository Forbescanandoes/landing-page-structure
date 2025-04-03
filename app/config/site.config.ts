/**
 * This configuration file controls all text content displayed on the landing page.
 * Edit the values below to update the text throughout your site.
 */

export const siteConfig = {
  // Site metadata
  name: 'AI UI Kit',
  description: 'Ship AI-powered SaaS pages that convert.',

  // Navigation text
  nav: {
    links: ['Features', 'Pricing', 'FAQ', 'Contact'],
    button: 'Ship Your AI SaaS'
  },

  // Hero section
  hero: {
    headline: 'Ship AI-Powered SaaS Pages That Convert',
    subheadline: 'Built for technical founders who code. Clean, scalable components that deploy in minutes.',
    button: 'Get Started Now'
  },

  // Features section
  features: {
    headline: 'Everything you need to ship faster',
    subheadline: 'Built with modern tools and best practices to help you create beautiful landing pages in minutes.',
    featureItems: [
      {
        title: 'AI-Ready Components',
        description: 'Pre-built components optimized for AI interfaces. Chat windows, streaming responses, and loading states included.'
      },
      {
        title: 'TypeScript Pure',
        description: 'Zero any, full type safety. Built with modern TypeScript practices for reliable, maintainable code.'
      },
      {
        title: 'Mobile-First Design',
        description: 'Perfect on all screens. Responsive AI interfaces that work flawlessly from mobile to desktop.'
      }
    ]
  },

  // Social proof section
  socialProof: {
    headline: 'Trusted by innovative AI companies',
    stats: [
      { value: '500+', label: 'AI SaaS Pages Live' },
      { value: '98%', label: 'Faster Development' },
      { value: '100%', label: 'TypeScript Clean' },
      { value: '24/7', label: 'Dev Support' }
    ]
  },

  // Pricing section
  pricing: {
    headline: 'Simple, Transparent Pricing',
    subheadline: 'Choose the plan that matches your AI SaaS needs.',
    plans: [
      {
        name: 'Basic',
        price: '$99',
        period: '/month',
        features: [
          'All core AI components',
          'Basic customization',
          'TypeScript support',
          'Email support',
          'Basic streaming UI'
        ],
        button: 'Get Started'
      },
      {
        name: 'Pro',
        price: '$199',
        period: '/month',
        features: [
          'Everything in Basic',
          'Advanced AI components',
          'Priority support',
          'Custom branding',
          'Advanced streaming UI',
          'Team collaboration'
        ],
        button: 'Get Pro'
      },
      {
        name: 'Enterprise',
        price: '$499',
        period: '/month',
        features: [
          'Everything in Pro',
          'Custom development',
          '24/7 support',
          'White-label license',
          'Custom integrations',
          'Advanced analytics',
          'Team training'
        ],
        button: 'Contact Sales'
      }
    ]
  },

  // FAQ section
  faq: {
    headline: "Frequently Asked Questions",
    subheadline: "Everything you need to know about the AI UI Kit",
    questions: [
      {
        question: "Can I customize the components?",
        answer: "Yes, all components are built with customization in mind. You can easily modify colors, styles, and functionality using Tailwind CSS and TypeScript."
      },
      {
        question: "Is this compatible with Next.js 14?",
        answer: "Yes, our UI kit is fully compatible with Next.js 14 and uses the latest features like Server Components and Server Actions."
      },
      {
        question: "Does it support streaming responses?",
        answer: "Yes, we provide built-in support for streaming responses from AI models, with loading states and error handling included."
      },
      {
        question: "What kind of support do you offer?",
        answer: "We offer comprehensive documentation, code examples, and priority email support for all customers."
      }
    ]
  },

  // Final Call to action section
  finalCTA: {
    headline: 'Ready to Ship Your AI SaaS?',
    subheadline: 'Join successful founders who ship faster with our components.',
    ctaText: 'Get Started Now',
    ctaUrl: '#get-started',
    secondaryCtaText: 'Schedule a Demo',
    trialText: 'No credit card required • 14-day free trial • Cancel anytime'
  },

  // Footer text
  footer: {
    companyText: "Building the future of AI interfaces",
    copyright: "© 2024 AI UI Kit. All rights reserved.",
    quickLinks: ["Home", "Features", "Pricing", "About"],
    legal: ["Privacy", "Terms", "License"],
    social: ["Twitter", "GitHub", "Discord"]
  }
} as const;