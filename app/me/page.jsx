'use client'
import React, { useRef } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import AboutMe from './aboutMe';
import Footer from './footer';
import ExploreSection from './explore';

const Page = () => {
  const exploreRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div>
      <Navbar exploreRef={exploreRef} footerRef={footerRef} />
      <AboutMe />
      <div ref={exploreRef}>
        <ExploreSection />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
