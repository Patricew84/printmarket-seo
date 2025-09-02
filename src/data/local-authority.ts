import { LocalContextSection, ServiceItem, FAQ, Testimonial, PageGenerationConfig } from '@/types/seo';

// Cluster 1: Local Market Authority - 25,600 monthly searches
// URL Structure: /{location}/printing-services/{service}/{customer-type}

export const hyderabadLocations = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    description: 'Cyberabad - India\'s IT capital and major business hub',
    businessDistricts: ['HITEC City', 'Gachibowli', 'Financial District', 'Madhapur'],
    landmarks: ['Tank Bund', 'Charminar', 'Golconda Fort', 'Salar Jung Museum'],
    demographics: {
      population: '10 million+',
      businessCount: '50,000+',
      itCompanies: '2,000+',
      avgIncome: '₹8.5 lakhs'
    },
    localInsights: [
      'Major IT and pharmaceutical hub with global companies',
      'Home to Microsoft, Amazon, Google, and Facebook offices',
      'Fastest growing startup ecosystem in India',
      'Strong business networking culture requiring premium printing'
    ],
    searchVolume: 8500,
    competitiveStrength: 'high'
  },
  {
    id: 'gachibowli',
    name: 'Gachibowli',
    description: 'IT corridor heart with major tech companies',
    businessDistricts: ['DLF Cyber City', 'Mindspace', 'Raheja IT Park'],
    landmarks: ['Outer Ring Road', 'HITEC City Metro', 'T-Hub'],
    demographics: {
      population: '500,000+',
      businessCount: '5,000+',
      itCompanies: '300+',
      avgIncome: '₹12 lakhs'
    },
    localInsights: [
      'Heart of Hyderabad\'s IT industry with premium business requirements',
      'High concentration of multinational corporations',
      'Tech professionals requiring quality business materials',
      'Same-day delivery essential for time-sensitive corporate needs'
    ],
    searchVolume: 3200,
    competitiveStrength: 'medium'
  },
  {
    id: 'hitech-city',
    name: 'HITEC City',
    description: 'India\'s Silicon Valley with top IT companies',
    businessDistricts: ['Cyber Towers', 'IT Parks', 'Corporate Centers'],
    landmarks: ['Cyber Gateway', 'Inorbit Mall', 'Hitex'],
    demographics: {
      population: '300,000+',
      businessCount: '3,500+',
      itCompanies: '200+',
      avgIncome: '₹14 lakhs'
    },
    localInsights: [
      'India\'s leading IT destination with international standards',
      'High-value corporate clients requiring premium services',
      'Innovation hub demanding creative printing solutions',
      'Time-critical business environment with same-day expectations'
    ],
    searchVolume: 2800,
    competitiveStrength: 'medium'
  },
  {
    id: 'madhapur',
    name: 'Madhapur',
    description: 'Growing business district with startups and corporates',
    businessDistricts: ['IT Towers', 'Business Centers', 'Tech Parks'],
    landmarks: ['Image Hospital', 'Botanical Garden', 'Durgam Cheruvu'],
    demographics: {
      population: '200,000+',
      businessCount: '2,000+',
      itCompanies: '150+',
      avgIncome: '₹10 lakhs'
    },
    localInsights: [
      'Rapidly developing business hub with growing corporate needs',
      'Mix of startups and established companies',
      'Quality-conscious professionals requiring reliable services',
      'Strategic location connecting multiple IT corridors'
    ],
    searchVolume: 1800,
    competitiveStrength: 'low'
  },
  {
    id: 'kondapur',
    name: 'Kondapur',
    description: 'Residential-commercial hub with IT professionals',
    businessDistricts: ['Commercial Complexes', 'IT Centers'],
    landmarks: ['Shilparamam', 'GVK One Mall', 'Forum Sujana Mall'],
    demographics: {
      population: '180,000+',
      businessCount: '1,500+',
      itCompanies: '100+',
      avgIncome: '₹9 lakhs'
    },
    localInsights: [
      'Large IT professional residential area with business needs',
      'Growing small business and startup ecosystem',
      'Quality-focused market with premium expectations',
      'Convenience and speed highly valued'
    ],
    searchVolume: 1200,
    competitiveStrength: 'low'
  }
];

