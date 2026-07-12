"use client";

import Navbar from "@/components/layout/Navbar";
import { Building2, Mail, Users, MessageSquare } from "lucide-react";

export default function EmployerRequest() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <Navbar />
      <div className="bg-[#0B1F3A] text-white pt-32 pb-16 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Hire Global Talent
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">Workforce Request Portal</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Company / Household Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <input required type="text" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm" placeholder="e.g. Aurevia Group" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Corporate Email Contact</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <input required type="email" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm" placeholder="hiring@company.com" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Staffing Specialization Needed</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm text-[#0B1F3A]">
                  <option>Private Residential Staffing</option>
                  <option>Educational Institution Placement</option>
                  <option>Hospitality Hospitality Sourcing</option>
                  <option>Corporate Team Scaling</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Approximate Personnel Count</label>
                <div className="relative">
                  <Users className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <input required type="number" min="1" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm" placeholder="e.g. 5" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Mandate Requirements & Operational Overview</label>
              <textarea required rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm" placeholder="Please detail the specific language competencies, certifications, or operational experience profiles required for this deployment..." />
            </div>

            <button type="submit" className="w-full py-4 bg-[#0B1F3A] hover:bg-[#C8A24C] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md">
              Submit Staffing Request Mandate
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}