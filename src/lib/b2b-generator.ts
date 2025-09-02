import { B2BPageData, ServiceItem, FAQ, Testimonial } from '@/types/seo';
import { industries, locations, orderSizes, kgnPartnership } from '@/data/b2b-content';
import { 
  generateMetadata, 
  generateStructuredData, 
  replaceTemplateVariables,
  generateSEOTitle,
  generateMetaDescription,
  generateKeywords
} from './seo';

// Service-specific data for different industries
const serviceData: Record<string, Record<string, ServiceItem[]>> = {
  'business-cards': {
    'technology': [
      {
        name: 'Premium Tech Business Cards',
        description: 'Professional networking cards designed for IT professionals, startup founders, and tech executives.',
        specifications: [
          '350 GSM premium cardstock',
          '85mm × 55mm standard size',
          'Matte or glossy finish options',
          'Full-color CMYK printing',
          'Rounded corner options available'
        ],
        pricing: 'Starting ₹180 for 100 cards',
        deliveryTime: 'Same-day printing, 6-24 hour delivery'
      },
      {
        name: 'Startup Founder Cards',
        description: 'Minimalist, modern designs perfect for tech entrepreneurs and startup teams.',
        specifications: [
          '300 GSM eco-friendly paper',
          'Clean, minimal design templates',
          'QR code integration available',
          'Digital contact sharing options',
          'Bulk discounts for team orders'
        ],
        pricing: 'Starting ₹150 for 50 cards',
        deliveryTime: '6-hour express printing available'
      }
    ],
    'healthcare': [
      {
        name: 'Medical Professional Cards',
        description: 'Trust-building business cards for doctors, healthcare providers, and medical institutions.',
        specifications: [
          '400 GSM premium quality',
          'Antibacterial coating options',
          'Professional medical templates',
          'Specialty and credentials highlighting',
          'Appointment booking QR codes'
        ],
        pricing: 'Starting ₹220 for 100 cards',
        deliveryTime: 'Same-day printing available'
      }
    ],
    'finance': [
      {
        name: 'Financial Services Cards',
        description: 'Professional cards that build trust and credibility in the financial sector.',
        specifications: [
          '350 GSM premium cardstock',
          'Security features available',
          'Professional color schemes',
          'Compliance-friendly designs',
          'Embossed options for premium feel'
        ],
        pricing: 'Starting ₹200 for 100 cards',
        deliveryTime: '24-48 hour delivery'
      }
    ]
  },
  'corporate-gifts': {
    'technology': [
      {
        name: 'Tech Company Branded Items',
        description: 'Custom branded merchandise for employee appreciation, client gifts, and corporate events.',
        specifications: [
          'Custom logo printing on various items',
          'USB drives, tech accessories, apparel',
          'Employee welcome kits',
          'Conference and event giveaways',
          'Bulk packaging options'
        ],
        pricing: 'Starting ₹500 per item',
        deliveryTime: '3-5 days production time'
      }
    ],
    'healthcare': [
      {
        name: 'Medical Institution Gifts',
        description: 'Professional gifts for medical conferences, patient appreciation, and staff recognition.',
        specifications: [
          'Medical-themed promotional items',
          'Health awareness materials',
          'Conference bags and accessories',
          'Patient education materials',
          'Staff appreciation items'
        ],
        pricing: 'Starting ₹400 per item',
        deliveryTime: '2-4 days production'
      }
    ]
  }
};

