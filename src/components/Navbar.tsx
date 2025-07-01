'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-purple-700 shadow-md fixed top-0 z-50 px-6 md:px-20 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/TechIT Eazy logo.jpg"
          alt="TechIT Eazy Logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
          priority
        />
        <span className="text-xl font-bold text-white">TechIT Eazy</span>
      </div>

      <div className="flex gap-6 text-sm font-bold text-white">
        <Link href="/" className="hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="/about" className="hover:underline underline-offset-4">
          About
        </Link>
      </div>
    </nav>
  );
}
