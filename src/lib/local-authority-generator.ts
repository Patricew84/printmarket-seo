import { 
  hyderabadLocations, 
  printingServices, 
  generateLocalFAQs
} from '@/data/local-authority';
import type { Metadata } from 'next';

export interface LocalAuthorityPageProps {
  location: string;
  service: string;
}

export interface LocalPageData {
  location: {
    id: string;
    name: string;
    businessDistricts: string[];
    demographics: {
      population: string;
      businessCount: string;
      itCompanies: string;
      avgIncome: string;
    };
    localInsights: string[];
  };
  service: {
    id: string;
    name: string;
    description: string;
    specifications: string[];
    pricing: {
      starting: number;
      bulk: number;
      premium: number;
    };
    deliveryTime: string;
  };
  demographics: {
    business_districts: string[];
    target_demographics: string[];
  };
  pricing: {
    starting_price: number;
    competitive_advantage: string;
  };
  specifications?: {
    paper_types?: string[];
    finish_options?: string[];
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export function generateLocalAuthorityPageData(location: string, service: string): LocalPageData | null {
  const locationData = hyderabadLocations.find(loc => loc.id === location);
  const serviceData = printingServices.find(svc => svc.id === service);
  
  if (!locationData || !serviceData) return null;

  return {
    location: {
      id: locationData.id,
      name: locationData.name,
      businessDistricts: locationData.businessDistricts,
      demographics: locationData.demographics,
      localInsights: locationData.localInsights
    },
    service: {
      id: serviceData.id,
      name: serviceData.name,
      description: serviceData.description,
      specifications: serviceData.specifications,
      pricing: serviceData.pricing,
      deliveryTime: serviceData.deliveryTime
    },
    demographics: {
      business_districts: locationData.businessDistricts,
      target_demographics: ['business', 'personal']
    },
    pricing: {
      starting_price: serviceData.pricing.starting,
      competitive_advantage: `Premium quality ${serviceData.name.toLowerCase()} with same-day delivery and 40+ years experience`
    },
    specifications: {
      paper_types: serviceData.specifications.slice(0, 3),
      finish_options: serviceData.specifications.slice(3, 6)
    },
    faqs: generateLocalFAQs(location, service, 'business')
  };
}

export function generateLocalAuthorityMetadata(
  location: string,
  service: string,
  pageData: LocalPageData
): Metadata {
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);
  const serviceName = service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, ' ');
  
  const title = `${serviceName} Services in ${locationName} | Printmarket.in`;
  const description = `Professional ${serviceName.toLowerCase()} services in ${locationName}. ${pageData.pricing.competitive_advantage}. Same-day delivery available. Get instant quote now!`;
  
  const localKeywords = [
    `${serviceName.toLowerCase()} ${locationName.toLowerCase()}`,
    `${locationName.toLowerCase()} printing services`,
    `${serviceName.toLowerCase()} near me`,
    `same day ${serviceName.toLowerCase()}`,
    `bulk ${serviceName.toLowerCase()} ${locationName.toLowerCase()}`,
    `professional ${serviceName.toLowerCase()}`
  ];

  return {
    title,
    description,
    keywords: localKeywords,
    openGraph: {
      title,
      description,
      url: `https://www.printmarket.in/local/${location}/${service}`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Printmarket.in',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/local/${location}/${service}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStructuredData(location: string, service: string, pageData: LocalPageData) {
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);
  const serviceName = service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, ' ');
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.printmarket.in/#organization",
    "name": "Printmarket.in",
    "alternateName": "KGN Xerox",
    "url": "https://www.printmarket.in",
    "logo": "https://www.printmarket.in/logo.png",
    "description": `Professional printing services in ${locationName} with same-day delivery`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": pageData.demographics.business_districts[0],
      "addressLocality": locationName,
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.3850",
      "longitude": "78.4867"
    },
    "telephone": "+91-40-4033-4033",
    "priceRange": "₹",
    "openingHours": "Mo-Sa 09:00-19:00"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} Services in ${locationName}`,
    "description": `Professional ${serviceName.toLowerCase()} services with same-day delivery in ${locationName}`,
    "provider": {
      "@id": "https://www.printmarket.in/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "offers": {
      "@type": "Offer",
      "price": `₹${pageData.pricing.starting_price}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.printmarket.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Local Services",
        "item": "https://www.printmarket.in/local"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": locationName,
        "item": `https://www.printmarket.in/local/${location}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": serviceName,
        "item": `https://www.printmarket.in/local/${location}/${service}`
      }
    ]
  };

  return {
    organizationSchema,
    serviceSchema,
    breadcrumbSchema
  };
}

export function generateLocalInsights(location: string): string[] {
  const locationData = hyderabadLocations.find(loc => loc.id === location);
  if (!locationData) return [];

  const minPrice = Math.min(...printingServices.map(s => s.pricing.starting));

  return [
    `${locationData.businessDistricts.length} major business districts served`,
    `${locationData.demographics.businessCount} businesses in the region`,
    `Competitive pricing starting from ₹${minPrice}`,
    `Same-day delivery across ${locationData.name}`,
    `40+ years of printing excellence in the region`
  ];
}