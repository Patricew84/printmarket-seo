import React from 'react';
import { HeroSection as HeroSectionType } from '@/types/seo';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { TrustIndicators } from '@/components/ui/TrustIndicator';

interface HeroSectionProps {
  data: HeroSectionType;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  className = ''
}) => {
  return (
    <section className={`bg-gradient-to-b from-clean-light-gray to-brand-white py-16 lg:py-24 ${className}`}>
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-h1 text-professional-gray mb-6 leading-tight">
            {data.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-neutral-gray mb-8 leading-relaxed max-w-3xl mx-auto">
            {data.subtitle}
          </p>
          
          {/* Trust Indicators */}
          <div className="mb-10">
            <TrustIndicators indicators={data.trustIndicators} className="justify-center" />
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href={data.ctaLink}
              variant="primary"
              size="lg"
              className="text-lg font-semibold"
            >
              {data.ctaText}
            </Button>
            
            <Button
              href="tel:+919949925111"
              variant="outline"
              size="lg"
              className="text-lg font-semibold"
            >
              Call +91 9949925111
            </Button>
          </div>
          
          {/* Quick Contact Info */}
          <div className="mt-8 text-sm text-neutral-gray">
            <p className="mb-2">
              <span className="font-medium text-professional-gray">WhatsApp Available:</span> +91 9949925111
            </p>
            <p>
              <span className="font-medium text-professional-gray">Email:</span> print@printmarket.in
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;