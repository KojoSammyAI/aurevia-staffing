"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { MapPin, Users, DollarSign, FileText, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JobListingsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample job posts mimicking administrative panel inputs
  const availableJobs = [
    {
      id: 1,
      title: "Executive House Manager",
      sector: "Household / Domestic",
      location: "Riyadh, Saudi Arabia",
      gender: "Any Gender",
      salaryRange: "$3,500 - $4,800 / month",
      requirements: [
        "Minimum 4 years experience in luxury estate management",
        "Fluent English speaker (Arabic is a plus)",
        "Valid international driving license and clean background profile"
      ],
      benefits: "Private accommodation, healthcare coverage, and annual return flights included."
    },
    {
      id: 2,
      title: "Early Childhood Teacher (SEN Specialist)",
      sector: "Education / Teaching",
      location: "Dubai, United Arab Emirates",
      gender: "Female Preferred",
      salaryRange: "AED 12,000 - 15,000 / month",
      requirements: [
        "Bachelor's Degree in Early Childhood Education or equivalent",
        "2+ years working with Special Educational Needs parameters",
        "Clear professional reference portfolio"
      ],
      benefits: "Tax-free salary, shared corporate housing allowance, and full visa processing."
    },
    {
      id: 3,
      title: "VVIP Hospitality Guest Relations Officer",
      sector: "Hospitality",
      location: "Doha, Qatar",
      gender: "Female Preferred",
      salaryRange: "$2,800 - $3,200 / month",
      requirements: [
        "Diploma in Hospitality or Premium Customer Relations management",
        "Exceptional communication and high-discretion standard",
        "Prior experience in 5-star hotel or luxury lounge environments"
      ],
      benefits: "Luxury staff accommodation, uniform provisions, meals on duty, and tips."
    }
  ];

  // Simple filtering logic
  const filteredJobs = availableJobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-[#0B1F3A] text-white pt-32 pb-20 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Current Placement Openings
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
          Explore International Vacancies
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Pre-vetted premium roles across the Middle East. Review specific operational metrics and apply securely.
        </p>

        {/* Live Search Bar Component */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by role name, country, or department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white text-[#0B1F3A] rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8A24C] text-sm font-medium"
          />
        </div>
      </div>

      {/* Main Job Grid */}
      <div className="max-w-5xl mx-auto px-6 mt-16 space-y-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group hover:border-[#C8A24C]/40 transition-all">
              
              {/* Header Info Block */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8A24C] bg-[#C8A24C]/10 px-2.5 py-1 rounded-md">
                    {job.sector}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0B1F3A] mt-2 group-hover:text-[#C8A24C] transition-colors">
                    {job.title}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-sm font-extrabold text-emerald-600 flex items-center gap-1">
                    <DollarSign className="w-4 h-4 shrink-0" /> {job.salaryRange}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Base Remuneration Package</p>
                </div>
              </div>

              {/* Core Attributes Panel (Location, Gender) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-600">
                  <MapPin className="w-4 h-4 text-[#C8A24C]" />
                  <span><strong>Location Target:</strong> {job.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-600">
                  <Users className="w-4 h-4 text-[#C8A24C]" />
                  <span><strong>Gender Framework:</strong> {job.gender}</span>
                </div>
              </div>

              {/* Precise Requirements Layout */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#C8A24C]" /> Mandatory Assessment Requirements
                </h4>
                <ul className="space-y-2 pl-1">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-xs text-gray-500 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[#C8A24C] rounded-full shrink-0 mt-1.5" />
                      {req}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-400 italic mt-2"><strong>Additional Benefits:</strong> {job.benefits}</p>
              </div>

              {/* Action Button Segment */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Link 
                  href="/apply/candidate" 
                  className="bg-[#0B1F3A] hover:bg-[#C8A24C] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm"
                >
                  Apply For This Opening <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
            <p className="text-sm text-gray-400 font-medium">No international postings match your specific query criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}