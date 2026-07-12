"use client";

import Navbar from "@/components/layout/Navbar";
import { Award, ShieldCheck, Heart, Target, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    { icon: <ShieldCheck className="w-5 h-5 text-[#C8A24C]" />, title: "Integrity & Trust", desc: "Operating with total transparency and absolute labor compliance across all international processing stages." },
    { icon: <Award className="w-5 h-5 text-[#C8A24C]" />, title: "Excellence", desc: "Rigorous screening frameworks designed to pass elite family office and corporate benchmarking standards." },
    { icon: <Heart className="w-5 h-5 text-[#C8A24C]" />, title: "Opportunity Creation", desc: "We focus on connecting exceptional regional talent with sustainable, life-changing careers abroad." }
  ];

  return (
    <main className="min-h-screen bg-white pb-24">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-[#0B1F3A] text-white pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Who We Are
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
          About Aurevia Staffing
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          Connecting Qualified African Professionals with Premium Global Opportunities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Dynamic Brand Narrative */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight mb-6">
            Our Business Blueprint
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Aurevia Staffing is a global recruitment and staffing agency focused on sourcing, screening, and placing qualified professionals across Africa into highly rewarding international markets, including the Middle East and beyond.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We serve as a vital bridge—matching specialized educators, childcare workers, hospitality specialists, and administrative professionals with elite corporate entities and private family households seeking dependable talent infrastructures.
          </p>

          {/* Strategic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap- mt-8">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-2 font-bold text-sm text-[#0B1F3A]">
                <Target className="w-4 h-4 text-[#C8A24C]" /> Vision
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">To be a trusted global staffing partner recognized for linking exceptional regional talent with life-changing opportunities.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-2 font-bold text-sm text-[#0B1F3A]">
                <Users className="w-4 h-4 text-[#C8A24C]" /> Mission
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">To empower individuals with access to quality employment while protecting employers with reliable, pre-vetted human resource assets.</p>
            </div>
          </div>
        </div>

        {/* Right: Modern Split Graphic Frame */}
        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <Image 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
            alt="Corporate Director Consultation"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-[#0B1F3A]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white">
            <h4 className="text-sm font-bold text-[#C8A24C] uppercase tracking-wider">Leadership Matrix</h4>
            <p className="text-base font-bold mt-1">Naomi Baidoo</p>
            <p className="text-xs text-slate-300">Founder & Director — Aurevia Staffing</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 mt-28 pt-16 border-t border-slate-100">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#0B1F3A]">Our Driving Corporate Values</h3>
          <p className="text-xs text-gray-400 mt-1">The moral foundation supporting every global assignment we complete.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h4 className="font-bold text-sm text-[#0B1F3A] mb-2">{val.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}