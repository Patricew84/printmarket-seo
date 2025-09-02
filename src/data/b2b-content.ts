import { KGNPartnership, PageGenerationConfig } from '@/types/seo';

// KGN Partnership Data
export const kgnPartnership: KGNPartnership = {
  branches: [
    {
      name: "Khairatabad",
      address: "Shop No. 6, Adjacent to GHMC Office, Hyderabad - 500004",
      phone: "+91 9618-911-044",
      email: "print@kgnxerox.com",
      services: ["Digital Printing", "Offset Printing", "Corporate Gifts"]
    },
    {
      name: "Gachibowli",
      address: "Verizon Capital, Opp. Royal Enfield, Near Axis Bank, Kondapur Road - 500032",
      phone: "+91 9618-911-099",
      email: "info@kgnxerox.com",
      services: ["Business Cards", "Marketing Materials", "T-shirt Printing"]
    },
    {
      name: "Manikonda",
      address: "Besides Avasa Hospital, Lanco Hills Rd - 500089",
      phone: "+91 8801-943-333",
      email: "lancoprints@gmail.com",
      services: ["Wedding Invitations", "Photo Frames", "Book Binding"]
    },
    {
      name: "Alkapur",
      address: "YSR Enclave, Plot No. 4 & 5, Puppalguda - 500089",
      phone: "+91 9618-911-022",
      email: "alkprints@gmail.com",
      services: ["Banners & Signages", "Mug Printing", "Labels & Stickers"]
    }
  ],
  experience: "40+ years since 1983",
  capabilities: [
    "State-of-the-art printing machinery",
    "Continuous technological upgrades",
    "100,000+ happy customers",
    "Digital and Offset printing expertise"
  ],
  trustSignals: [
    "Established 1983",
    "40+ Years Experience",
    "100,000+ Customers",
    "Service, Delivery, Quality"
  ]
};

// Industry-specific data
export const industries = [
  {
    id: 'technology',
    name: 'Technology',
    description: 'IT companies, startups, and tech corporations',
    pain_points: ['Rapid scaling needs', 'Professional brand image', 'Quick turnaround'],
    services: ['Business Cards', 'ID Cards & Lanyards', 'Corporate Gifts', 'Marketing Materials'],
    specializations: ['Employee onboarding kits', 'Conference materials', 'Product launches']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Hospitals, clinics, pharmaceutical companies',
    pain_points: ['Regulatory compliance', 'Patient communication', 'Professional credibility'],
    services: ['Labels & Stickers', 'Compliance materials', 'Office supplies', 'Marketing Materials'],
    specializations: ['Medical labels', 'Patient information brochures', 'Prescription pads']
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Banks, insurance, financial services',
    pain_points: ['Brand consistency', 'Regulatory materials', 'Customer trust building'],
    services: ['Business Cards', 'Marketing Materials', 'Corporate Stationery', 'Office Supplies'],
    specializations: ['Annual reports', 'Policy documents', 'Customer communications']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Industrial companies, factories, production facilities',
    pain_points: ['Industrial marking', 'Safety compliance', 'Supply chain coordination'],
    services: ['Labels & Stickers', 'Corporate Gifts', 'Signage Materials', 'Safety Materials'],
    specializations: ['Industrial labels', 'Safety signage', 'Equipment marking']
  },
  {
    id: 'education',
    name: 'Education & Training',
    description: 'Schools, universities, corporate training centers',
    pain_points: ['Educational materials', 'Student engagement', 'Professional development'],
    services: ['Office Supplies', 'Marketing Materials', 'ID Cards & Lanyards', 'Educational Materials'],
    specializations: ['Training manuals', 'Student ID systems', 'Educational brochures']
  }
];

// Location-specific data
export const locations = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    description: 'IT hub of India, major business center',
    business_districts: ['HITEC City', 'Gachibowli', 'Madhapur', 'Financial District'],
    local_insights: [
      'Major IT and pharmaceutical hub',
      '4+ KGN Xerox branches for local service',
      'Same-day delivery across the city',
      'Understanding of corporate culture and pace'
    ]
  },
  {
    id: 'gachibowli',
    name: 'Gachibowli',
    description: 'Major IT corridor with tech companies',
    business_districts: ['Tech Parks', 'IT Towers', 'Corporate Centers'],
    local_insights: [
      'Heart of Hyderabad\'s IT industry',
      'Direct KGN Xerox branch location',
      '2-hour express delivery for urgent needs',
      'Specialized in tech company requirements'
    ]
  },
  {
    id: 'hitech-city',
    name: 'HITEC City',
    description: 'Cyberabad IT epicenter',
    business_districts: ['IT Parks', 'Corporate Towers', 'Business Centers'],
    local_insights: [
      'India\'s leading IT destination',
      'Close proximity to KGN facilities',
      'Understanding of startup and enterprise needs',
      'Flexible ordering for growing companies'
    ]
  }
];