// FAQ data for different service-industry combinations
const faqData: Record<string, Record<string, FAQ[]>> = {
  'business-cards': {
    'technology': [
      {
        question: 'What paper quality is best for tech business cards?',
        answer: 'We recommend 350 GSM premium cardstock with matte finish for a professional, modern look that tech professionals prefer. It provides excellent durability and a premium feel.',
        category: 'specifications'
      },
      {
        question: 'Can you include QR codes for digital contact sharing?',
        answer: 'Yes, we can integrate QR codes that link to digital contact cards, LinkedIn profiles, or company websites. This is very popular among tech professionals for seamless networking.',
        category: 'features'
      },
      {
        question: 'Do you offer bulk discounts for startup teams?',
        answer: 'Absolutely! We offer up to 25% discount for bulk orders starting from 500 cards. Perfect for growing tech teams and startup employee onboarding.',
        category: 'pricing'
      },
      {
        question: 'How fast can I get business cards for a tech conference?',
        answer: 'We offer same-day printing with 6-hour express delivery for urgent needs. Order by 2 PM for same-day pickup or next-morning delivery across Hyderabad.',
        category: 'delivery'
      }
    ],
    'healthcare': [
      {
        question: 'Do you have medical professional card templates?',
        answer: 'Yes, we have specialized templates for doctors, dentists, specialists, and healthcare administrators. All designs emphasize trust, professionalism, and medical credibility.',
        category: 'design'
      },
      {
        question: 'Can you print cards with medical specializations?',
        answer: 'Absolutely. We can highlight medical degrees, specializations, certifications, and professional memberships to build patient trust and professional credibility.',
        category: 'customization'
      }
    ]
  }
};

// Testimonial data
const testimonialData: Record<string, Record<string, Testimonial[]>> = {
  'technology': {
    'business-cards': [
      {
        name: 'Rajesh Kumar',
        company: 'TechStartup Solutions',
        quote: 'Outstanding quality and lightning-fast delivery. Got 500 business cards printed in just 6 hours for our investor meeting. The team understood exactly what we needed.',
        rating: 5,
        service: 'Business Cards'
      },
      {
        name: 'Priya Sharma',
        company: 'InnovateTech Hyderabad',
        quote: 'Perfect for our growing team. The bulk discount saved us money, and the quality is consistently excellent. They\'ve become our go-to printing partner.',
        rating: 5,
        service: 'Bulk Business Cards'
      }
    ],
    'corporate-gifts': [
      {
        name: 'Vikram Reddy',
        company: 'HyderabadTech Corp',
        quote: 'Exceptional corporate gifts for our annual event. Custom USB drives and tech accessories were a huge hit with employees and clients.',
        rating: 5,
        service: 'Corporate Gifts'
      }
    ]
  },
  'healthcare': {
    'business-cards': [
      {
        name: 'Dr. Anitha Rao',
        company: 'Apollo Hospitals',
        quote: 'Professional medical business cards that enhance patient confidence. The quality and attention to medical industry needs is impressive.',
        rating: 5,
        service: 'Medical Business Cards'
      }
    ]
  }
};

