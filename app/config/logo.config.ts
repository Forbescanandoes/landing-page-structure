export const logoConfig = {
  // Main brand logo (used in light backgrounds)
  primary: {
    src: '/logos/placeholder-logo.svg' as const,  // Simple, direct path
    alt: 'Company Logo',
    width: 120,
    height: 40
  }
} as const

export type LogoConfig = typeof logoConfig 