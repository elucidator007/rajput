'use client'

import { useState } from "react";
import ContactForm from "./contactForm";
import Link from "next/link";

export default function Home() {
  const [contact, setContact] = useState(false);

  const handleContactButton = () => {
    setContact(prev => !prev);
  }

  const handleFormFill = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = Object.fromEntries(data);
    console.log(payload);
  }

  return (
    <main className="homepage-bg relative flex min-h-screen flex-col items-center justify-between p-24">
      <div className="homepage-bg-overlay"></div>
      
      <div className="homepage-content flex flex-col items-center justify-between w-full h-full league-spartan-heading">
        <div className="text-lg text-white">Crestiqu's Author</div>
        <div className="text-9xl text-white">Neha Rajput</div>
        <div className="flex flex-col items-center justify-center gap-5 leading-5 tracking-widest text-white">
          <div>FASHION DESIGNER</div>
          <div>CREATIVE BY WAY OF CREATOR</div>
          <div>Chandigarh | Mohali | Panchkula</div>
        </div>
        <div className="flex gap-5">
          <button 
            className='border-2 border-white px-4 py-2 hover:bg-white hover:text-black tracking-wider text-white' 
            onClick={handleContactButton}
          >
            CONTACT
          </button>
          <Link href="/me">
            <button className='border-2 border-white px-4 py-2 hover:bg-white hover:text-black tracking-wider text-white'>
              PORTFOLIO
            </button>
          </Link>
        </div>
      </div>

      {contact && (
        <ContactForm handleContactButton={handleContactButton} />
      )}
    </main>
  );
}