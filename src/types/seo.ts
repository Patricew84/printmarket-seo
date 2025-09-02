export interface PageGenerationConfig {
  cluster: ClusterType;
  variables: {
    services: string[];
    locations: string[];
    variations: string[];
    customerTypes?: string[];
    industries?: string[];
    orderSizes?: string[];
  };
  template: ContentTemplate;
  seoConfig: SEOConfiguration;
}

export type ClusterType = 
  | 'b2b-corporate' 
  | 'wedding-personal' 
  | 'emergency-speed' 
  | 'local-authority' 
  | 'digital-authority' 
  | 'specialized-services';

export interface ContentTemplate {
  sections: {
    hero: HeroSection;
    introduction: IntroductionSection;
    services: ServicesSection;
    specifications: SpecificationsSection;
    localContext: LocalContextSection;
    testimonials: TestimonialsSection;
    faq: FAQSection;
    cta: CTASection;
  };
  seoElements: {
    title: string;
    metaDescription: string;
    structuredData: StructuredDataSchema;
  };
}

export interface HeroSection {
  title: string;
  subtitle: string;
  trustIndicators: string[];
  ctaText: string;
  ctaLink: string;
}

export interface IntroductionSection {
  opening: string;
  authority: string;
  capabilities: string[];
}

export interface ServicesSection {
  title: string;
  services: ServiceItem[];
  features: string[];
}

export interface ServiceItem {
  name: string;
  description: string;
  specifications: string[];
  pricing?: string;
  deliveryTime: string;
}

export interface SpecificationsSection {
  title: string;
  technicalSpecs: TechnicalSpec[];
  qualityStandards: string[];
  materialOptions: string[];
}

export interface TechnicalSpec {
  property: string;
  value: string;
  description?: string;
}

export interface LocalContextSection {
  title: string;
  locationBenefits: string[];
  targetAudience: string;
  localInsights: string[];
}

export interface TestimonialsSection {
  title: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  rating: number;
  service: string;
}

export interface FAQSection {
  title: string;
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface CTASection {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    link: string;
    variant: 'primary' | 'success';
  };
  secondaryCTA?: {
    text: string;
    link: string;
    variant: 'outline' | 'secondary';
  };
  contactInfo: ContactInfo;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  quoteUrl: string;
}

export interface SEOConfiguration {
  titleFormat: string;
  descriptionFormat: string;
  urlFormat: string;
  keywords: string[];
  structuredDataType: 'Service' | 'LocalBusiness' | 'Product';
}

export interface StructuredDataSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: LocalBusiness;
  serviceType: string;
  offers?: Offer;
  areaServed?: string | string[];
}

export interface LocalBusiness {
  '@type': string;
  name: string;
  address: Address;
  telephone: string;
  email: string;
  url: string;
  areaServed: string | string[];
  founder?: string;
  foundingDate?: string;
  numberOfEmployees?: string;
}

export interface Address {
  '@type': string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
}

export interface Offer {
  '@type': string;
  price?: string;
  priceCurrency?: string;
  deliveryLeadTime?: {
    '@type': string;
    duration: string;
  };
  availability?: string;
}

export interface KGNPartnership {
  branches: Branch[];
  experience: string;
  capabilities: string[];
  trustSignals: string[];
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData: StructuredDataSchema;
}

export interface B2BPageData {
  industry: string;
  service: string;
  location: string;
  orderSize: string;
  content: ContentTemplate;
  metadata: PageMetadata;
  partnership: KGNPartnership;
}