export function generateB2BPage(
  industry: string,
  service: string,
  location: string,
  orderSize: string = 'medium'
): B2BPageData {
  // Find industry, location, and order size data
  const industryData = industries.find(i => i.id === industry);
  const locationData = locations.find(l => l.id === location);
  const orderSizeData = orderSizes.find(o => o.id === orderSize);
  
  if (!industryData || !locationData || !orderSizeData) {
    throw new Error('Invalid industry, location, or order size');
  }

  // Format service name for display
  const formatServiceName = (service: string) => 
    service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const serviceName = formatServiceName(service);
  const industryName = industryData.name;
  const locationName = locationData.name;

  // Variable replacements
  const variables = {
    service: serviceName,
    industry: industryName,
    location: locationName,
    orderSize: orderSizeData.name.toLowerCase()
  };

  // Generate SEO metadata
  const title = generateSEOTitle(service, industry, location);
  const description = generateMetaDescription(service, industry, location);
  const keywords = generateKeywords(service, industry, location);
  const canonicalUrl = `https://www.printmarket.in/b2b/${industry}/${service}/${location}/`;
  const structuredData = generateStructuredData(
    `${serviceName} for ${industryName} Companies in ${locationName}`,
    `Professional ${serviceName.toLowerCase()} printing services for ${industryName.toLowerCase()} sector with same-day delivery and 40+ years of expertise.`,
    'Printing Services',
    locationName,
    'PT24H'
  );

  // Get service-specific data
  const services = serviceData[service]?.[industry] || [];
  const faqs = faqData[service]?.[industry] || [];
  const testimonials = testimonialData[industry]?.[service] || [];

  return {
    industry,
    service,
    location,
    orderSize,
    content: {
      sections: {
        hero: {
          title: replaceTemplateVariables(`${serviceName} for ${industryName} Companies in ${locationName} - 40+ Years Excellence`, variables),
          subtitle: replaceTemplateVariables(`Professional ${serviceName.toLowerCase()} printing with same-day delivery. Trusted by 100,000+ customers since 1983.`, variables),
          trustIndicators: ['40+ Years Experience', 'Same-Day Delivery', 'In-House Quality Control'],
          ctaText: 'Get Quote in 2 Minutes',
          ctaLink: 'https://www.printmarket.in/quote_create.php'
        },
        introduction: {
          opening: `Professional ${serviceName.toLowerCase()} printing for ${industryName.toLowerCase()} companies in ${locationName} has never been more reliable.`,
          authority: `With 40+ years of award-winning printing excellence and 4 strategic KGN Xerox locations across Hyderabad, Printmarket.in delivers ${serviceName.toLowerCase()} with same-day printing and guaranteed quality.`,
          capabilities: [
            'In-house production facility eliminates outsourcing delays',
            '100,000+ satisfied customers across Telangana and Andhra Pradesh', 
            'State-of-the-art printing technology with continuous upgrades',
            `Flexible minimum orders perfect for ${industryName.toLowerCase()} businesses of all sizes`
          ]
        },
        services: {
          title: `${serviceName} Solutions for ${industryName} Sector`,
          services,
          features: [
            'Same-day printing available',
            'Bulk discounts up to 25%',
            'Free online design tools',
            'Professional quality guarantee'
          ]
        },
        specifications: {
          title: 'Technical Specifications & Quality Standards',
          technicalSpecs: [
            { property: 'Resolution', value: '300 DPI', description: 'Professional output quality' },
            { property: 'Color', value: 'CMYK + RGB', description: 'Accurate color reproduction' },
            { property: 'Technology', value: 'Offset + Digital', description: 'Superior printing methods' },
            { property: 'Quality Control', value: 'In-house', description: 'No outsourcing delays' }
          ],
          qualityStandards: [
            '300 DPI professional output resolution',
            'CMYK color accuracy with RGB support', 
            'Premium paper and material options',
            'Offset and digital printing technologies'
          ],
          materialOptions: services.length > 0 ? services[0].specifications : [
            'Premium quality materials',
            'Multiple finish options available',
            'Eco-friendly paper choices',
            'Custom specifications supported'
          ]
        },
        localContext: {
          title: `Why ${locationName} ${industryName} Companies Choose Printmarket.in`,
          locationBenefits: [
            `Strategic ${locationName} location for quick delivery`,
            ...locationData.local_insights,
            ...orderSizeData.benefits
          ],
          targetAudience: `${industryName} companies in ${locationName}`,
          localInsights: [
            ...locationData.local_insights,
            `Specialized in ${industryName.toLowerCase()} industry requirements`,
            ...industryData.specializations
          ]
        },
        testimonials: {
          title: `Success Stories from ${industryName} Companies`,
          testimonials
        },
        faq: {
          title: `Frequently Asked Questions - ${serviceName} for ${industryName}`,
          faqs
        },
        cta: {
          title: `Get Your ${serviceName} Printed Today`,
          description: `Join 100,000+ satisfied customers. Order your professional ${serviceName.toLowerCase()} with same-day printing guarantee.`,
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
        title,
        metaDescription: description,
        structuredData
      }
    },
    metadata: generateMetadata(title, description, keywords, canonicalUrl, structuredData),
    partnership: kgnPartnership
  };
}