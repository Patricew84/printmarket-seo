import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-6">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <img 
              src="/images/Printmarket logo icon.png" 
              alt="Printmarket.in" 
              className="w-24 h-24 mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Printmarket SEO Hub
            </h1>
            <p className="text-gray-600">
              Powered by KGN Xerox Excellence
            </p>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Professional Printing Services
            <span className="block text-blue-600">Across Hyderabad</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive printing solutions with location-specific services, 
            real pricing, and expert guidance for businesses and individuals.
          </p>
        </div>

        {/* Quick Links to Printmarket.in */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href="https://www.printmarket.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
          >
            <div className="text-blue-600 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Main Website
            </h3>
            <p className="text-sm text-gray-600">
              Explore our full product catalog and place orders
            </p>
          </a>

          <a
            href="https://www.printmarket.in/quote_create.php"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200"
          >
            <div className="text-green-600 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              Get Quote
            </h3>
            <p className="text-sm text-gray-600">
              Request a custom quote for your printing needs
            </p>
          </a>

          <a
            href="tel:+91-9949925111"
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200"
          >
            <div className="text-orange-600 mb-3">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
              Call Now
            </h3>
            <p className="text-sm text-gray-600">
              +91-9949925111
            </p>
          </a>
        </div>

        {/* Location-Based Services Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Explore Services by Location
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { location: 'Hyderabad', count: '17 services' },
              { location: 'Gachibowli', count: '17 services' },
              { location: 'HITEC City', count: '17 services' },
              { location: 'Jubilee Hills', count: '17 services' },
              { location: 'Kondapur', count: '17 services' },
              { location: 'Madhapur', count: '17 services' }
            ].map((item) => (
              <Link
                key={item.location}
                href={`/${item.location.toLowerCase().replace(' ', '-')}/printing-services/business-card-printing/business`}
                className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 transition-all duration-200 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                      {item.location}
                    </h4>
                    <p className="text-sm text-gray-600">{item.count}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-blue-600 font-semibold text-lg">170+</div>
            <div className="text-sm text-gray-600">Location Pages</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-green-600 font-semibold text-lg">4.9★</div>
            <div className="text-sm text-gray-600">Google Rating</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-orange-600 font-semibold text-lg">40+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-purple-600 font-semibold text-lg">24hr</div>
            <div className="text-sm text-gray-600">Fast Delivery</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm pt-8">
          <p>© 2025 Printmarket.in - Professional Printing Services</p>
          <p className="mt-1">Powered by KGN Xerox Excellence since 1983</p>
        </div>
      </div>
    </main>
  );
}