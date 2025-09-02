import React from 'react';
import { IntroductionSection as IntroductionSectionType } from '@/types/seo';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

interface IntroductionSectionProps {
  data: IntroductionSectionType;
  className?: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  data,
  className = ''
}) => {
  return (
    <section className={`py-16 bg-brand-white ${className}`}>
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Opening Statement */}
          <div className="text-center mb-12">
            <p className="text-lg text-professional-gray leading-relaxed mb-6">
              {data.opening}
            </p>
            
            <p className="text-lg text-professional-gray leading-relaxed">
              {data.authority}
            </p>
          </div>
          
          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {data.capabilities.map((capability, index) => (
              <Card key={index} className="text-center">
                <div className="flex items-start gap-4">
                  {/* Icon placeholder - can be replaced with actual icons */}
                  <div className="w-6 h-6 rounded-full bg-accent-blue flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brand-white mx-auto mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex-1 text-left">
                    <p className="text-professional-gray font-medium leading-relaxed">
                      {capability}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* KGN Partnership Highlight */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-clean-light-gray to-brand-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left md:flex-1">
                  <h3 className="text-xl font-semibold text-professional-gray mb-2">
                    Powered by KGN Xerox Partnership
                  </h3>
                  <p className="text-neutral-gray">
                    Leveraging 40+ years of printing excellence with 4 strategic branch locations across Hyderabad
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 text-sm">
                  <div className="bg-success-green text-brand-white px-3 py-1 rounded-full font-medium">
                    Est. 1983
                  </div>
                  <div className="bg-accent-blue text-brand-white px-3 py-1 rounded-full font-medium">
                    4 Branches
                  </div>
                  <div className="bg-professional-gray text-brand-white px-3 py-1 rounded-full font-medium">
                    100K+ Customers
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;