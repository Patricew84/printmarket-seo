import React from 'react';

interface ComparisonFeature {
  feature: string;
  printmarket: string | boolean;
  competitor1: string | boolean;
  competitor2: string | boolean;
  competitor3?: string | boolean;
}

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  competitors: {
    printmarket: string;
    competitor1: string;
    competitor2: string;
    competitor3?: string;
  };
  features: ComparisonFeature[];
  highlightColor?: string;
}

export function ComparisonTable({
  title,
  subtitle,
  competitors,
  features,
  highlightColor = "bg-primary-50 border-primary-200"
}: ComparisonTableProps) {
  const renderCell = (value: string | boolean, isPrintmarket: boolean = false) => {
    if (typeof value === 'boolean') {
      return (
        <div className="flex justify-center">
          {value ? (
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center border border-red-200">
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <span className={`font-poppins ${isPrintmarket ? 'font-semibold text-green-700' : 'text-gray-700'}`}>
        {value}
      </span>
    );
  };


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight font-poppins">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <thead>
              <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                <th className="px-8 py-6 text-left font-semibold text-gray-900 border-r border-gray-300 text-lg font-poppins">
                  Features
                </th>
                <th className="px-8 py-6 text-center font-bold text-white bg-gradient-to-r from-green-600 to-green-500 border-r border-green-400 text-lg shadow-md font-poppins">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                      <img 
                        src="/images/Printmarket logo icon.png" 
                        alt="Printmarket.in" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span>Printmarket.in</span>
                  </div>
                </th>
                <th className="px-8 py-6 text-center font-semibold text-gray-700 border-r border-gray-300 font-poppins">
                  {competitors.competitor1}
                </th>
                <th className={`px-8 py-6 text-center font-semibold text-gray-700 font-poppins ${competitors.competitor3 ? 'border-r border-gray-300' : ''}`}>
                  {competitors.competitor2}
                </th>
                {competitors.competitor3 && (
                  <th className="px-8 py-6 text-center font-semibold text-gray-700 font-poppins">
                    {competitors.competitor3}
                  </th>
                )}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-gray-50 transition-colors`}
                >
                  <td className="px-8 py-5 font-medium text-gray-900 border-r border-gray-200 font-poppins">
                    {feature.feature}
                  </td>
                  <td className="px-8 py-5 text-center border-r border-gray-200 bg-green-50/80">
                    {renderCell(feature.printmarket, true)}
                  </td>
                  <td className="px-8 py-5 text-center border-r border-gray-200">
                    {renderCell(feature.competitor1)}
                  </td>
                  <td className={`px-8 py-5 text-center ${competitors.competitor3 ? 'border-r border-gray-200' : ''}`}>
                    {renderCell(feature.competitor2)}
                  </td>
                  {competitors.competitor3 && feature.competitor3 !== undefined && (
                    <td className="px-8 py-5 text-center">
                      {renderCell(feature.competitor3)}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Ready to experience the Printmarket.in advantage?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-9949925111"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Call Now: +91-9949925111
            </a>
            <a
              href="https://www.printmarket.in/quote_create.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}