"use client";

import Navbar from "@/components/layout/Navbar";
import { User, Mail, Briefcase, FileText, Upload } from "lucide-react";

export default function CandidateApply() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <Navbar />
      <div className="bg-[#0B1F3A] text-white pt-32 pb-16 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Join Our Talent Pool
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">Candidate Application</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <input required type="text" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm" placeholder="John Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <input required type="email" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm" placeholder="john@example.com" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Target Sector</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <select className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm text-[#0B1F3A]">
                    <option>Household / Domestic</option>
                    <option>Education / Teaching</option>
                    <option>Hospitality</option>
                    <option>Corporate Support</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Years of Experience</label>
                <input required type="number" min="0" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm" placeholder="e.g. 3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Upload Curriculum Vitae (CV)</label>
              <div className="border-2 border-dashed border-slate-200 hover:border-[#C8A24C] rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50">
                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500 font-medium">Click to upload or drag and drop your PDF / Word document</p>
                <p className="text-[10px] text-gray-400 mt-1">Max file size: 5MB</p>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-[#0B1F3A] hover:bg-[#C8A24C] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md">
              Submit My Candidate Profile
            </button>
          </form>
          </div>

      </div>
    </main>
  );
}