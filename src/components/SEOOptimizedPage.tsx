import React from 'react';
import Head from 'next/head';

interface StructuredDataSchema {
  organizationSchema: object;
  serviceSchema: object;
  breadcrumbSchema: object;
  faqSchema?: object;
  reviewSchema?: object;
}

interface SEOOptimizedPageProps {
  children: React.ReactNode;
  structuredData: StructuredDataSchema;
  canonicalUrl: string;
  hrefLang?: { [key: string]: string };
}

export function SEOOptimizedPage({
  children,
  structuredData,
  canonicalUrl,
  hrefLang
}: SEOOptimizedPageProps) {
  return (
    <>
      <Head>
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang tags for international SEO */}
        {hrefLang && Object.entries(hrefLang).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organizationSchema)
          }}
        />
        
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.serviceSchema)
          }}
        />
        
        {/* Structured Data - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.breadcrumbSchema)
          }}
        />
        
        {/* Structured Data - FAQ (if provided) */}
        {structuredData.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData.faqSchema)
            }}
          />
        )}
        
        {/* Structured Data - Reviews (if provided) */}
        {structuredData.reviewSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData.reviewSchema)
            }}
          />
        )}
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </Head>
      
      {/* Page content */}
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        {children}
      </main>
    </>
  );
}

interface BreadcrumbProps {
  items: Array<{
    name: string;
    url: string;
    isLast?: boolean;
  }>;
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-4 bg-gray-100"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li 
              key={index}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              {!item.isLast ? (
                <>
                  <a
                    href={item.url}
                    itemProp="item"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <span itemProp="name">{item.name}</span>
                  </a>
                  <meta itemProp="position" content={String(index + 1)} />
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span 
                    itemProp="name" 
                    className="text-gray-900 font-medium"
                  >
                    {item.name}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                  <link itemProp="item" href={item.url} />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

interface FAQSectionProps {
  title?: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 pb-6"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 
                className="text-lg font-semibold text-gray-900 mb-3"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div 
                className="text-gray-700 leading-relaxed"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}