const fs = require('fs');
const path = require('path');

// Cluster 1 Data (from strategy document)
const locations = [
  'hyderabad', 'gachibowli', 'hitech-city', 'madhapur', 'kondapur', 
  'jubilee-hills', 'banjara-hills', 'secunderabad', 'ameerpet', 'kukatpally'
];

const services = [
  'business-card-printing', 'brochure-printing', 'banner-printing', 'flyer-printing', 
  'digital-printing', 'wedding-cards', 'corporate-printing', 'bulk-printing', 
  'sticker-printing', 'poster-printing'
];

const customerTypes = ['business', 'personal'];

// Services that support different customer types
const serviceCustomerMatrix = {
  'business-card-printing': ['business', 'personal'],
  'brochure-printing': ['business', 'personal'],
  'banner-printing': ['business', 'personal'],
  'flyer-printing': ['business', 'personal'],
  'digital-printing': ['business', 'personal'],
  'wedding-cards': ['personal'], // Only personal
  'corporate-printing': ['business'], // Only business
  'bulk-printing': ['business'], // Only business
  'sticker-printing': ['business', 'personal'],
  'poster-printing': ['business', 'personal']
};

// Function to convert slug to component name
function slugToComponentName(slug) {
  return slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Template for page.tsx files
function generatePageTemplate(location, service, customerType) {
  const componentName = `${slugToComponentName(location)}${slugToComponentName(service)}${slugToComponentName(customerType)}Page`;
  
  return `import React from 'react';
import { Metadata } from 'next';
import ProgrammaticPageTemplate, { generatePageMetadata } from '@/components/ProgrammaticPageTemplate';
import { getPageData } from '@/data/programmatic-seo';

// Generate metadata for this specific page
export const metadata: Metadata = (() => {
  const pageData = getPageData('${location}', '${service}', '${customerType}');
  if (!pageData) return {};
  
  return generatePageMetadata(
    pageData.location,
    pageData.service,
    pageData.customerType,
    pageData.url
  );
})();

export default function ${componentName}() {
  const pageData = getPageData('${location}', '${service}', '${customerType}');
  
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
}`;
}

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Generate all pages
function generateAllPages() {
  const baseDir = './src/app';
  let totalPages = 0;
  const generatedPages = [];
  
  locations.forEach(location => {
    services.forEach(service => {
      const supportedCustomerTypes = serviceCustomerMatrix[service];
      
      supportedCustomerTypes.forEach(customerType => {
        const dirPath = path.join(baseDir, location, 'printing-services', service, customerType);
        const filePath = path.join(dirPath, 'page.tsx');
        
        // Ensure directory exists
        ensureDirectoryExists(dirPath);
        
        // Generate page content
        const pageContent = generatePageTemplate(location, service, customerType);
        
        // Write file
        fs.writeFileSync(filePath, pageContent);
        
        totalPages++;
        generatedPages.push({
          location,
          service,
          customerType,
          url: `/${location}/printing-services/${service}/${customerType}`,
          path: filePath
        });
        
        console.log(`Generated: ${filePath}`);
      });
    });
  });
  
  console.log(`\n🎉 Successfully generated ${totalPages} pages for Cluster 1!`);
  
  // Generate summary file
  const summaryContent = `# Cluster 1: Local Market Authority - Generated Pages

**Total Pages Generated:** ${totalPages}
**Strategy:** URL Structure \`/{location}/printing-services/{service}/{customer-type}\`

## Page Breakdown:
- **10 Locations:** ${locations.join(', ')}
- **10 Services:** ${services.join(', ')}
- **2 Customer Types:** business, personal (filtered by service compatibility)

## Generated URLs:

${generatedPages.map(page => `- [${page.location}/${page.service}/${page.customerType}](http://localhost:3001${page.url})`).join('\n')}

## Service-Customer Type Matrix:
${Object.entries(serviceCustomerMatrix).map(([service, types]) => `- **${service}:** ${types.join(', ')}`).join('\n')}

## Next Steps:
1. Test sample pages: http://localhost:3001/gachibowli/printing-services/business-card-printing/business
2. Add background images for each service type
3. Monitor page load performance
4. Set up analytics tracking

Generated on: ${new Date().toISOString()}
`;
  
  fs.writeFileSync('./CLUSTER-1-IMPLEMENTATION-SUMMARY.md', summaryContent);
  console.log('\n📊 Summary saved to CLUSTER-1-IMPLEMENTATION-SUMMARY.md');
  
  return { totalPages, generatedPages };
}

// Run the generation
if (require.main === module) {
  console.log('🚀 Starting Cluster 1 Page Generation...\n');
  generateAllPages();
}

module.exports = { generateAllPages };