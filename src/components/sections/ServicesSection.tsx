import React from 'react';
import { ServicesSection as ServicesSectionType, ServiceItem } from '@/types/seo';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface ServicesSectionProps {
  data: ServicesSectionType;
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  data,
  className = ''
}) => {
  return (
    <section className={`py-16 bg-clean-light-gray ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-h2 text-professional-gray mb-6">
            {data.title}
          </h2>
          
          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {data.features.map((feature, index) => (
              <div key={index} className="bg-brand-white px-4 py-3 rounded-lg border border-border-gray">
                <p className="text-sm font-medium text-professional-gray text-center">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Grid */}
        {data.services && data.services.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {data.services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-brand-white rounded-lg p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-professional-gray mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-neutral-gray mb-6 text-lg">
              Get an instant quote for your printing needs. Free consultation available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://www.printmarket.in/quote_create.php"
                variant="primary"
                size="lg"
              >
                Get Instant Quote
              </Button>
              
              <Button
                href="https://wa.me/919949925111"
                variant="success"
                size="lg"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="h-full">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold text-professional-gray mb-3">
          {service.name}
        </h3>
        
        <p className="text-neutral-gray mb-4 flex-grow">
          {service.description}
        </p>
        
        {/* Specifications */}
        {service.specifications && service.specifications.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-professional-gray mb-2 uppercase tracking-wide">
              Specifications:
            </h4>
            <ul className="space-y-1">
              {service.specifications.map((spec, index) => (
                <li key={index} className="text-sm text-neutral-gray flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-blue rounded-full flex-shrink-0"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Pricing and Delivery */}
        <div className="flex justify-between items-center pt-4 border-t border-border-gray">
          <div>
            {service.pricing && (
              <p className="text-lg font-semibold text-success-green">
                {service.pricing}
              </p>
            )}
            <p className="text-sm text-neutral-gray">
              Delivery: {service.deliveryTime}
            </p>
          </div>
          
          <Button
            href="https://www.printmarket.in/quote_create.php"
            variant="outline"
            size="sm"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ServicesSection;