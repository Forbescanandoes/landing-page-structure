export const siteConfig = {
    // NavBar Text
    navbar: {
      menuItems: [
        { text: "Home" },
        { text: "Features" },
        { text: "Pricing" },
        { text: "FAq" }
      ]
    },
  
    // Hero Section Text
    hero: {
      headline: "Build Landing Pages",
      subheadline: " complete system for creating high-converting landing pages",
      ctaText: "Get Started"
    },
  
    // Social Proof Text
    socialProof: {
      headline: "Trusted by leading companies",
      stats: [
        { number: "1M-", label: "Active Users" },
        { number: "50K+", label: "Downloads" },
        { number: "99%", label: "Satisfaction" },
        { number: "24/7", label: "Support" }
      ]
    },
  
    // Features Section Text
    features: {
      headline: "Features",
      subheadline: "Everything you need to succeed",
      featureItems: [
        {
          title: "Feature 1",
          description: "Description of feature 1"
        },
        {
          title: "Feature 2",
          description: "Description of feature 2"
        },
        {
          title: "Feature 3",
          description: "Description of feature 3"
        }
      ],
      ctaText: "Get Started"
    },
  
    // Pricing Section Text
    pricing: {
      headline: "Simple Pricing",
      subheadline: "Choose the plan that's right for you",
      plans: [
        {
          name: "Basic",
          price: "$9",
          period: "/month",
          features: [
            "Feature 1",
            "Feature 2"
          ],
          ctaText: "Get Started"
        },
        {
          name: "Pro",
          price: "$29",
          period: "/month",
          features: [
            "Everything in Basic",
            "Pro Feature 1",
            "Pro Feature 2"
          ],
          ctaText: "Get Started"
        },
        {
          name: "Enterprise",
          price: "$99",
          period: "/month",
          features: [
            "Everything in Pro",
            "Enterprise Feature 1",
            "Enterprise Feature 2"
          ],
          ctaText: "Contact Sales"
        }
      ]
    },

    // Final CTA Section Text
    finalCTA: {
      headline: "Ready to get started?",
      subheadline: "Join thousands of satisfied customers today",
      ctaText: "Start Your Free Trial",
      ctaUrl: "https://your-payment-system.com/signup"
    },
  
    // FAQ Section Text
    faq: {
        headline: "Frequently Asked Questions",
        subheadline: "Everything you need to know",
        questions: [
          {
            question: "What is your return policy?",
            answer: "We offer a 30-day money-back guarantee for all our plans. No questions asked."
          },
          {
            question: "How do I get started?",
            answer: "Simply choose a plan that works for you and sign up. We'll guide you through the rest."
          },
          {
            question: "Can I change plans later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings."
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers in select regions."
          },
        // ... other FAQ items
      ]
    },
  
        // Footer Text
        footer: {
            companyText: "Building the future of web development, one component at a time.",
            copyright: "© 2024 Your Company. All rights reserved.",
            linkSections: [
              {
                title: "Quick Links",
                links: [
                  { text: "Home" },
                  { text: "Features" },
                  { text: "Pricing" },
                  { text: "FAQ" }
                ]
              },
              {
                title: "Legal",
                links: [
                  { text: "Privacy Policy" },
                  { text: "Terms of Service" },
                  { text: "Cookie Policy" }
                ]
              }
            ]
          }
        } as const
        
        export type SiteConfig = typeof siteConfig