export const printingServices = [
  {
    id: 'business-card-printing',
    name: 'Business Card Printing',
    shortName: 'Business Cards',
    description: 'Premium business cards that make lasting impressions',
    specifications: [
      '350 GSM premium cardstock',
      '85mm × 55mm standard size',
      'Matte, glossy, or silk finish options',
      'CMYK + spot color printing',
      'Same-day printing available'
    ],
    pricing: {
      starting: 180,
      bulk: 120,
      premium: 350
    },
    deliveryTime: '6-24 hours',
    searchVolume: 4200,
    competitiveGap: 'high',
    localDemand: {
      business: 85,
      personal: 15
    }
  },
  {
    id: 'brochure-printing',
    name: 'Brochure Printing',
    shortName: 'Brochures',
    description: 'Professional brochures for marketing and corporate communications',
    specifications: [
      '250-300 GSM quality paper',
      'A4, A5, and custom sizes',
      'Tri-fold, bi-fold, and gate-fold options',
      'Full-color digital and offset printing',
      'Lamination and finishing available'
    ],
    pricing: {
      starting: 850,
      bulk: 450,
      premium: 1200
    },
    deliveryTime: '24-48 hours',
    searchVolume: 2800,
    competitiveGap: 'medium',
    localDemand: {
      business: 70,
      personal: 30
    }
  },
  {
    id: 'banner-printing',
    name: 'Banner Printing',
    shortName: 'Banners',
    description: 'Eye-catching banners for events, promotions, and displays',
    specifications: [
      'Vinyl, fabric, and paper materials',
      'Indoor and outdoor durability',
      'Custom sizes up to 20ft width',
      'Weather-resistant finishes',
      'Grommets and finishing options'
    ],
    pricing: {
      starting: 650,
      bulk: 450,
      premium: 1500
    },
    deliveryTime: '24-72 hours',
    searchVolume: 2200,
    competitiveGap: 'medium',
    localDemand: {
      business: 60,
      personal: 40
    }
  },
  {
    id: 'digital-printing',
    name: 'Digital Printing',
    shortName: 'Digital Prints',
    description: 'High-quality digital printing for documents and marketing materials',
    specifications: [
      '1200 DPI high-resolution output',
      'Various paper weights and finishes',
      'Small to medium volume runs',
      'Quick turnaround times',
      'Color management and proofing'
    ],
    pricing: {
      starting: 250,
      bulk: 180,
      premium: 500
    },
    deliveryTime: '2-24 hours',
    searchVolume: 3500,
    competitiveGap: 'high',
    localDemand: {
      business: 75,
      personal: 25
    }
  },
  {
    id: 'corporate-printing',
    name: 'Corporate Printing',
    shortName: 'Corporate Materials',
    description: 'Complete corporate printing solutions for businesses',
    specifications: [
      'Letterheads, envelopes, and stationery',
      'Annual reports and presentations',
      'Corporate branding consistency',
      'Premium paper and finishing',
      'Volume pricing and regular orders'
    ],
    pricing: {
      starting: 1200,
      bulk: 800,
      premium: 2500
    },
    deliveryTime: '24-48 hours',
    searchVolume: 1800,
    competitiveGap: 'high',
    localDemand: {
      business: 95,
      personal: 5
    }
  }
];

export const customerTypes = [
  {
    id: 'business',
    name: 'Business',
    description: 'Professional printing solutions for businesses and corporations',
    painPoints: [
      'Need for professional brand representation',
      'Time-sensitive delivery requirements',
      'Consistent quality across all materials',
      'Volume pricing for regular orders'
    ],
    preferences: [
      'Premium materials and finishes',
      'Corporate branding compliance',
      'Reliable delivery schedules',
      'Account management support'
    ],
    avgOrderValue: 2500,
    conversionRate: 4.2
  },
  {
    id: 'personal',
    name: 'Personal',
    description: 'Personal printing services for individuals and families',
    painPoints: [
      'Budget-conscious decision making',
      'Need for creative and unique designs',
      'Occasional printing requirements',
      'Quality expectations vs. cost balance'
    ],
    preferences: [
      'Flexible quantity options',
      'Design customization',
      'Competitive pricing',
      'Quick turnaround times'
    ],
    avgOrderValue: 850,
    conversionRate: 2.8
  }
];

