"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Staffing Solutions", href: "/services" },
  { name: "Employers", href: "/apply/employer" },   // Updated path
  { name: "Candidates", href: "/apply/candidate" }, // Updated path
  { name: "Career services", href: "/career-services" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  {name: "Jobs", href: "/jobs" },  //Updated path to job listings page
];

  return (
    
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0B1F3A]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90 shrink-0">
          <Image
            src="/logo/aurevia-logo-white.png"
            alt="Aurevia Staffing"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Navigation Items Hub */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Main Links - Visible on medium screens and up */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href}
                className="text-xs font-medium text-white opacity-80 hover:opacity-100 transition-opacity relative py-2 group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8A24C] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Premium Standalone Apply Button - Linked to /jobs & forced visible */}
          <Link 
            href="/jobs" 
            className="bg-[#C8A24C] hover:bg-white text-[#0B1F3A] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md transform hover:-translate-y-0.5 whitespace-nowrap block"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </nav>
  );
}
