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
              src="/logo.png" // Points straight to public/logo.png
              alt="Aurevia Logo" 
              width={140} 
              height={45} 
              className="object-contain"
              priority
              onError={(e) => {
                // Fallback text if the image asset isn't inside public/ yet
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-white font-bold tracking-wider text-sm md:hidden ml-2">AUREVIA</span>
          </Link>

          {/* DESKTOP LINKS */}
<div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300 uppercase tracking-wider">
  <Link href="/" className="hover:text-[#C8A24C] transition">Home</Link>
  <Link href="/services" className="hover:text-[#C8A24C] transition">Staffing Solutions</Link>
  <Link href="/jobs" className="hover:text-[#C8A24C] transition">Jobs</Link>
  <Link href="/employers" className="hover:text-[#C8A24C] transition">Employers</Link>
  <Link href="/candidates" className="hover:text-[#C8A24C] transition">Candidates</Link>
  <Link href="/career-services" className="hover:text-[#C8A24C] transition">Career Services</Link>
  <Link href="/blog" className="hover:text-[#C8A24C] transition">Blog</Link>
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

            {/* HAMBURGER TRIGGER */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-[#C8A24C] p-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER EXTENSION (Matches your exact project folder paths) */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B1F3A] border-t border-white/5 px-4 pt-3 pb-6 space-y-1 shadow-inner max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5 border-b border-white/5">
            Home
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5 border-b border-white/5">
            Staffing Solutions
          </Link>
          <Link href="/jobs" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5 border-b border-white/5">
            Jobs
          </Link>
          <Link href="/employers" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5 border-b border-white/5">
            Employers
          </Link>
          <Link href="/candidates" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5 border-b border-white/5">
            Candidates
          </Link>
          <Link href="/career-services" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5 border-b border-white/5">
            Career Services
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5">
            Blog
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5">
            About Us
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-200 hover:text-[#C8A24C] py-2.5">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}