// Local competitor analysis data
export const localCompetitors = [
  {
    name: 'Printland Hyderabad',
    weaknesses: ['Limited same-day service', 'Higher pricing for small orders', 'Basic website UX'],
    strengths: ['Established presence', 'Offline locations'],
    marketShare: 15
  },
  {
    name: 'Vistaprint India',
    weaknesses: ['No local presence', 'Longer delivery times', 'Generic templates'],
    strengths: ['Brand recognition', 'Online platform'],
    marketShare: 25
  },
  {
    name: 'Local Print Shops',
    weaknesses: ['No online presence', 'Limited quality control', 'Inconsistent pricing'],
    strengths: ['Local relationships', 'Personal service'],
    marketShare: 35
  }
];

// Generate FAQ data for local authority pages
export function generateLocalFAQs(location: string, service: string, customerType: string): FAQ[] {
  const locationData = hyderabadLocations.find(l => l.id === location);
  const serviceData = printingServices.find(s => s.id === service);
  
  if (!locationData || !serviceData) return [];

  return [
    {
      question: `How fast can I get ${serviceData.shortName.toLowerCase()} printed in ${locationData.name}?`,
      answer: `Same-day ${serviceData.shortName.toLowerCase()} printing available in ${locationData.name} with our express ${serviceData.deliveryTime} service. Order by 2 PM for same-day delivery throughout ${locationData.name} and surrounding areas.`,
      category: 'delivery'
    },
    {
      question: `What makes your ${serviceData.shortName.toLowerCase()} printing different in ${locationData.name}?`,
      answer: `Our ${locationData.name} ${serviceData.shortName.toLowerCase()} service combines 30+ years of local expertise with premium materials and in-house production. We understand ${locationData.name}'s business culture and deliver quality that matches the city's professional standards.`,
      category: 'quality'
    },
    {
      question: `Do you offer bulk discounts for ${serviceData.shortName.toLowerCase()} in ${locationData.name}?`,
      answer: `Yes, we offer up to 40% bulk discounts for ${serviceData.shortName.toLowerCase()} orders in ${locationData.name}. ${customerType === 'business' ? 'Corporate clients receive additional volume pricing and account management support.' : 'Personal customers can also benefit from quantity discounts.'}`,
      category: 'pricing'
    },
    {
      question: `Can you deliver ${serviceData.shortName.toLowerCase()} to ${locationData.name} business districts?`,
      answer: `Absolutely! We provide free delivery to all major ${locationData.name} business districts including ${locationData.businessDistricts.slice(0, 3).join(', ')}. Same-day delivery available for orders placed by 2 PM.`,
      category: 'delivery'
    }
  ];
}

// Generate local testimonials
export function generateLocalTestimonials(location: string, service: string, customerType: string): Testimonial[] {
  const locationData = hyderabadLocations.find(l => l.id === location);
  const serviceData = printingServices.find(s => s.id === service);
  
  if (!locationData || !serviceData) return [];

  const businessTestimonials = [
    {
      name: 'Rajesh Kumar',
      company: `${locationData.name} Tech Solutions`,
      quote: `Outstanding quality ${serviceData.shortName.toLowerCase()} with lightning-fast delivery in ${locationData.name}. They understand our business needs perfectly.`,
      rating: 5,
      service: serviceData.name
    },
    {
      name: 'Priya Sharma',
      company: `${locationData.name} Consulting`,
      quote: `Best ${serviceData.shortName.toLowerCase()} printing service in ${locationData.name}. Professional quality and reliable delivery every time.`,
      rating: 5,
      service: serviceData.name
    }
  ];

  const personalTestimonials = [
    {
      name: 'Anitha Reddy',
      company: `${locationData.name} Resident`,
      quote: `Excellent ${serviceData.shortName.toLowerCase()} quality at affordable prices. Quick service and beautiful results for our family event.`,
      rating: 5,
      service: serviceData.name
    },
    {
      name: 'Vikram Patel',
      company: `${locationData.name} Local`,
      quote: `Professional ${serviceData.shortName.toLowerCase()} printing with personal attention. Great value and fast turnaround in ${locationData.name}.`,
      rating: 5,
      service: serviceData.name
    }
  ];

  return customerType === 'business' ? businessTestimonials : personalTestimonials;
}

