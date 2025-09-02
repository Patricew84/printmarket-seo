import React from 'react';
import { Metadata } from 'next';
import ProgrammaticPageTemplate, { generatePageMetadata } from '@/components/ProgrammaticPageTemplate';
import { getPageData } from '@/data/programmatic-seo';

// Generate metadata for this specific page
export const metadata: Metadata = (() => {
  const pageData = getPageData('banjara-hills', 'flyer-printing', 'business');
  if (!pageData) return {};
  
  return generatePageMetadata(
    pageData.location,
    pageData.service,
    pageData.customerType,
    pageData.url
  );
})();

export default function BanjaraHillsFlyerPrintingBusinessPage() {
  const pageData = getPageData('banjara-hills', 'flyer-printing', 'business');
  
  if (!pageData) {
    return <div>Page not found</div>;
  }
  
  return (
    <ProgrammaticPageTemplate
      location={pageData.location}
      service={pageData.service}
      customerType={pageData.customerType}
      metadata={{
        title: pageData.title,
        description: pageData.description,
        keywords: pageData.keywords,
        url: pageData.url
      }}
    />
  );
}