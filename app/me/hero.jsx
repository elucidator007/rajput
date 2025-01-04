'use client'
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#3B1C32] to-[#6A1E55] overflow-hidden">
      {/* Abstract geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-white transform -rotate-45"
              style={{
                width: '200%',
                left: `-50%`,
                top: `${i * 15}%`,
              }}
            />
          ))}
        </div>

        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-2xl" />
        
        {/* Fashion-inspired elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-white/20 rotate-45 transform" />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Welcome text */}
        <h1 className="mb-6 text-7xl font-bold text-white opacity-0"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              animation: 'fadeInUp 1s ease-out forwards',
              letterSpacing: '0.05em'
            }}>
          Welcome
        </h1>

        {/* Decorative line */}
        <div 
          className="w-24 h-px bg-white/50 mb-8 opacity-0"
          style={{
            animation: 'fadeInUp 1s ease-out 0.3s forwards'
          }}
        />

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-xl text-white/90 opacity-0"
           style={{
             fontFamily: "'Montserrat', sans-serif",
             animation: 'fadeInUp 1s ease-out 0.5s forwards',
             letterSpacing: '0.02em',
             lineHeight: '1.8'
           }}>
          Where elegance meets innovation, and every stitch tells a story of timeless beauty and contemporary design.
        </p>

        {/* CTA button */}
        <button 
          className="mt-12 px-10 py-4 text-lg font-light text-[#6A1E55] bg-white/95 rounded-none 
                     opacity-0 transform hover:bg-white transition-all duration-300 ease-in-out
                     border border-transparent hover:border-white/20"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            animation: 'fadeInUp 1s ease-out 1s forwards',
            letterSpacing: '0.2em'
          }}>
          EXPLORE COLLECTION
        </button>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Montserrat:wght@300;400&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;