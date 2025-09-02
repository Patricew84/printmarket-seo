// Programmatic SEO Data Structure
// Based on Cluster 1: Local Market Authority from strategy document

export interface LocationData {
  slug: string;
  name: string;
  displayName: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  businessDistricts: string[];
  landmarks: string[];
  industries: string[];
  description: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  displayName: string;
  category: 'business-materials' | 'marketing-materials' | 'personal-services' | 'digital-services';
  backgroundImage: string;
  description: string;
  features: string[];
  priceRange: string;
  turnaround: string;
  urgentAvailable: boolean;
  b2bFocus: boolean;
  b2cFocus: boolean;
}

export interface CustomerTypeData {
  slug: string;
  name: string;
  displayName: string;
  painPoints: string[];
  solutions: string[];
  benefits: string[];
}

// Cluster 1: Local Market Authority Data
export const locations: LocationData[] = [
  {
    slug: 'hyderabad',
    name: 'hyderabad',
    displayName: 'Hyderabad',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    businessDistricts: ['HITEC City', 'Financial District', 'Gachibowli'],
    landmarks: ['Charminar', 'Golkonda Fort', 'Hussain Sagar'],
    industries: ['IT', 'Pharmaceuticals', 'Biotechnology', 'Aerospace'],
    description: 'The city of pearls and India\'s major IT hub'
  },
  {
    slug: 'gachibowli',
    name: 'gachibowli',
    displayName: 'Gachibowli',
    coordinates: { lat: 17.4435, lng: 78.3479 },
    businessDistricts: ['IT Corridor', 'DLF Cyber City', 'Mindspace'],
    landmarks: ['Gachibowli Metro', 'DLF Mall', 'T-Hub'],
    industries: ['Information Technology', 'Startups', 'Financial Services'],
    description: 'Hyderabad\'s premier IT and business district'
  },
  {
    slug: 'hitech-city',
    name: 'hitech-city',
    displayName: 'HITEC City',
    coordinates: { lat: 17.4483, lng: 78.3795 },
    businessDistricts: ['HITEC City', 'Cyber Towers', 'IT Park'],
    landmarks: ['Cyber Towers', 'Shilparamam', 'Durgam Cheruvu'],
    industries: ['Software Development', 'IT Services', 'Tech Startups'],
    description: 'India\'s Silicon Valley and technology capital'
  },
  {
    slug: 'madhapur',
    name: 'madhapur',
    displayName: 'Madhapur',
    coordinates: { lat: 17.4475, lng: 78.3918 },
    businessDistricts: ['Ayyappa Society', 'Botanical Garden Road', 'Image Gardens'],
    landmarks: ['Botanical Garden', 'JNTU', 'Ayyappa Temple'],
    industries: ['Education', 'IT Services', 'Residential Commercial'],
    description: 'Educational hub with growing commercial presence'
  },
  {
    slug: 'kondapur',
    name: 'kondapur',
    displayName: 'Kondapur',
    coordinates: { lat: 17.4620, lng: 78.3648 },
    businessDistricts: ['Kothaguda', 'Manikonda', 'Nanakramguda'],
    landmarks: ['Kondapur Metro', 'Forum Mall', 'Botanical Garden'],
    industries: ['IT Companies', 'Residential Services', 'Retail'],
    description: 'Rapidly developing IT corridor extension'
  },
  {
    slug: 'jubilee-hills',
    name: 'jubilee-hills',
    displayName: 'Jubilee Hills',
    coordinates: { lat: 17.4239, lng: 78.4738 },
    businessDistricts: ['Road No. 36', 'Film Nagar', 'Banjara Hills Border'],
    landmarks: ['Apollo Hospitals', 'KBR Park', 'Jubilee Hills Club'],
    industries: ['Healthcare', 'Entertainment', 'Luxury Services'],
    description: 'Premium residential and business district'
  },
  {
    slug: 'banjara-hills',
    name: 'banjara-hills',
    displayName: 'Banjara Hills',
    coordinates: { lat: 17.4126, lng: 78.4569 },
    businessDistricts: ['Road No. 12', 'Road No. 1', 'Panjagutta'],
    landmarks: ['GVK One Mall', 'KBR Park', 'Buddha Statue'],
    industries: ['Banking', 'Corporate Offices', 'Luxury Retail'],
    description: 'Upscale commercial and residential area'
  },
  {
    slug: 'secunderabad',
    name: 'secunderabad',
    displayName: 'Secunderabad',
    coordinates: { lat: 17.5040, lng: 78.5434 },
    businessDistricts: ['SP Road', 'Marredpally', 'Trimulgherry'],
    landmarks: ['Secunderabad Station', 'Hussain Sagar', 'Clock Tower'],
    industries: ['Government', 'Railways', 'Defense', 'Trade'],
    description: 'Twin city administrative and commercial center'
  },
  {
    slug: 'ameerpet',
    name: 'ameerpet',
    displayName: 'Ameerpet',
    coordinates: { lat: 17.4372, lng: 78.4482 },
    businessDistricts: ['SR Nagar', 'Punjagutta', 'Erragadda'],
    landmarks: ['Metro Station', 'Durgam Cheruvu', 'Ameerpet X Roads'],
    industries: ['Education', 'Training Institutes', 'Small Business'],
    description: 'Educational and training hub of Hyderabad'
  },
  {
    slug: 'kukatpally',
    name: 'kukatpally',
    displayName: 'Kukatpally',
    coordinates: { lat: 17.4840, lng: 78.4071 },
    businessDistricts: ['KPHB', 'Moosapet', 'JNTU'],
    landmarks: ['JNTU College', 'Kukatpally Metro', 'KPHB Colony'],
    industries: ['Education', 'Residential Services', 'Small Scale Industries'],
    description: 'Growing residential and educational center'
  }
];

