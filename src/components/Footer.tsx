import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/Printmarket logo icon.png" 
                alt="Printmarket.in" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Printmarket.in</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional printing services with 40+ years of excellence. 
              Same-day delivery across Hyderabad with premium quality guaranteed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="https://www.printmarket.in/business-cards-53/categories/" className="text-gray-300 hover:text-blue-400 transition-colors">Business Cards</a></li>
              <li><a href="https://www.printmarket.in/marketing-materials-27/marketing-materials-28/banner/" className="text-gray-300 hover:text-blue-400 transition-colors">Banner</a></li>
              <li><a href="https://www.printmarket.in/marketing-materials-27/marketing-materials-28/flyers-both-side/" className="text-gray-300 hover:text-blue-400 transition-colors">Flyer</a></li>
              <li><a href="https://www.printmarket.in/corporate-gifts-/employee-kit/products/" className="text-gray-300 hover:text-blue-400 transition-colors">Corporate Kits</a></li>
              <li><a href="https://www.printmarket.in/office-supplies-31/invitation-wedding-cards/wedding-invites/" className="text-gray-300 hover:text-blue-400 transition-colors">Wedding Cards</a></li>
              <li><a href="https://www.printmarket.in/labels-stickers/stickers/products/" className="text-gray-300 hover:text-blue-400 transition-colors">Stickers</a></li>
              <li><a href="https://www.printmarket.in/posters/products/" className="text-gray-300 hover:text-blue-400 transition-colors">Posters</a></li>
              <li><a href="https://www.printmarket.in/marketing-materials-27/marketing-materials-28/brochures-190/" className="text-gray-300 hover:text-blue-400 transition-colors">Brochures</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Hyderabad</li>
              <li>Gachibowli</li>
              <li>HITEC City</li>
              <li>Jubilee Hills</li>
              <li>Banjara Hills</li>
              <li>Secunderabad</li>
              <li>Kondapur</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Call us now</p>
                  <a href="tel:+919949925111" className="text-white font-semibold hover:text-blue-400">
                    +91-9949925111
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Email us</p>
                  <a href="mailto:print@printmarket.com" className="text-white font-semibold hover:text-blue-400">
                    print@printmarket.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Main Office</p>
                  <p className="text-white font-semibold">Hyderabad, Telangana</p>
                  <p className="text-gray-400 text-sm">Multiple locations across city</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Printmarket.in. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <a href="https://www.printmarket.in/privacy-policy.html" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="https://www.printmarket.in/terms-of-use.html" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="https://www.printmarket.in/contact-us.html" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};