// Order size variations
export const orderSizes = [
  {
    id: 'bulk',
    name: 'Bulk Orders',
    description: '500+ quantities',
    benefits: ['Up to 25% bulk discounts', 'Dedicated account management', 'Flexible delivery schedules'],
    ideal_for: ['Large corporations', 'Chain businesses', 'Annual campaigns']
  },
  {
    id: 'medium',
    name: 'Medium Volume',
    description: '100-500 quantities',
    benefits: ['Competitive pricing', 'Quick turnaround', 'Quality consistency'],
    ideal_for: ['SMEs', 'Growing startups', 'Department orders']
  },
  {
    id: 'premium-small',
    name: 'Premium Small Batch',
    description: '25-100 quantities',
    benefits: ['No minimum order pressure', 'Premium quality focus', 'Personal attention'],
    ideal_for: ['Startups', 'Executive teams', 'Special projects']
  }
];

// Content generation configuration for B2B Corporate cluster
export const b2bCorporateConfig: PageGenerationConfig = {
  cluster: 'b2b-corporate',
  variables: {
    services: ['business-cards', 'office-supplies', 'corporate-gifts', 'marketing-materials', 'id-cards-lanyards', 'labels-stickers'],
    locations: ['hyderabad', 'gachibowli', 'hitech-city'],
    variations: ['bulk-orders', 'medium-volume', 'premium-small-batch'],
    industries: ['technology', 'healthcare', 'finance', 'manufacturing', 'education'],
    orderSizes: ['bulk', 'medium', 'premium-small']
  },
  template: {
    sections: {
      hero: {
        title: '{service} for {industry} Companies in {location} - 40+ Years Excellence',
        subtitle: 'Professional {service} printing with same-day delivery. Trusted by 100,000+ customers since 1983.',
        trustIndicators: ['40+ Years Experience', 'Same-Day Delivery', 'In-House Quality Control'],
        ctaText: 'Get Quote in 2 Minutes',
        ctaLink: 'https://www.printmarket.in/quote_create.php'
      },
      introduction: {
        opening: 'Professional {service} printing for {industry} companies in {location} has never been more reliable.',
        authority: 'With 40+ years of award-winning printing excellence and 4 strategic KGN Xerox locations across Hyderabad, Printmarket.in delivers {service} with same-day printing and guaranteed quality.',
        capabilities: [
          'In-house production facility eliminates outsourcing delays',
          '100,000+ satisfied customers across Telangana and Andhra Pradesh',
          'State-of-the-art printing technology with continuous upgrades',
          'Flexible minimum orders for businesses of all sizes'
        ]
      },
      services: {
        title: '{service} Solutions for {industry} Sector',
        services: [], // Will be populated based on industry
        features: [
          'Same-day printing available',
          'Bulk discounts up to 25%',
          'Free online design tools',
          'Professional quality guarantee'
        ]
      },
      specifications: {
        title: 'Technical Specifications & Quality Standards',
        technicalSpecs: [], // Industry-specific
        qualityStandards: [
          '300 DPI professional output resolution',
          'CMYK color accuracy with RGB support',
          'Premium paper and material options',
          'Offset and digital printing technologies'
        ],
        materialOptions: [] // Service-specific
      },
      localContext: {
        title: 'Why {location} {industry} Companies Choose Printmarket.in',
        locationBenefits: [], // Location-specific
        targetAudience: '{industry} companies in {location}',
        localInsights: [] // Location-specific insights
      },
      testimonials: {
        title: 'Success Stories from {industry} Companies',
        testimonials: [] // Industry-specific testimonials
      },
      faq: {
        title: 'Frequently Asked Questions - {service} for {industry}',
        faqs: [] // Service and industry-specific
      },
      cta: {
        title: 'Get Your {service} Printed Today',
        description: 'Join 100,000+ satisfied customers. Order your professional {service} with same-day printing guarantee.',
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
      title: '{service} for {industry} Companies {location} | Printmarket.in',
      metaDescription: 'Professional {service} printing for {industry} companies in {location}. Same-day delivery, 40+ years experience. Get quote now!',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '{service} Printing for {industry} Companies in {location}',
        description: 'Professional {service} printing services for {industry} sector with same-day delivery and 40+ years of expertise.',
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
          areaServed: ['Hyderabad', 'Telangana', 'Andhra Pradesh']
        },
        serviceType: 'Printing Services',
        offers: {
          '@type': 'Offer',
          deliveryLeadTime: {
            '@type': 'Duration',
            duration: 'PT24H'
          },
          availability: 'https://schema.org/InStock'
        }
      }
    }
  },
  seoConfig: {
    titleFormat: '{service} for {industry} Companies {location} | Printmarket.in',
    descriptionFormat: 'Professional {service} printing for {industry} companies in {location}. Same-day delivery, 40+ years experience, bulk discounts available.',
    urlFormat: '/b2b/{industry}/{service}/{location}/',
    keywords: ['{service}', '{industry}', '{location}', 'printing', 'same day', 'bulk orders'],
    structuredDataType: 'Service'
  }
};