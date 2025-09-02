import { PageMetadata, StructuredDataSchema } from '@/types/seo';

export function generateMetadata(
  title: string,
  description: string,
  keywords: string[],
  canonicalUrl: string,
  structuredData: StructuredDataSchema
): PageMetadata {
  return {
    title,
    description: description.slice(0, 155), // Ensure meta description is under 155 chars
    keywords: keywords.slice(0, 10), // Limit to 10 keywords
    canonicalUrl,
    structuredData
  };
}

export function generateStructuredData(
  name: string,
  description: string,
  serviceType: string,
  location: string,
  deliveryTime?: string
): StructuredDataSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Printmarket.in',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'India'
      },
      telephone: '+91-9949925111',
      email: 'print@printmarket.in',
      url: 'https://www.printmarket.in',
      areaServed: [location, 'Hyderabad', 'Telangana', 'Andhra Pradesh'],
      foundingDate: '1983',
      numberOfEmployees: '50-100'
    },
    serviceType,
    offers: deliveryTime ? {
      '@type': 'Offer',
      deliveryLeadTime: {
        '@type': 'Duration',
        duration: deliveryTime
      },
      availability: 'https://schema.org/InStock'
    } : undefined,
    areaServed: [location, 'Hyderabad', 'Telangana']
  };
}

export function replaceTemplateVariables(
  template: string,
  variables: Record<string, string>
): string {
  let result = template;
  
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{${key}}`, 'g');
    result = result.replace(regex, value);
  });
  
  return result;
}

export function generatePageUrl(
  cluster: string,
  industry: string,
  service: string,
  location: string,
  orderSize?: string
): string {
  const baseUrl = `/b2b/${industry}/${service}/${location}`;
  return orderSize ? `${baseUrl}/${orderSize}/` : `${baseUrl}/`;
}

export function generateSitemapEntry(
  url: string,
  priority: number = 0.8,
  changefreq: 'daily' | 'weekly' | 'monthly' = 'weekly'
) {
  return {
    url,
    lastModified: new Date().toISOString(),
    changeFrequency: changefreq,
    priority
  };
}

// SEO-friendly title generation
export function generateSEOTitle(
  service: string,
  industry: string,
  location: string,
  brand: string = 'Printmarket.in'
): string {
  // Capitalize first letters
  const formatString = (str: string) => 
    str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const formattedService = formatString(service);
  const formattedIndustry = formatString(industry);
  const formattedLocation = formatString(location);
  
  return `${formattedService} for ${formattedIndustry} Companies ${formattedLocation} | ${brand}`;
}

// Meta description generation with keyword optimization
export function generateMetaDescription(
  service: string,
  industry: string,
  location: string,
  benefits: string[] = ['Same-day delivery', '40+ years experience', 'Bulk discounts available']
): string {
  const formatString = (str: string) => 
    str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const formattedService = formatString(service);
  const formattedIndustry = formatString(industry);
  const formattedLocation = formatString(location);
  
  const benefitsText = benefits.slice(0, 3).join(', ');
  
  const description = `Professional ${formattedService.toLowerCase()} printing for ${formattedIndustry.toLowerCase()} companies in ${formattedLocation}. ${benefitsText}. Get quote now!`;
  
  return description.slice(0, 155);
}

// Keywords generation for SEO
export function generateKeywords(
  service: string,
  industry: string,
  location: string,
  additionalKeywords: string[] = []
): string[] {
  const baseKeywords = [
    service,
    `${service} printing`,
    `${industry} ${service}`,
    `${service} ${location}`,
    `${industry} printing ${location}`,
    'printing services',
    'same day printing',
    'bulk printing',
    'professional printing',
    location
  ];
  
  return [...baseKeywords, ...additionalKeywords].slice(0, 10);
}

// Core Web Vitals optimization helpers
export function optimizeImageLoading(src: string, alt: string, priority: boolean = false) {
  return {
    src,
    alt,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  };
}

// Performance optimization utilities
export function prefetchDNS() {
  return [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com'
  ];
}

export function getPreloadLinks() {
  return [
    { rel: 'preload', href: '/fonts/roboto-400.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/roboto-500.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/roboto-700.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ];
}