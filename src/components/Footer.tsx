'use client';

import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#3F8EFC] text-white pt-12 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">TechIT Eazy</h3>
          <p className="text-sm leading-relaxed">
            We’re on a mission to digitize grassroots CBOs, NGOs, and MSMEs across Kenya — starting with modern websites and growing into full-stack tech partnerships.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Explore</h4>
          <ul className="text-sm space-y-2">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#what-we-do" className="hover:underline">What We Do</Link></li>
            <li><Link href="#impact" className="hover:underline">Impact</Link></li>
            <li><Link href="#success" className="hover:underline">Success Stories</Link></li>
            <li><Link href="#partners" className="hover:underline">Partners</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect</h4>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" /> infotechiteazy@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-lg" /> 0707021592 / 0717802526
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-lg" />
              <Link href="https://www.linkedin.com/in/techit-eazy-747864372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:underline">
                LinkedIn
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-lg" />
              <Link href="https://www.instagram.com/techit_eazy/" target="_blank" className="hover:underline">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-blue-200 mt-12 pt-4 text-center text-sm text-blue-100">
        &copy; {new Date().getFullYear()} TechIT Eazy. Built for grassroots impact.
      </div>
    </footer>
  );
}