// Content generation configuration for Local Authority cluster
export const localAuthorityConfig: PageGenerationConfig = {
  cluster: 'local-authority',
  variables: {
    services: printingServices.map(s => s.id),
    locations: hyderabadLocations.map(l => l.id),
    variations: customerTypes.map(ct => ct.id)
  },
  template: {
    sections: {
      hero: {
        title: '{service} in {location} - Local Printing Expert Since 1990',
        subtitle: '30+ years serving {location} with premium printing solutions. Same-day delivery, guaranteed quality, and local expertise you can trust.',
        trustIndicators: ['30+ Years Local Experience', 'Same-Day Delivery', 'Premium Quality Guarantee', 'Local Business Partner'],
        ctaText: 'Get Instant Quote',
        ctaLink: 'https://www.printmarket.in/quote_create.php'
      },
      introduction: {
        opening: 'Professional {service} in {location} has never been more reliable and convenient.',
        authority: 'With 30+ years of award-winning printing excellence and deep understanding of {location} business culture, Printmarket.in delivers {service} that perfectly represents your brand.',
        capabilities: [
          'Local expertise with 30+ years serving {location} businesses',
          'Same-day printing and delivery throughout {location}',
          'Premium materials meeting {location} professional standards',
          'In-house production ensuring consistent quality control'
        ]
      },
      services: {
        title: '{service} Solutions for {location} {customerType}',
        services: [],
        features: [
          'Same-day printing available',
          'Free delivery in {location}',
          'Premium materials and finishes',
          'Local business expertise'
        ]
      },
      specifications: {
        title: 'Premium {service} Specifications',
        technicalSpecs: [],
        qualityStandards: [
          'ISO 9001 certified printing processes',
          'Premium paper and material selection',
          'Color accuracy and consistency guarantee',
          'Quality control at every production stage'
        ],
        materialOptions: []
      },
      localContext: {
        title: 'Why {location} Businesses Choose Our {service}',
        locationBenefits: [],
        targetAudience: '{location} {customerType}',
        localInsights: []
      },
      testimonials: {
        title: 'Success Stories from {location} Customers',
        testimonials: []
      },
      faq: {
        title: 'Frequently Asked Questions - {service} in {location}',
        faqs: []
      },
      cta: {
        title: 'Get Your {service} Printed in {location} Today',
        description: 'Join thousands of satisfied {location} customers. Professional {service} with same-day delivery guarantee.',
        primaryCTA: {
          text: 'Get Instant Quote',
          link: 'https://www.printmarket.in/quote_create.php',
          variant: 'primary'
        },
        secondaryCTA: {
          text: 'Call +91 9949925111',
          link: 'tel:+919949925111',
          variant: 'outline'
        },
        contactInfo: {
          phone: '+91 9949925111',
          whatsapp: '+91 9949925111',
          email: 'print@printmarket.in',
          quoteUrl: 'https://www.printmarket.in/quote_create.php'
        }
      }
    },
    seoElements: {
      title: '',
      metaDescription: '',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '',
        description: '',
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
          areaServed: 'Hyderabad'
        },
        serviceType: 'Printing Services'
      }
    }
  },
  seoConfig: {
    titleFormat: '{service} in {location} | Same-Day Printing | Printmarket.in',
    descriptionFormat: 'Professional {service} in {location} with same-day delivery. 30+ years local expertise, premium quality guaranteed.',
    urlFormat: '/{location}/printing-services/{service}/{customerType}/',
    keywords: ['{service}', '{location}', 'printing', 'same day', 'local', 'professional'],
    structuredDataType: 'Service'
  }
};