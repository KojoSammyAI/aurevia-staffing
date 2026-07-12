"use client";

import { useState } from "react";
import { Globe, ShieldCheck, Zap, Users, Play, X } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#C8A24C]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
            Why Aurevia
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight mt-4 mb-6 leading-tight">
            Bridging the Gap Between African Talent & Global Workforce Demands
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Built on transparency, integrity, and excellence. We source exceptional, vetted professionals across Africa for premium households and global enterprises.
          </p>
        </div>

        {/* Media-Rich Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Large Featured Card with Premium Abstract Sourcing Image Overlay */}
          <div className="md:col-span-2 group relative overflow-hidden bg-[#0B1F3A] p-8 md:p-10 rounded-3xl transition-all duration-500 shadow-sm border border-white/10 flex flex-col justify-between min-h-[360px]">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Global team collaborating"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#C8A24C]/20 text-[#C8A24C] flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pan-African Sourcing Network</h3>
              <p className="text-gray-300 leading-relaxed max-w-xl">
                Deep sourcing pipelines across core hubs including Ghana, Zimbabwe, Nigeria, Kenya, Uganda, and South Africa, giving you access to pre-vetted, top-tier specialists.
              </p>
            </div>
            <div className="relative z-10 mt-8 text-xs font-semibold text-[#C8A24C] tracking-wider uppercase">
              Sourcing across 6+ major African nations
            </div>
          </div>

          {/* Card 2: Interactive Video Playback Dashboard Card */}
          <div className="group relative overflow-hidden bg-slate-900 rounded-3xl border border-gray-800 flex flex-col justify-between min-h-[360px] shadow-lg">
            {/* Background Video Thumbnail Image */}
            <div className="absolute inset-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=500&q=80" 
                alt="Aurevia Corporate Overview video thumbnail"
                fill
                className="object-cover filter brightness-75"
              />
            </div>
            
            {/* Play Button Interface Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-white text-[#0B1F3A] hover:bg-[#C8A24C] hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative group/btn"
              >
                {/* Decorative Pulse Radar Animation Effect */}
                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping group-hover/btn:bg-[#C8A24C]/30" />
                <Play className="w-6 h-6 fill-current ml-1" />
              </button>
              <span className="text-white text-xs font-bold uppercase tracking-widest mt-4 drop-shadow-md">
                Watch Corporate Overview
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
              <p className="text-xs font-semibold">Message from Founder & Director</p>
              <p className="text-[11px] text-gray-300">Naomi Baidoo</p>
            </div>
          </div>

          {/* Card 3: Ethical Sourcing Card */}
          <div className="group bg-slate-50 p-8 rounded-3xl transition-all duration-300 hover:bg-slate-100/80 border border-gray-100 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-6 group-hover:bg-[#0B1F3A] group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Ethical & Transparent</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A commitment to transparent recruitment with rigorous background checking, screening, and verified labor compliance.
              </p>
            </div>
          </div>

          {/* Card 4: International Footprint Card */}
          <div className="group bg-slate-50 p-8 rounded-3xl transition-all duration-300 hover:bg-slate-100/80 border border-gray-100 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-6 group-hover:bg-[#0B1F3A] group-hover:text-white transition-colors duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">International Footprint</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Seamless placement deployment operational frameworks covering the UAE, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait.
              </p>
            </div>
          </div>

          {/* Card 5: Large Life-Changing Opportunities Card */}
          <div className="md:col-span-3 group relative overflow-hidden bg-slate-50 p-8 md:p-10 rounded-3xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-8 justify-between items-center min-h-[260px]">
            <div className="max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Life-Changing Opportunities</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We do not just staff roles; we empower exceptional African candidates by linking them directly with verified corporate partnerships, family offices, and leading institutions abroad.
              </p>
            </div>
            
            {/* Split Decorative Layout Image for Card 5 */}
            <div className="w-full md:w-72 h-44 relative rounded-2xl overflow-hidden shrink-0 shadow-inner">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80"
                alt="Professional candidate onboarding"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Video Lightbox Modal Backdrop Component */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 animate-fadeIn">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#C8A24C] transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
            {/* Embedded Video Placeholder — Swap src parameter when you have your corporate asset */}
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Aurevia Corporate Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}