import React from 'react';
import { MapPin, Clock, Shield } from 'lucide-react';
import { OfficeLocation, kgnOfficeLocations } from '@/data/programmatic-seo';

interface LocalOfficesProps {
  offices: OfficeLocation[];
  location: string;
}

export const LocalOffices: React.FC<LocalOfficesProps> = ({ location }) => {
  // Import all offices to show all 4 branches
  const allOffices = kgnOfficeLocations || [];
  
  // More precise logic for "close to you" - only show if location exactly matches serving areas
  const getClosestOffice = (office: OfficeLocation) => {
    return office.servingAreas.some((area: string) => 
      area.toLowerCase() === location.toLowerCase() ||
      office.area.toLowerCase() === location.toLowerCase()
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Branches in Hyderabad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our convenient locations for immediate service or quick consultations. 
            Our local offices ensure you get the personal touch you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allOffices.map((office, index) => {
            // Check if this office is closest to the current location
            const isClosest = getClosestOffice(office);
            return (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${isClosest ? 'ring-2 ring-blue-500' : ''}`}>
              {isClosest && (
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Close to you
                </div>
              )}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {office.area}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Serving: {office.servingAreas.slice(0, 3).join(', ')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </div>

              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 inline-block">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Can&apos;t visit? No problem!
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              Get same-day pickup and delivery service across all areas in {location}. 
              Order online and we&apos;ll handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors">
                WhatsApp: +91-9949925111
              </button>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Call: +91-9949925111
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};