import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const products = [
  {
    quote: "Premium business cards that make a lasting first impression. Choose from standard 300GSM or premium finishes with lamination, foil stamping, and embossing options.",
    name: "Business Cards Premium",
    designation: "Starting ₹200 per 100 cards | Same-day delivery",
    src: "/images/products/Business Cards Premium.png.webp",
    link: "https://www.printmarket.in/business-cards-53/categories/",
  },
  {
    quote: "Standard business cards with professional quality printing on 300GSM card stock. Perfect for everyday business networking and professional use.",
    name: "Standard Business Cards", 
    designation: "Starting ₹180 per 100 cards | Bulk discounts",
    src: "/images/products/Standard_Business_Cards.png.webp",
    link: "https://www.printmarket.in/business-cards-53/categories/",
  },
  {
    quote: "Professional brochures for marketing campaigns, product catalogs, and company presentations. Available in various sizes and folding options.",
    name: "Brochures",
    designation: "Starting ₹66 per piece | Full-color printing",
    src: "/images/products/Brochure.webp",
    link: "https://www.printmarket.in/marketing-materials-27/marketing-materials-28/brochures-190/",
  },
  {
    quote: "Eye-catching flyers for promotions, events, and announcements. High-quality printing on both sides with vibrant colors and sharp details.",
    name: "Flyers",
    designation: "Starting ₹35 per piece | Double-sided printing",
    src: "/images/products/Flyers.jpg.webp",
    link: "https://www.printmarket.in/marketing-materials-27/marketing-materials-28/flyers-both-side/",
  },
  {
    quote: "Complete corporate kits including ID cards, letterheads, visiting cards, and branded stationery. Perfect for employee onboarding and corporate identity.",
    name: "Corporate Kit",
    designation: "Starting ₹800 per kit | Customizable packages", 
    src: "/images/products/Corporate Kit.webp",
    link: "https://www.printmarket.in/corporate-gifts-/employee-kit/products/",
  },
  {
    quote: "Large format banners for events, promotions, and outdoor advertising. Weather-resistant materials with vibrant printing for maximum visibility.",
    name: "Banners",
    designation: "Starting ₹120 per sq ft | Indoor & outdoor options",
    src: "/images/products/Banner.png.webp",
    link: "https://www.printmarket.in/marketing-materials-27/marketing-materials-28/banner/",
  },
  {
    quote: "High-quality vinyl stickers and labels for branding, packaging, and promotional use. Available in custom shapes, sizes, and finishes.",
    name: "Stickers & Labels",
    designation: "Starting ₹25 per piece | Custom shapes available",
    src: "/images/products/Sticker.webp",
    link: "https://www.printmarket.in/labels-stickers/stickers/products/",
  },
];

export const ProductSlider = () => (
  <section className="mb-16">
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Range</h2>
        <p className="text-lg text-gray-600">
          Professional printing services powered by KGN Xerox&apos;s 40+ years of excellence
        </p>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="max-w-6xl">
          <CircularTestimonials
            testimonials={products}
            autoplay={true}
            colors={{
              name: "#0a0a0a",
              designation: "#0066cc",
              testimony: "#374151",
              arrowBackground: "#141414",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#0066cc",
            }}
            fontSizes={{
              name: "24px",
              designation: "16px",
              quote: "18px",
            }}
          />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
              <img 
                src="/images/kgn-xerox-logo.png" 
                alt="KGN Xerox" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-gray-600 text-lg">×</span>
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
              <img 
                src="/images/Printmarket logo icon.png" 
                alt="Printmarket.in" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-gray-700 font-medium">
            Powered by KGN Xerox Excellence • Modern Customer Experience by Printmarket.in
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProductSlider;