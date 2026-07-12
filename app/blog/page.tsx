"use client";

import Navbar from "@/components/layout/Navbar";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      title: "Navigating International Placements: A Guide for African Professionals",
      desc: "Essential compliance, resume adaptations, and expectations to prepare for corporate deployments in the Gulf region.",
      date: "July 08, 2026",
      author: "Naomi Baidoo"
    },
    {
      title: "What Elite Family Offices Look for in Modern House Managers",
      desc: "Breaking down the premium skill sets, discretion metrics, and management traits required to manage luxury international estates.",
      date: "July 02, 2026",
      author: "Aurevia Insights"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <Navbar />

      <div className="bg-[#0B1F3A] text-white pt-32 pb-20 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Knowledge Base
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
          Blog & Resources
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Industry updates, placement strategies, and international employment guidance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-20 space-y-6">
        {articles.map((art, idx) => (
          <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-3">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {art.date}</span>
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> By {art.author}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C8A24C] transition-colors">{art.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">{art.desc}</p>
            <button className="text-xs font-bold text-[#0B1F3A] bg-slate-50 px-4 py-2 rounded-lg group-hover:bg-[#0B1F3A] group-hover:text-white transition-all flex items-center gap-1">
              Read Entire Article <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}