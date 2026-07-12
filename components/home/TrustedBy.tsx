"use client";
import Image from "next/image";
interface StatItem {
  number: string;
  label: string;
}

interface LogoItem {
  name: string;
  src: string;
}

export default function TrustedBy() {
  // Stat Counters Data
  const stats: StatItem[] = [
    { number: "10,000+", label: "Professionals Placed" },
    { number: "150+", label: "Global Corporate Partners" },
    { number: "98%", label: "Retention Success Rate" },
    { number: "15+", label: "Countries Served" },
  ];

   // Professional corporate logo vectors for instant rendering
  const logos: LogoItem[] = [
    { 
      name: "Stripe", 
      src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
    },
    { 
      name: "Macintosh", 
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Macintosh_logo_reversed.svg" 
    },
    { 
      name: "Deloitte", 
      src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" 
    },
    { 
      name: "Amazon Web Services", 
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
    },
    { 
      name: "Accenture", 
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" 
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Luxury Stats Card Overlay Panel */}
        <div className="bg-[#0B1F3A] rounded-2xl p-8 md:p-12 shadow-xl -mt-26 relative z-30 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#C8A24C] mb-2 tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-300 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Brand Logos Showcase */}
        <div className="mt-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-10">
            Trusted by World-Class Enterprises & Fast-Growing Startups
          </p>

          {/* Grayscale Logo Showcase */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="transition-all duration-300 filter grayscale brightness-0 opacity-70 hover:grayscale-0 hover:brightness-100 hover:opacity-100 cursor-pointer scale-95 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={130}
                  height={40}
                  unoptimized // Allows rendering external SVG assets securely without local domain configs
                  className="h-8 w-auto object-contain max-w-[130px]"/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}