export const services: ServiceData[] = [
  {
    slug: 'business-card-printing',
    name: 'business-card-printing',
    displayName: 'Business Card Printing',
    category: 'business-materials',
    backgroundImage: '/images/business-card-samples.jpg',
    description: 'Professional business card printing with premium materials and express delivery options',
    features: ['Premium materials', 'Express delivery available', '300GSM quality', 'Multiple finishes'],
    priceRange: '₹200-3000',
    turnaround: '3-24 hours',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: true
  },
  {
    slug: 'brochure-printing',
    name: 'brochure-printing',
    displayName: 'Brochure Printing',
    category: 'marketing-materials',
    backgroundImage: '/images/products/Brochure.webp',
    description: 'High-quality brochure printing for marketing and corporate communications',
    features: ['Tri-fold & Bi-fold options', 'Glossy & Matte finishes', 'Bulk discounts up to 40%', 'Design support'],
    priceRange: '₹66-2500',
    turnaround: '6-48 hours',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: true
  },
  {
    slug: 'banner-printing',
    name: 'banner-printing',
    displayName: 'Banner Printing',
    category: 'marketing-materials',
    backgroundImage: '/images/products/Banner.png.webp',
    description: 'Large format banner printing for events, promotions, and advertising',
    features: ['Weather-resistant materials', 'Large format printing', 'Indoor/Outdoor options', 'Same-day available'],
    priceRange: '₹70-5000',
    turnaround: '6-24 hours',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: true
  },
  {
    slug: 'flyer-printing',
    name: 'flyer-printing',
    displayName: 'Flyer Printing',
    category: 'marketing-materials',
    backgroundImage: '/images/products/Flyers.jpg.webp',
    description: 'Cost-effective flyer printing for promotions and marketing campaigns',
    features: ['Bulk quantity discounts', 'Multiple paper options', 'Fast turnaround', 'Design assistance'],
    priceRange: '₹35-1500',
    turnaround: '6-24 hours',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: true
  },
  {
    slug: 'digital-printing',
    name: 'digital-printing',
    displayName: 'Digital Printing',
    category: 'digital-services',
    backgroundImage: '/images/products/Business Cards Premium.png.webp',
    description: 'Advanced digital printing services for high-quality, short-run printing needs',
    features: ['High-resolution output', 'Variable data printing', 'Quick setup', 'Cost-effective for small runs'],
    priceRange: '₹200-5000',
    turnaround: '3-24 hours',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: true
  },
  {
    slug: 'wedding-cards',
    name: 'wedding-cards',
    displayName: 'Wedding Card Printing',
    category: 'personal-services',
    backgroundImage: '/images/products/Wedding cards.webp',
    description: 'Elegant wedding invitation printing with traditional and modern designs',
    features: ['Custom designs', 'Premium papers', 'Traditional & Modern styles', 'Minimum 4 cards'],
    priceRange: '₹10-500',
    turnaround: '3-7 days',
    urgentAvailable: false,
    b2bFocus: false,
    b2cFocus: true
  },
  {
    slug: 'corporate-printing',
    name: 'corporate-printing',
    displayName: 'Corporate Printing',
    category: 'business-materials',
    backgroundImage: '/images/products/Corporate Kit.webp',
    description: 'Complete corporate printing solutions including letterheads, envelopes, and folders',
    features: ['Brand consistency', 'Bulk discounts up to 40%', 'Corporate packages', 'Professional quality'],
    priceRange: '₹1000-25000',
    turnaround: '1-3 days',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: false
  },
  {
    slug: 'bulk-printing',
    name: 'bulk-printing',
    displayName: 'Bulk Printing',
    category: 'business-materials',
    backgroundImage: '/images/products/Corporate Kit.webp',
    description: 'Large volume printing services with competitive pricing and quality assurance',
    features: ['Volume discounts up to 40%', 'Quality consistency', 'Dedicated support', 'Flexible scheduling'],
    priceRange: '₹5000-100000',
    turnaround: '2-5 days',
    urgentAvailable: false,
    b2bFocus: true,
    b2cFocus: false
  },
  {
    slug: 'sticker-printing',
    name: 'sticker-printing',
    displayName: 'Sticker Printing',
    category: 'marketing-materials',
    backgroundImage: '/images/products/Sticker.webp',
    description: 'Custom sticker printing for branding, packaging, and promotional purposes',
    features: ['Waterproof options', 'Die-cut shapes', 'Adhesive varieties', 'Bulk quantities'],
    priceRange: '₹200-2000',
    turnaround: '6-24 hours',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: true
  },
  {
    slug: 'poster-printing',
    name: 'poster-printing',
    displayName: 'Poster Printing',
    category: 'marketing-materials',
    backgroundImage: '/images/poster-printing-bg.jpg',
    description: 'High-quality poster printing for advertising, events, and decorative purposes',
    features: ['Multiple sizes', 'Photo quality', 'Lamination options', 'Bulk discounts'],
    priceRange: '₹100-1000',
    turnaround: '6-24 hours',
    urgentAvailable: true,
    b2bFocus: true,
    b2cFocus: true
  }
];

