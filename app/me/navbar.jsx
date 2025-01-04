'use client'
import React, { useState } from 'react';
import { NAVBAR_ITEMS } from '@/utility/constants';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="ml-5 px-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={80}
                height={80}
                priority
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {NAVBAR_ITEMS.map(item => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[#A64D79] font-medium tracking-wide text-sm group-hover:text-[#6A1E55] transition-colors duration-300 ease-in-out">
                      {item.label}
                    </span>
                    <span className="h-0.5 w-0 bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] group-hover:w-full transition-all duration-300 ease-in-out" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#A64D79] hover:text-[#6A1E55] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            {NAVBAR_ITEMS.map(item => (
              <div
                key={item.id}
                className="relative group cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex flex-col items-start">
                  <span className="text-[#A64D79] font-medium tracking-wide text-sm group-hover:text-[#6A1E55] transition-colors duration-300 ease-in-out">
                    {item.label}
                  </span>
                  <span className="h-0.5 w-0 bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] group-hover:w-full transition-all duration-300 ease-in-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;