'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  badges?: string[];
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText = "Get Instant Quote",
  ctaLink = "tel:+91-9949925111",
  badges = ["Same Day Delivery", "40+ Years Experience", "Bulk Discounts"]
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Professional printing services background"
          fill
          className="object-cover"
          priority
          quality={85}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-blue-400 font-medium text-lg mb-4 tracking-wide">
            {subtitle}
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={ctaLink}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {ctaText}
            </a>
            <a
              href="https://www.printmarket.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Visit Printmarket.in
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-gray-300">
            <p className="text-lg">
              📞 Call Now: <a href="tel:+91-9949925111" className="text-blue-400 hover:text-blue-300 font-semibold">+91-9949925111</a>
            </p>
            <p className="text-sm mt-2">
              📧 Email: <a href="mailto:print@printmarket.in" className="text-blue-400 hover:text-blue-300">print@printmarket.in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}