export const customerTypes: CustomerTypeData[] = [
  {
    slug: 'business',
    name: 'business',
    displayName: 'Business',
    painPoints: [
      'Need professional quality for brand image',
      'Tight deadlines and urgent requirements',
      'Consistent quality across bulk orders',
      'Cost-effective pricing for regular orders'
    ],
    solutions: [
      'Premium materials and professional finishing',
      'Same-day and express delivery options',
      'Quality assurance and consistency guarantee',
      'Volume discounts and corporate pricing'
    ],
    benefits: [
      'Enhance professional brand image',
      'Meet urgent business deadlines',
      'Consistent quality for brand standards',
      'Cost-effective bulk ordering'
    ]
  },
  {
    slug: 'personal',
    name: 'personal',
    displayName: 'Personal',
    painPoints: [
      'Limited budget for personal printing needs',
      'Need guidance on design and materials',
      'Occasional urgent requirements',
      'Want personalized and custom solutions'
    ],
    solutions: [
      'Budget-friendly options without compromising quality',
      'Free design consultation and support',
      'Express services for urgent personal needs',
      'Custom design and personalization options'
    ],
    benefits: [
      'Affordable quality printing solutions',
      'Professional design guidance and support',
      'Quick solutions for urgent personal needs',
      'Unique and personalized printing options'
    ]
  }
];

// KGN Xerox Office Locations for "Close to you" section
export interface OfficeLocation {
  area: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  servingAreas: string[];
}

export const kgnOfficeLocations: OfficeLocation[] = [
  {
    area: 'Khairatabad',
    address: 'Shop No. 6, Adjacent to GHMC Office, Khairatabad, Hyderabad - 500004',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    servingAreas: ['Khairatabad', 'Ameerpet', 'Somajiguda', 'Panjagutta', 'Hyderabad']
  },
  {
    area: 'Gachibowli',
    address: 'Verizon Capital, Opp. Royal Enfield Show Room, Near Axis Bank, Kondapur Road, Gachibowli, Hyderabad – 500032',
    coordinates: { lat: 17.4435, lng: 78.3479 },
    servingAreas: ['Gachibowli', 'HITEC City', 'Kondapur', 'Financial District', 'Madhapur']
  },
  {
    area: 'Manikonda',
    address: 'Besides Avasa Hospital, Lanco Hills Rd, Manikonda Jagir, Telangana 500089',
    coordinates: { lat: 17.4017, lng: 78.3834 },
    servingAreas: ['Manikonda', 'Narsingi', 'Gachibowli', 'Shaikpet', 'Tolichowki']
  },
  {
    area: 'Alkapur',
    address: 'YSR Enclave, Alkapur, #Plot No. 4 & 5, Survey No. 115 Puppalguda, Near 7 Tombs Rd, Cyberabad, Telangana 500089',
    coordinates: { lat: 17.3908, lng: 78.3336 },
    servingAreas: ['Alkapur', 'Puppalguda', 'Rajendra Nagar', 'Kokapet', 'Nanakramguda']
  }
];

