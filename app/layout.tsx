import type { Metadata } from 'next';
import { JetBrains_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from './config/site.config';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

// Font configurations
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${ibmPlexSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans antialiased">
        <div className="relative">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 pointer-events-none" />

          {/* Content */}
          <div className="relative">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
