import React from 'react';
import { NAVBAR_ITEMS } from '@/utility/constants';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="ml-5 px-2">
        <div className="flex items-center justify-start h-20 gap-10">
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

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;