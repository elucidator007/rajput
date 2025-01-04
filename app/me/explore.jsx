'use client'
import React from 'react';
import { EXPLORE_ITEMS } from '@/utility/constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ExploreSection = () => {
  return (
    <section className="bg-white py-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h2 
          className="text-5xl font-bold bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] inline-block text-transparent bg-clip-text mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Explore
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#3B1C32] to-[#6A1E55]" />
      </div>

      {/* Explore Items */}
      <div className="max-w-6xl mx-auto px-4">
        {EXPLORE_ITEMS.map((item, index) => (
          <div 
            key={item.id}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                       items-center gap-12 mb-20 last:mb-0`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B1C32] to-[#6A1E55] transform rotate-3 opacity-10 rounded-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-105" />
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="relative z-10 w-full h-[400px] object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-4">
                <span 
                  className="text-sm font-medium text-[#6A1E55] tracking-wider"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.category}
                </span>
                <h3 
                  className="text-3xl font-semibold text-[#3B1C32]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>

              <a 
                href={item.link}
                className="inline-flex items-center space-x-2 text-[#6A1E55] hover:text-[#3B1C32] transition-colors duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@300;400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default ExploreSection;