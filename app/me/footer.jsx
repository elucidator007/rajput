'use client'
import React from 'react';
import { Instagram, Youtube, Mail, Phone, MapPin, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#3B1C32] to-[#6A1E55] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-white/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Creating timeless fashion pieces that blend elegance with contemporary design.
            </p>
          </div>

          {/* Contact information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Contact
            </h3>
            <div className="space-y-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <div className="flex items-center space-x-3">
                <MapPin className="text-white/80 w-5 h-5" />
                <span className="text-white/80">123 Fashion Avenue, Design District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-white/80 w-5 h-5" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-white/80 w-5 h-5" />
                <span className="text-white/80">contact@yourfashionbrand.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Connect With Me
            </h3>
            <div className="flex space-x-6">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-200 hover:text-white/80"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              © {new Date().getFullYear()} Your Fashion Brand. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/60" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Montserrat:wght@300;400;500&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;