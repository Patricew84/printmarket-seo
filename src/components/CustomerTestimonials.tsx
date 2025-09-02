"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "ID card printing was done with good pictures. Charge was 400 since the quality are of 1st grade. They delivered it on time without any damage and the work was done in a perfect card. I'm satisfied with their service.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rajesh Kumar",
    role: "Business Owner",
    rating: 5,
  },
  {
    text: "Taken Visiting Card printing service through this Center, their service is very nice... Quality of the card as well as printing was good. Will suggest them to my friends.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Marketing Professional",
    rating: 5,
  },
  {
    text: "The quality of the posters were immaculate and didn't take a long time to print, and was still of top quality! Imran Bhai had the best customer service and allowed for easy communication and printing experience.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Arjun Reddy",
    role: "Event Manager",
    rating: 5,
  },
  {
    text: "I am a regular customer and I print various types of items here and I have always had an amazing experience. Staff here are cordial, helpful and know what they're doing.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Dr. Sneha Patel",
    role: "Healthcare Professional",
    rating: 5,
  },
  {
    text: "Friendly and helpful staff with high-quality prints! Their binding solutions are exceptional. The variety of products and services is impressive for our law firm needs.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Advocate Suresh",
    role: "Legal Professional",
    rating: 5,
  },
  {
    text: "Mr. Zahed and the team provide excellent customer service. KGN's unrivaled presence in Telangana is well-deserved. They deliver quality, service, and timely delivery.",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    name: "Meera Jain",
    role: "Finance Manager",
    rating: 5,
  },
  {
    text: "Their printing machinery is extraordinary! Some equipment is exclusive to their facility. Perfect for our restaurant's promotional materials and business cards.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    name: "Vikram Singh",
    role: "Restaurant Owner",
    rating: 5,
  },
  {
    text: "Over 40 years of experience in printing really shows in their work quality! Fast response time and excellent business card printing for our real estate business.",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Kavitha Rao",
    role: "Real Estate Agent",
    rating: 5,
  },
  {
    text: "Part of their 100,000+ happy customers across India! The digital and offset printing quality is outstanding. Their USPs of Service, Delivery, and Quality are evident.",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    name: "Ramesh Gupta",
    role: "Manufacturing Director",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const CustomerTestimonials = () => {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <svg className="w-4 h-4 mr-2 text-yellow-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              Customer Reviews
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-6">
            What Our Customers Say About Us
          </h2>
          <p className="text-center text-lg text-gray-600 leading-relaxed">
            Real feedback from Hyderabad businesses who trust KGN Xerox for their printing needs.
          </p>
          
          {/* 5-Star Rating Display */}
          <div className="flex items-center gap-2 mt-6">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9</span>
            <a 
              href="https://www.google.com/maps/place/KGN+XEROX+LLP/@19.4365506,71.8532475,7z/data=!4m12!1m2!2m1!1skgn+xerox!3m8!1s0x3bcb97448b269ca5:0x2f8ecb44bd968dbb!8m2!3d17.407661!4d78.4606862!9m1!1b1!15sCglrZ24geGVyb3giA4gBAVoLIglrZ24geGVyb3iSARhkaWdpdGFsX3ByaW50aW5nX3NlcnZpY2WqAVAKDS9nLzExYjgyNmQwd2QQASoNIglrZ24geGVyb3goADIfEAEiG5V3rT9lSodC0DiXBnlra_ekCj6W7kJbTr51szINEAIiCWtnbiB4ZXJveOABAA!16s%2Fg%2F1tfkjmkh?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              • Based on 14,000+ Google Reviews
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same professional quality and exceptional service that our customers rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-9949925111"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: +91-9949925111
            </a>
            <a
              href="https://www.printmarket.in/quote_create.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Your Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};