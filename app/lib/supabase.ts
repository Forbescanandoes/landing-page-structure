// Supabase Configuration
// Replace these with your own values from your Supabase project
// https://supabase.com/dashboard/project/_/settings/api

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'your-project-url',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key',
}

// Example usage in components:
// import { supabaseConfig } from '@/lib/supabase'
