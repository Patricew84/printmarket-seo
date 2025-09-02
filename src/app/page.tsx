import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { TrustIndicators } from '@/components/ui/TrustIndicator';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      {/* Hero Section with Real Background Image */}
      <section className="relative bg-gradient-to-br from-professional-gray via-premium-black to-accent-blue py-32 overflow-hidden">
        {/* Background Image - Replace with real image from printmarket.in */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-professional-gray/90 via-premium-black/90 to-accent-blue/90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-white mb-6 leading-tight">
              Premium Printing
              <span className="block text-accent-blue">That Speaks</span>
              <span className="block">Your Brand</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-white/90 mb-8 leading-relaxed">
              From business cards to corporate gifts, we deliver exceptional quality that sets your business apart. 
              Trusted by 500+ businesses across India.
            </p>
            
            {/* Trust Indicators */}
            <TrustIndicators 
              indicators={[
                "✓ 24-Hour Turnaround",
                "✓ Premium Materials",
                "✓ 100% Satisfaction",
                "✓ Free Design Support"
              ]}
              className="justify-center mb-8"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Free Quote
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Competitive Comparison Section */}
      <section className="py-20 bg-clean-light-gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-professional-gray mb-6">
              Why Choose Printmarket Over Others?
            </h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              See how we stack up against the competition in quality, service, and value
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-professional-gray text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-semibold">Features</th>
                    <th className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <img 
                          src="https://via.placeholder.com/120x60/007BFF/FFFFFF?text=Printmarket" 
                          alt="Printmarket" 
                          className="w-30 h-15 mb-2 rounded"
                        />
                        <span className="text-accent-blue font-bold">Printmarket</span>
                      </div>
                    </th>
                    <th className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <img 
                          src="https://via.placeholder.com/120x60/FF6B6B/FFFFFF?text=Competitor" 
                          alt="Competitor A" 
                          className="w-30 h-15 mb-2 rounded"
                        />
                        <span className="text-red-500 font-bold">Competitor A</span>
                      </div>
                    </th>
                    <th className="px-8 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <img 
                          src="https://via.placeholder.com/120x60/4ECDC4/FFFFFF?text=Competitor" 
                          alt="Competitor B" 
                          className="w-30 h-15 mb-2 rounded"
                        />
                        <span className="text-teal-500 font-bold">Competitor B</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-gray">
                  <tr className="hover:bg-clean-light-gray transition-colors">
                    <td className="px-8 py-6 font-semibold text-professional-gray">Print Quality</td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-success-green/20 text-success-green">
                        ✓ Premium
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Standard
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Standard
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-clean-light-gray transition-colors">
                    <td className="px-8 py-6 font-semibold text-professional-gray">Turnaround Time</td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-success-green/20 text-success-green">
                        24-48 Hours
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-warning-orange/20 text-warning-orange">
                        3-5 Days
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-warning-orange/20 text-warning-orange">
                        5-7 Days
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-clean-light-gray transition-colors">
                    <td className="px-8 py-6 font-semibold text-professional-gray">Design Support</td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-success-green/20 text-success-green">
                        Free & Unlimited
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Paid Service
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Limited
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-clean-light-gray transition-colors">
                    <td className="px-8 py-6 font-semibold text-professional-gray">Material Quality</td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-success-green/20 text-success-green">
                        Premium GSM
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Standard GSM
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Basic GSM
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-clean-light-gray transition-colors">
                    <td className="px-8 py-6 font-semibold text-professional-gray">Customer Support</td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-success-green/20 text-success-green">
                        24/7 WhatsApp
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Business Hours
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-neutral-gray/20 text-neutral-gray">
                        Email Only
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/quote" variant="primary" size="lg">
              Get Your Premium Quote Today
            </Button>
          </div>
        </Container>
      </section>

      {/* Premium Services Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-professional-gray mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              From concept to delivery, we handle every detail with precision and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Cards */}
            <Card className="group">
              <div className="relative overflow-hidden rounded-t-card">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Premium Business Cards" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent-blue text-white">
                    Most Popular
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-professional-gray mb-3">Premium Business Cards</h3>
                <p className="text-neutral-gray mb-4">
                  Spot UV, foil stamping, embossing, and premium paper stocks. Make every handshake count.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Spot UV & Foil Stamping
                  </li>
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Premium 350 GSM Paper
                  </li>
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Free Design Support
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent-blue">From ₹2,999</span>
                  <Button href="/services/business-cards" variant="primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>

            {/* Corporate Gifts */}
            <Card className="group">
              <div className="relative overflow-hidden rounded-t-card">
                <img 
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Corporate Gifts" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-professional-gray mb-3">Corporate Gifts</h3>
                <p className="text-neutral-gray mb-4">
                  Premium branded merchandise that strengthens client relationships and team morale.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Custom Branding
                  </li>
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Premium Materials
                  </li>
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Bulk Order Discounts
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent-blue">From ₹1,499</span>
                  <Button href="/services/corporate-gifts" variant="primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>

            {/* Marketing Materials */}
            <Card className="group">
              <div className="relative overflow-hidden rounded-t-card">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Marketing Materials" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-professional-gray mb-3">Marketing Materials</h3>
                <p className="text-neutral-gray mb-4">
                  Brochures, banners, and digital-to-print solutions that drive your marketing success.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    High-Resolution Printing
                  </li>
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Multiple Formats
                  </li>
                  <li className="flex items-center text-sm text-neutral-gray">
                    <span className="w-2 h-2 bg-accent-blue rounded-full mr-3"></span>
                    Fast Turnaround
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent-blue">From ₹999</span>
                  <Button href="/services/marketing-materials" variant="primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-clean-light-gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-professional-gray mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Join 500+ satisfied businesses who trust us with their printing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-warning-orange">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-gray mb-6 italic">
                "Printmarket delivered exceptional quality business cards that perfectly represent our brand. 
                The spot UV finish and premium paper make us stand out in every meeting."
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-professional-gray">Rahul Sharma</p>
                  <p className="text-sm text-neutral-gray">CEO, TechStart India</p>
                </div>
              </div>
            </Card>

            {/* Review 2 */}
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-warning-orange">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-gray mb-6 italic">
                "Outstanding service and quality! Our corporate gifts arrived on time and exceeded expectations. 
                The custom branding is flawless and our clients love them."
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-professional-gray">Priya Patel</p>
                  <p className="text-sm text-neutral-gray">Marketing Director, GlobalCorp</p>
                </div>
              </div>
            </Card>

            {/* Review 3 */}
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-warning-orange">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-gray mb-6 italic">
                "Fast turnaround, premium quality, and excellent customer support. Printmarket has become our 
                go-to partner for all printing needs. Highly recommended!"
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-professional-gray">Arjun Mehta</p>
                  <p className="text-sm text-neutral-gray">Founder, Creative Agency</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-blue to-blue-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of businesses who trust us with their premium printing needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="secondary" size="lg">
                Get Free Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}