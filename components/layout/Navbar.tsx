"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1F3A] border-b border-white/5 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo.png" // Double-check your logo path
              alt="Aurevia Logo" 
              width={140} 
              height={45} 
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-[#C8A24C] transition">Home</Link>
            <Link href="/staffing-solutions" className="hover:text-[#C8A24C] transition">Staffing Solutions</Link>
            <Link href="/about" className="hover:text-[#C8A24C] transition">About Us</Link>
            <Link href="/contact" className="hover:text-[#C8A24C] transition">Contact</Link>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            <Link 
              href="/apply" 
              className="bg-[#C8A24C] hover:bg-white text-[#0B1F3A] text-xs font-bold px-4 py-2.5 rounded-md transition tracking-wider uppercase shadow-sm"
            >
              Apply Now
            </Link>

            {/* HAMBURGER TRIGGER (Visible ONLY on Mobile) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-[#C8A24C] p-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                // "X" Close Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // 3-Line Hamburger Menu Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER EXTENSION (Slides open dynamically) */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1F3A] border-t border-white/5 px-4 pt-3 pb-6 space-y-3 shadow-inner">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-[#C8A24C] py-2 border-b border-white/5"
          >
            Home
          </Link>
          <Link 
            href="/staffing-solutions" 
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-[#C8A24C] py-2 border-b border-white/5"
          >
            Staffing Solutions
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-[#C8A24C] py-2 border-b border-white/5"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-[#C8A24C] py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}