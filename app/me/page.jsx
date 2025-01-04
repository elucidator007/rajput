import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import AboutMe from './aboutMe'
import Footer from './footer'
import ExploreSection from './explore'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <ExploreSection />
      <Footer />
    </div>
  )
}

export default Page
