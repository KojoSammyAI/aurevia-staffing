import Link from "next/link";

export default function CallToAction() {
  return (
    /* Change the section background to a clean, light slate/white to create contrast between the image section above and the footer below */
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card: Submit Employer Inquiry */}
          <Link 
            href="/contact" 
            className="group flex items-center justify-between bg-white border border-slate-200/60 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#C8A24C]/40 transition-all duration-300"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] mb-2">For Employers</h3>
              <p className="text-xl font-extrabold text-[#0B1F3A] group-hover:text-[#C8A24C] transition-colors duration-200">
                Submit Employer Inquiry
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0B1F3A] transition-colors duration-200">
              <svg 
                className="w-5 h-5 text-[#0B1F3A] group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>

          {/* Right Card: Register & Upload CV */}
          <Link 
            href="/jobs" 
            className="group flex items-center justify-between bg-[#0B1F3A] rounded-2xl p-8 shadow-md hover:shadow-xl hover:bg-[#0B1F3A]/95 transition-all duration-300"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#C8A24C] mb-2">For Candidates</h3>
              <p className="text-xl font-extrabold text-white">
                Register & Upload CV
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C8A24C] transition-colors duration-200">
              <svg 
                className="w-5 h-5 text-white group-hover:text-[#0B1F3A] transform group-hover:translate-x-1 transition-all duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}