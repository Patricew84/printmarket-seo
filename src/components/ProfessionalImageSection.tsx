'use client';

import React from 'react';
import Image from 'next/image';

interface ProfessionalImageSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  imagePosition?: 'left' | 'right';
}

export function ProfessionalImageSection({
  imageSrc,
  imageAlt,
  title,
  description,
  features = [],
  ctaText,
  ctaLink,
  imagePosition = 'left'
}: ProfessionalImageSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${imagePosition === 'right' ? 'lg:grid-flow-col-reverse' : ''}`}>
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {features.length > 0 && (
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1 mr-4">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            )}

            {ctaText && ctaLink && (
              <div>
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {ctaText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}