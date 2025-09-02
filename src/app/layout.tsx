import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./tailwind.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Printmarket.in - Hyderabad's Fastest Print Delivery",
    template: "%s | Printmarket.in"
  },
  description: "Professional printing services in Hyderabad with same-day delivery. 40+ years of excellence, bulk discounts available. Get instant quote now!",
  keywords: ["printing services", "Hyderabad printing", "same day printing", "business cards", "corporate gifts", "bulk printing"],
  authors: [{ name: "Printmarket.in" }],
  creator: "Printmarket.in",
  publisher: "Printmarket.in",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.printmarket.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.printmarket.in",
    siteName: "Printmarket.in",
    title: "Printmarket.in - Hyderabad's Fastest Print Delivery",
    description: "Professional printing services in Hyderabad with same-day delivery. 40+ years of excellence, bulk discounts available.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@printmarket_in",
    creator: "@printmarket_in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Printing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Preload critical resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme and mobile optimization */}
        <meta name="theme-color" content="#007BFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Printmarket.in" />
        
        {/* Geographic and business info */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}