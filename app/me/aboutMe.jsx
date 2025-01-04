'use client'
import React from 'react';
import Image from 'next/image';
import { ACHIEVEMENTS } from '@/utility/constants';
import { MY_IMAGE } from '@/utility/constants';

const AboutMe = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading with gradient */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-bold bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] inline-block text-transparent bg-clip-text"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-[#3B1C32] to-[#6A1E55]" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B1C32] to-[#6A1E55] transform rotate-3 opacity-10 rounded-lg" />
            <Image
              src={MY_IMAGE}
              alt="Fashion Designer"
              width={600}
              height={800}
              priority
              className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <h3 
              className="text-3xl font-semibold text-[#3B1C32] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Crafting Elegance, Designing Dreams
            </h3>
            
            <div 
              className="space-y-4 text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                With over a decade of experience in haute couture and ready-to-wear fashion, 
                I&apos;ve dedicated my life to creating pieces that empower and inspire. My journey 
                in fashion began in the vibrant streets of Paris, where I honed my craft under 
                the guidance of renowned designers.
              </p>
              
              <p>
                Every collection I create is a narrative of elegance, sustainability, and 
                innovation. I believe in fashion that not only makes you look spectacular but 
                also tells your unique story. My designs blend traditional craftsmanship with 
                contemporary aesthetics, creating timeless pieces for the modern woman.
              </p>

              <p>
                When I&apos;m not in my atelier, you&apos;ll find me exploring art galleries, traveling 
                for inspiration, or collaborating with emerging artists to push the boundaries 
                of fashion design.
              </p>
            </div>

            {/* Signature section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div 
                className="italic text-[#6A1E55] text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &quot;Fashion is not just about clothes; it&apos;s about confidence, self-expression, 
                and the art of possibility.&quot;
              </div>
            </div>
          </div>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="text-4xl font-bold text-[#6A1E55] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {achievement.number}
              </div>
              <div 
                className="text-xl font-semibold text-[#3B1C32] mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {achievement.title}
              </div>
              <div 
                className="text-gray-600"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital@0;1&display=swap');
      `}</style>
    </section>
  );
};

export default AboutMe;