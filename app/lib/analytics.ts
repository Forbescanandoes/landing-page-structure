// Google Analytics Configuration
// Replace GA_MEASUREMENT_ID with your actual GA4 measurement ID
// from Google Analytics > Admin > Data Streams

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

// Analytics Event Types
export type AnalyticsEvent = {
  action: string
  category: string
  label: string
  value?: number
}

// Example tracking function
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}