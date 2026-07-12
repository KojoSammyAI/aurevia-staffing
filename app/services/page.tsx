"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Left Side: Image Slideshow Data
const IMAGE_SLIDES = [
  {
    url: "/images/hospitality-3.jpg", // Place in public/images/
    title: "Premium Hospitality & Culinary Teams",
    tag: "Hospitality Staffing",
    description: "Connecting luxury hotels, resorts, and fine dining establishments with world-class hospitality talent."
  },
  {
    url: "/images/household.jpg", // Place in public/images/
    title: "Estate Managers, Private Chefs & Domestic Staff",
    tag: "Household Staffing",
    description: "Providing highly trusted, pre-vetted professionals for private estates and high-net-worth families."
  }
];

export default function ServiceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Video Modal State tracks null (closed) or the video source string (open)
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Auto-advance the image slideshow every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGE_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-24 lg:max-w-7xl lg:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
            Specialized Sectors
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] mt-3">
            Our Staffing Solutions
          </h2>
        </div>

        {/* Media Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Hospitality & Household Image Slideshow (Spans 7 columns) */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-black flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={IMAGE_SLIDES[currentSlide].url}
                  alt={IMAGE_SLIDES[currentSlide].title}
                  fill
                  className="object-cover object-center opacity-80"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/30 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#C8A24C] bg-[#0B1F3A]/85 border border-white/10 px-3 py-1 rounded-md">
                    {IMAGE_SLIDES[currentSlide].tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mt-3 tracking-tight">
                    {IMAGE_SLIDES[currentSlide].title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 mt-1.5 leading-relaxed max-w-xl font-light">
                    {IMAGE_SLIDES[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute top-6 right-6 flex gap-1.5 z-20 bg-[#0B1F3A]/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
              {IMAGE_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-6 bg-[#C8A24C]" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Education & Corporate Video Showcase (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Top Video Block: Education Staffing */}
            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#C8A24C] bg-[#C8A24C]/10 px-2.5 py-0.5 rounded">
                  Education Staffing
                </span>
                <h3 className="text-lg font-bold text-[#0B1F3A] mt-2 mb-1">
                  Academic Placement Insights
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Watch our recruitment strategy for placing certified educators and institutional leaders globally.
                </p>
              </div>

              {/* Video Trigger */}
              <div 
                onClick={() => setActiveVideoUrl("images/videos/education.mp4?autoplay=1")} // OR local route like "/videos/education.mp4"
                className="relative rounded-xl overflow-hidden cursor-pointer group bg-slate-900 h-32 flex items-center justify-center border border-slate-100 shadow-inner"
              >
                <Image 
                  src="/images/education-thumbnail.jpg" 
                  alt="Education Video Thumbnail"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#C8A24C] flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-4 h-4 text-[#0B1F3A] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Video Block: Administration & Corporate Support */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#C8A24C] bg-[#C8A24C]/10 px-2.5 py-0.5 rounded">
                  Administration & Corporate Support
                </span>
                <h3 className="text-lg font-bold text-[#0B1F3A] mt-2 mb-1">
                  Corporate Operations Overview
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  See how we source bilingual operations assets and executive support for corporate entities.
                </p>
              </div>

              {/* Video Trigger */}
              <div 
                onClick={() => setActiveVideoUrl("images/videos/admin.mp4?autoplay=1")} // OR local route like "/videos/admin.mp4"
                className="relative rounded-xl overflow-hidden cursor-pointer group bg-slate-900 h-32 flex items-center justify-center border border-slate-100 shadow-inner"
              >
                <Image 
                  src="/images/corporate-thumbnail.jpg" 
                  alt="Corporate Video Thumbnail"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#C8A24C] flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-4 h-4 text-[#0B1F3A] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* DYNAMIC LIGHTBOX VIDEO MODAL POPUP */}
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveVideoUrl(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white font-bold text-xs tracking-widest">
              ESC TO CLOSE ✕
            </button>

            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-[#0B1F3A]"
            >
              {/* Handles both web stream embeds (youtube/vimeo) and local mp4 routing strings dynamically */}
              {activeVideoUrl.includes("embed") ? (
                <iframe 
                  className="w-full h-full" 
                  src={activeVideoUrl}
                  title="Aurevia Video Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              ) : (
                <video 
                  className="w-full h-full object-contain" 
                  src={activeVideoUrl} 
                  controls 
                  autoPlay
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}