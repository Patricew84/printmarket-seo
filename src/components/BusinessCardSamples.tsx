'use client';

import React from 'react';
import Image from 'next/image';

export function BusinessCardSamples() {
  return (
    <div className="mb-12 max-w-4xl mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="/images/business-card-samples.jpg"
          alt="Professional business card samples - various designs and finishes"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-lg font-semibold">Premium Business Card Samples</p>
          <p className="text-sm opacity-90">Various designs, materials, and finishes available</p>
        </div>
      </div>
    </div>
  );
}