"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // ◄ ADD THIS LINE

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you would attach your API request logic here
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="bg-white max-w-xl w-full rounded-2xl border border-slate-200/60 p-8 shadow-xl">
        
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
                Global Gateway
              </span>
              <h1 className="text-3xl font-extrabold text-[#0B1F3A] mt-3">Submit Your Profile</h1>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Join our elite talent roster. Our compliance team enforces a strict candidate-pays-zero-fees model.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">Full Name</label>
                <input required type="text" className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8A24C] text-[#0B1F3A]" placeholder="John Doe" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">Email Address</label>
                  <input required type="email" className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8A24C] text-[#0B1F3A]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">Desired Sector</label>
                  <select className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8A24C] text-[#0B1F3A]">
                    <option>Education Staffing</option>
                    <option>Hospitality Staffing</option>
                    <option>Administration & Corporate</option>
                    <option>Household Staffing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2">Upload CV / Resume</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer relative">
                  <input required type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <svg className="w-8 h-8 mx-auto text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-xs font-medium text-slate-600">Click to upload or drag and drop</p>
                  <p className="text-[10px] text-slate-400 mt-1">PDF, DOCX up to 10MB</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#0B1F3A] text-white font-bold text-sm py-4 rounded-xl hover:bg-[#C8A24C] transition duration-300 shadow-md">
                Submit Application
              </button>
            </form>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-extrabold text-[#0B1F3A]">Application Transmitted</h2>
            <p className="text-sm text-slate-500 mt-3 max-w-sm mx-auto leading-relaxed">
              Your profile has successfully entered our pre-vetting ledger. A compliance manager will contact you if your qualifications match our current vacancies.
            </p>
          </motion.div>
        )}

      </div>
    </main>
  );
}