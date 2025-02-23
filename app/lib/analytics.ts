// Google Analytics Configuration
// Replace GA_MEASUREMENT_ID with your actual GA4 measurement ID
// from Google Analytics > Admin > Data Streams

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// Validate GA ID is set
if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.trim() === '') {
  console.warn(
    'Please set NEXT_PUBLIC_GA_ID environment variable in .env file'
  );
}

// Validate GA ID format (starts with 'G-' for GA4)
if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.startsWith('G-')) {
  console.warn('Invalid GA4 Measurement ID format. Should start with "G-"');
}

// Analytics Event Types
export type AnalyticsEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// Improved tracking function with type safety and error handling
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: AnalyticsEvent) => {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Helper to check if GA is properly initialized
export const isGAInitialized = () => {
  return typeof window !== 'undefined' && !!(window as any).gtag;
};
