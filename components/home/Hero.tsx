import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
     <section className="relative w-full">
      {/* --- HERO BACKGROUND & CONTENT --- */}
      <div className="relative w-full h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-hero.jpg"
            alt="Aurevia Staffing"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/80 via-[#0B1F3A]/70 to-[#0B1F3A]/60" />
        </div>
      

        {/* Content Container */}
        <div className="container mx-auto px-6 py-10 relative z-20 max-w-5xl text-left">
          
          {/* Tagline */}
          <span className="inline-block bg-[#D4A373]/20 text-[#E9C46A] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6 border border-[#D4A373]/30">
            Global Recruitment & Staffing
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-6">
            Connecting <span className="text-[#E9C46A]">Talent</span> Beyond Borders
          </h1>

          {/* Subheadline Paragraph */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-light">
            Aurevia Staffing connects exceptional African professionals with trusted employers 
            across Africa, the Middle East, and international markets through ethical recruitment 
            and world-class staffing solutions.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#E9C46A] hover:bg-[#ddb44a] text-[#0B1F3A] font-medium px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5">
              Find Jobs <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="border-2 border-white/80 hover:border-white text-white font-medium px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
              Hire Talent
            </button>
          </div>

        </div>
      </div>
</section>
  );
}