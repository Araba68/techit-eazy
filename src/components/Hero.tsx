'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="TechIT Eazy Background"
        fill
        className="object-cover object-center brightness-[0.4] z-0"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Digital Inclusion for Grassroots Impact
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl">
          We help CBOs, MSMEs, and social ventures thrive online by offering modern, impactful websites and digital support tailored to their mission.
        </p>
        
      </div>

      
    </section>
  );
}