// Find closest office based on location
export function findClosestOffice(locationSlug: string): OfficeLocation[] {
  const location = locations.find(l => l.slug === locationSlug);
  if (!location) return kgnOfficeLocations;

  // Simple logic to return relevant offices based on location
  const relevantOffices = kgnOfficeLocations.filter(office => 
    office.servingAreas.some(area => 
      area.toLowerCase().includes(location.name.toLowerCase()) ||
      location.businessDistricts.some(district => 
        district.toLowerCase().includes(area.toLowerCase())
      )
    )
  );

  return relevantOffices.length > 0 ? relevantOffices : [kgnOfficeLocations[0]]; // Default to Khairatabad
}

// Generate all URL combinations for Cluster 1
export function generateCluster1URLs(): string[] {
  const urls: string[] = [];
  
  locations.forEach(location => {
    services.forEach(service => {
      customerTypes.forEach(customerType => {
        // Filter based on service focus
        if (
          (customerType.slug === 'business' && service.b2bFocus) ||
          (customerType.slug === 'personal' && service.b2cFocus)
        ) {
          urls.push(`/${location.slug}/printing-services/${service.slug}/${customerType.slug}`);
        }
      });
    });
  });
  
  return urls;
}

// Get page data for a specific combination
export function getPageData(locationSlug: string, serviceSlug: string, customerTypeSlug: string) {
  const location = locations.find(l => l.slug === locationSlug);
  const service = services.find(s => s.slug === serviceSlug);
  const customerType = customerTypes.find(c => c.slug === customerTypeSlug);
  
  if (!location || !service || !customerType) {
    return null;
  }
  
  return {
    location,
    service,
    customerType,
    url: `/${locationSlug}/printing-services/${serviceSlug}/${customerTypeSlug}`,
    title: `${service.displayName} in ${location.displayName} - ${customerType.displayName} | Printmarket.in`,
    description: `Professional ${service.displayName.toLowerCase()} in ${location.displayName} for ${customerType.displayName.toLowerCase()} customers. ${service.description}. Starting ${service.priceRange}.`,
    keywords: [
      `${service.slug.replace('-', ' ')} ${location.name}`,
      `${customerType.name} ${service.slug.replace('-', ' ')}`,
      `printing services ${location.name}`,
      `${service.name} ${location.name} ${customerType.name}`,
      'printmarket.in',
      'same day printing',
      'professional printing'
    ]
  };
}

// Generate FAQ data based on page context
export function generateFAQs(location: LocationData, service: ServiceData, customerType: CustomerTypeData) {
  return [
    {
      question: `What makes your ${service.displayName.toLowerCase()} different in ${location.displayName}?`,
      answer: `Our ${service.displayName.toLowerCase()} in ${location.displayName} combines KGN Xerox's 40+ years of printing excellence with modern digital convenience. We offer ${service.features.join(', ').toLowerCase()} specifically tailored for ${customerType.displayName.toLowerCase()} customers in ${location.displayName}.`
    },
    {
      question: `How fast can you deliver ${service.displayName.toLowerCase()} in ${location.displayName}?`,
      answer: `${service.urgentAvailable 
        ? `Same-day ${service.displayName.toLowerCase()} available in ${location.displayName} with our express service. Standard turnaround is ${service.turnaround}.`
        : `Standard ${service.displayName.toLowerCase()} delivery in ${location.displayName} is ${service.turnaround} with express options available.`
      }`
    },
    {
      question: `What are the pricing options for ${customerType.displayName.toLowerCase()} ${service.displayName.toLowerCase()}?`,
      answer: `${service.displayName} pricing for ${customerType.displayName.toLowerCase()} customers starts from ${service.priceRange}, with bulk discounts available. Contact us for customized quotes based on your specific requirements in ${location.displayName}.`
    },
    {
      question: `Do you serve all areas in ${location.displayName}?`,
      answer: `Yes, we provide ${service.displayName.toLowerCase()} delivery throughout ${location.displayName}, including ${location.businessDistricts.join(', ')}, with same-day service available in most areas.`
    }
  ];
}