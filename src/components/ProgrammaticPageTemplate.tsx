import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Breadcrumb, FAQSection } from '@/components/SEOOptimizedPage';
import { ProfessionalImageSection } from '@/components/ProfessionalImageSection';
import { PrintingInAction } from '@/components/PrintingInAction';
import { CustomerTestimonials } from '@/components/CustomerTestimonials';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { KGNPartnership } from '@/components/KGNPartnership';
import { LocalOffices } from '@/components/LocalOffices';
import { PrintmarketProcess } from '@/components/PrintmarketProcess';
import { ProductSlider } from '@/components/ProductSlider';
import { Footer } from '@/components/Footer';
import { LocationData, ServiceData, CustomerTypeData, generateFAQs, findClosestOffice } from '@/data/programmatic-seo';

interface ProgrammaticPageProps {
  location: LocationData;
  service: ServiceData;
  customerType: CustomerTypeData;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
  };
}

export function generatePageMetadata(
  location: LocationData, 
  service: ServiceData, 
  customerType: CustomerTypeData,
  url: string
): Metadata {
  const title = `${service.displayName} in ${location.displayName} - ${customerType.displayName} | Printmarket.in`;
  const description = `Professional ${service.displayName.toLowerCase()} in ${location.displayName} for ${customerType.displayName.toLowerCase()} customers. ${service.description}. Starting ${service.priceRange}.`;
  
  return {
    title,
    description,
    keywords: [
      `${service.slug.replace('-', ' ')} ${location.name}`,
      `${customerType.name} ${service.slug.replace('-', ' ')}`,
      `printing services ${location.name}`,
      `${service.name} ${location.name} ${customerType.name}`,
      'printmarket.in',
      'same day printing',
      'professional printing'
    ],
    authors: [{ name: 'Printmarket.in Team' }],
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
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: `https://services.printmarket.in${url}`,
      siteName: 'Printmarket.in',
      title,
      description,
      images: [
        {
          url: `https://services.printmarket.in${service.backgroundImage}`,
          width: 1200,
          height: 630,
          alt: `${service.displayName} in ${location.displayName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.displayName} in ${location.displayName} - ${customerType.displayName}`,
      description,
      images: [`https://services.printmarket.in${service.backgroundImage}`],
      creator: '@PrintmarketIn',
      site: '@PrintmarketIn',
    },
    alternates: {
      canonical: `https://services.printmarket.in${url}`,
    },
    other: {
      'geo.region': 'IN-TG',
      'geo.placename': location.displayName,
      'geo.position': `${location.coordinates.lat};${location.coordinates.lng}`,
      'ICBM': `${location.coordinates.lat}, ${location.coordinates.lng}`,
    },
  };
}

export default function ProgrammaticPageTemplate({ 
  location, 
  service, 
  customerType, 
  metadata 
}: ProgrammaticPageProps) {
  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://services.printmarket.in/#organization`,
        "name": `Printmarket.in - ${service.displayName} ${location.displayName}`,
        "description": `Professional ${service.displayName.toLowerCase()} in ${location.displayName} with same-day delivery. Powered by KGN Xerox's 40+ years expertise.`,
        "url": "https://services.printmarket.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://services.printmarket.in/images/printmarket-logo-new.png"
        },
        "image": [
          service.backgroundImage,
          "https://services.printmarket.in/images/printmarket-logo-new.png"
        ],
        "telephone": "+91-9949925111",
        "email": "print@printmarket.in",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.displayName,
          "addressRegion": "Telangana",
          "addressCountry": "India"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat.toString(),
          "longitude": location.coordinates.lng.toString()
        },
        "openingHours": [
          "Mo-Sa 09:00-19:00"
        ],
        "priceRange": service.priceRange,
        "serviceArea": {
          "@type": "City",
          "name": location.displayName
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "200",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Service",
        "@id": `https://services.printmarket.in${metadata.url}#service`,
        "name": service.displayName,
        "description": service.description,
        "provider": {
          "@id": "https://services.printmarket.in/#organization"
        },
        "serviceType": "Printing Services",
        "areaServed": {
          "@type": "City",
          "name": location.displayName
        },
        "offers": {
          "@type": "Offer",
          "priceRange": service.priceRange,
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  // Generate breadcrumb items (only Home is clickable since other pages don't exist)
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printmarket.in/' },
    { name: location.displayName, url: null },
    { name: 'Printing Services', url: null },
    { name: service.displayName, url: null },
    { name: customerType.displayName, url: null, isLast: true }
  ];

  // Generate comparison features
  const comparisonFeatures = [
    {
      feature: 'Same Day Delivery',
      printmarket: service.urgentAvailable,
      competitor1: 'Limited areas only',
      competitor2: false,
      competitor3: false
    },
    {
      feature: `Starting Price (${service.name})`,
      printmarket: service.priceRange.split('-')[0],
      competitor1: '20% higher',
      competitor2: '40% higher',
      competitor3: '25% higher'
    },
    {
      feature: 'Same Day Delivery',
      printmarket: true,
      competitor1: 'Selected locations only',
      competitor2: 'No same day delivery',
      competitor3: 'Usually next day'
    },
    {
      feature: 'Free Design Support',
      printmarket: true,
      competitor1: 'Basic templates',
      competitor2: 'Templates only',
      competitor3: 'Limited support'
    },
    {
      feature: 'Experience', 
      printmarket: '40+ years (since 1983)',
      competitor1: '18+ years (since 2006)',
      competitor2: '29+ years (since 1995)',
      competitor3: '5-15+ years'
    }
  ];

  // Generate FAQ items
  const faqItems = generateFAQs(location, service, customerType);

  // Generate dynamic title and descriptions
  const heroTitle = `${service.displayName} in ${location.displayName} - ${customerType.displayName} Printing Expert Since 40 years`;
  const heroSubtitle = `Professional ${service.displayName.toLowerCase()} that make lasting impressions`;
  const heroDescription = `Powered by KGN Xerox's 40+ years of proven excellence with modern digital convenience. ${service.urgentAvailable ? 'Express delivery options available' : 'Fast delivery'} starting from ${service.priceRange.split('-')[0]}.`;

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Trust Banner */}
      <div className="bg-blue-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
              <img 
                src="/images/Printmarket logo icon.png" 
                alt="Printmarket.in" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-medium">Printmarket.in</span>
            <span className="text-blue-200">•</span>
            <span className="text-blue-100">Powered by KGN Xerox</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-blue-100">
            <span>✓ {service.urgentAvailable ? 'Express delivery available' : 'Fast delivery'}</span>
            <span>✓ 4.8/5 Rating</span>
            <span>✓ 40+ Years Excellence</span>
          </div>
        </div>
      </div>

      <Breadcrumb items={breadcrumbItems} />
      
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        backgroundImage={service.backgroundImage}
        ctaText="Get Free Quote"
        ctaLink="https://www.printmarket.in/quote_create.php"
        badges={[
          `✅ ${service.urgentAvailable ? 'Express delivery available' : 'Fast delivery'} in ${location.displayName}`,
          `💰 Starting from ${service.priceRange.split('-')[0]} per order`, 
          `🎨 Free design consultation`,
          `🏆 KGN Xerox quality guarantee`
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* COMPETITIVE ADVANTAGE SHOWCASE */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  #1 Choice for {location.displayName} {customerType.displayName}
                </div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why {location.displayName} {customerType.displayName} Customers Trust Printmarket.in</h2>
                <p className="text-lg text-gray-600">{service.features.slice(0, 3).join(' • ')} • 40+ years excellence</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Service-specific advantages */}
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.urgentAvailable ? 'Express Delivery' : 'Fast Delivery'}</h3>
                  <p className="text-gray-600 mb-4">{service.urgentAvailable 
                    ? `Same-day delivery available for most orders across ${location.displayName}. Express options for urgent requirements.`
                    : `Quick turnaround for ${service.displayName.toLowerCase()} with delivery in ${service.turnaround} across ${location.displayName}.`
                  }</p>
                  <div className="bg-white p-3 rounded border">
                    <div className="text-base font-semibold text-gray-900">{service.urgentAvailable ? 'Express Available' : service.turnaround}</div>
                    <div className="text-sm text-gray-500">{service.urgentAvailable ? 'For most orders' : 'Standard turnaround'}</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Best {customerType.displayName} Pricing</h3>
                  <p className="text-gray-600 mb-4">{service.displayName} starting {service.priceRange}. {customerType.slug === 'business' ? 'Bulk discounts up to 40% for business orders.' : 'Special rates for personal customers'} in {location.displayName}.</p>
                  <div className="bg-white p-3 rounded border">
                    <div className="text-base font-semibold text-gray-900">{service.priceRange.split('-')[0]} vs 25% higher</div>
                    <div className="text-sm text-gray-500">Our price vs competitors</div>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{location.displayName} Local Expertise</h3>
                  <p className="text-gray-600 mb-4">Serving {location.displayName} {customerType.displayName.toLowerCase()} customers for 40+ years. Deep understanding of local needs.</p>
                  <div className="bg-white p-3 rounded border">
                    <div className="text-base font-semibold text-gray-900">4.8⭐ Local Rating</div>
                    <div className="text-sm text-gray-500">200+ {location.displayName} reviews</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="mt-12 text-center">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Ready to Get Professional {service.displayName}?</h3>
                  <p className="text-lg mb-6 text-gray-700">Join 200+ successful {location.displayName} {customerType.displayName.toLowerCase()} customers who trust our quality and service</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://www.printmarket.in/quote_create.php" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                      Get Free Quote
                    </a>
                    <a href="tel:+91-9949925111" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                      Call +91-9949925111
                    </a>
                  </div>
                  <p className="text-sm mt-4 text-gray-600">No setup fees • Free design support • Quality guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic testimonials */}
        <CustomerTestimonials />
        
        {/* Location and service specific content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{service.displayName} Solutions for {location.displayName} {customerType.displayName}</h2>
          <ProfessionalImageSection
            imageSrc={service.backgroundImage}
            imageAlt={`Professional ${service.displayName.toLowerCase()} for ${customerType.displayName.toLowerCase()} in ${location.displayName}`}
            title={`Tailored for ${location.displayName}'s ${customerType.displayName} Environment`}
            description={`Our ${service.displayName.toLowerCase()} services are specifically designed for ${location.displayName}'s ${customerType.displayName.toLowerCase()} community. Serving ${location.industries.slice(0, 3).join(', ')} sectors across ${location.businessDistricts.join(', ')}, we understand the unique requirements of ${location.displayName}'s business landscape.`}
            features={[
              ...service.features,
              ...customerType.benefits.slice(0, 2)
            ]}
            ctaText={`View ${service.displayName} Options`}
            ctaLink="https://www.printmarket.in/quote_create.php"
            imagePosition="right"
          />
        </section>

        {/* Printing in Action */}
        <PrintingInAction 
          videos={[
            {
              id: 1,
              title: "Acrylic Badge Printing",
              technique: "Premium Badge Manufacturing",
              videoSrc: "/videos/Acrylic badge printing.mp4",
              description: "Watch our precision printing process for professional acrylic badge production with UV digital printing technology.",
              equipment: "UV Digital Printing System",
              benefits: ["High-definition printing", "Waterproof finish", "Scratch resistant", "Professional quality"]
            },
            {
              id: 2,
              title: "Vinyl Sticker Production",
              technique: "Advanced Vinyl Cutting",
              videoSrc: "/videos/Vinyl sticker printing.mp4",
              description: "Professional vinyl sticker cutting and printing process ensuring perfect adhesion and durability.",
              equipment: "Digital Vinyl Cutting Machine",
              benefits: ["Weather resistant", "Perfect cutting", "Strong adhesive", "Custom shapes"]
            },
            {
              id: 3,
              title: "Foam Board Display",
              technique: "Large Format Printing",
              videoSrc: "/videos/Foam board printing - event.mp4",
              description: "Large format foam board printing for events, exhibitions, and promotional displays.",
              equipment: "Large Format Digital Printer",
              benefits: ["Lightweight", "Easy mounting", "Vivid colors", "Cost effective"]
            }
          ]}
        />
        
        <KGNPartnership />
        <LocalOffices 
          offices={findClosestOffice(location.slug)} 
          location={location.displayName}
        />
        <ProductSlider />
        <PrintmarketProcess />
        
        <ComparisonTable 
          title={`Why Choose Printmarket for ${service.displayName} in ${location.displayName}?`}
          features={comparisonFeatures}
          competitors={{
            printmarket: "Printmarket.in",
            competitor1: "Printo",
            competitor2: "Vistaprint",
            competitor3: "Local Print Shops"
          }}
        />
        
        <FAQSection faqs={faqItems} />
        
        {/* Enhanced FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }),
          }}
        />
      </div>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}