"use client";

import Navbar from "@/components/layout/Navbar";
import { Sparkles, FileSpreadsheet, Video, ArrowRight, Check } from "lucide-react";

export default function CareerServicesPage() {
  const packages = [
    {
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: "CV Optimization Hub",
      price: "$49",
      desc: "Tailored rebuilding of your professional history matching Middle-Eastern ATS tracking patterns perfectly.",
      perks: ["Premium Format Delivery", "ATS Scoring Assessment", "2 Revision Cycles"]
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "LinkedIn Transformation",
      price: "$79",
      desc: "Keyword tuning and narrative layout adjustments to make global headhunters notice your profile automatically.",
      perks: ["Profile Audit Matrix", "Headline Generation", "Bio Rewrite Engine"]
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Elite Interview Coaching",
      price: "$120",
      desc: "1-on-1 intensive prep cycles simulation matching corporate and high-profile family office guidelines.",
      perks: ["60-Min Mock Simulation", "Behavioral Strategy Blueprint", "Recorded Review Playback"]
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-32">
      <Navbar />

      {/* Header Block */}
      <div className="bg-[#0B1F3A] text-white pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C8A24C_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full border border-[#C8A24C]/20 relative z-10">
          Maximize Your Trajectory
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 mb-4 relative z-10">
          Aurevia Career Support Services
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base relative z-10">
          Empowering African talent with high-impact optimization utilities built to capture enterprise attention instantly.
        </p>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A]">Premium Placement Packages</h2>
          <p className="text-gray-500 text-sm mt-2">Invest in tools that prepare you to execute seamlessly across international deployments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-6 group-hover:bg-[#C8A24C] transition-colors">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl font-black text-[#0B1F3A]">{pkg.price}</span>
                  <span className="text-xs text-gray-400 font-medium">/ flat service fee</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">{pkg.desc}</p>
                
                <ul className="space-y-2.5 pt-4 border-t border-slate-200/60 mb-8">
                  {pkg.perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]/80">
                      <Check className="w-3.5 h-3.5 text-[#C8A24C]" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-3 bg-[#0B1F3A] text-white group-hover:bg-[#C8A24C] transition-all rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                Order Package <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}