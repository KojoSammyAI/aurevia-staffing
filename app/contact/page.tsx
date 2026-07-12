"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Mail, MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Pre-configured custom WhatsApp API link for instant chat redirection
  const whatsappNumber = "23320927709"; // Replace with Naomi's official WhatsApp number with country code
  const whatsappMessage = encodeURIComponent("Hello Aurevia Staffing, I would like to inquire about your global recruitment services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white pb-24">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-[#0B1F3A] text-white pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
          Contact Our Global Hub
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
          Have questions about target placement countries or sourcing pipelines? Speak directly with us today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Direct Corporate Channels */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-[#0B1F3A] mb-6">Channels of Communication</h2>
          
          {/* Channel Card: WhatsApp Integration */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 rounded-2xl transition-all group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <h3 className="font-bold text-sm text-emerald-950 mb-1">Instant WhatsApp Chat</h3>
            <p className="text-xs text-emerald-700/80 leading-relaxed mb-3">Skip the email forms and connect directly with our intake desk right away.</p>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Launch Chat Window →
            </span>
          </a>

          {/* Email Channel Info Card */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
            <div className="w-9 h-9 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center mb-4">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-[#0B1F3A] mb-1">Corporate Inquiries</h3>
            <p className="text-xs text-gray-500 mb-2">info@aureviastaffing.com</p>
            <p className="text-[11px] text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> Response within 24 hours
            </p>
          </div>
        </div>

        {/* Right Columns: Secure Contact Form Card */}
        <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 mx-auto rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Message Dispatched!</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Thank you for your inquiry. Naomi and the Aurevia administrative dispatch team will reach out directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleMessageSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Your Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm text-[#0B1F3A]" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Subject Context</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0B1F3A] focus:outline-none focus:border-[#C8A24C]">
                    <option>General Business Inquiry</option>
                    <option>Partner Agency Program</option>
                    <option>Technical Application Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Message Body</label>
                <textarea required rows={5} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#C8A24C] text-sm text-[#0B1F3A]" placeholder="Type your dynamic messaging details right here..." />
              </div>

              <button type="submit" className="w-full py-4 bg-[#0B1F3A] hover:bg-[#C8A24C] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md">
                Submit Message
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}