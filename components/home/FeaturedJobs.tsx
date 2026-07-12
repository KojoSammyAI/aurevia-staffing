import Link from "next/link";

// Mock data structure matching your corporate theme
const JOBS_DATA = [
  {
    id: 1,
    title: "Executive House Manager",
    category: "Domestic / Hospitality",
    location: "Riyadh, Saudi Arabia",
    salary: "$3,500 - $4,800 / month",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Senior Operations Director",
    category: "Corporate Staffing",
    location: "Dubai, UAE",
    salary: "$8,500 - $11,000 / month",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "International Logistics Coordinator",
    category: "Supply Chain",
    location: "Doha, Qatar",
    salary: "$4,000 - $5,500 / month",
    type: "Contract",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="w-full py-20 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[14px] font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
              Latest Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] mt-3 tracking-tight">
              Featured Global Vacancies
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md mt-2 md:mt-0 leading-relaxed">
            Explore premium, pre-vetted positions across international hubs. Handpicked roles updated daily.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOBS_DATA.map((job) => (
            <div 
              key={job.id} 
              className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Job Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-400">{job.category}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B1F3A] bg-slate-100 px-2.5 py-1 rounded-md">
                    {job.type}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-lg font-bold text-[#0B1F3A] group-hover:text-[#C8A24C] transition-colors duration-200 line-clamp-2">
                  {job.title}
                </h3>

                {/* Location Info */}
                <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                  <svg className="w-4 h-4 text-[#C8A24C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Salary & Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Compensation</p>
                  <p className="text-sm font-bold text-emerald-600">{job.salary}</p>
                </div>
                
                <Link 
                  href={`/jobs/${job.id}`}
                  className="bg-[#0B1F3A] text-white group-hover:bg-[#C8A24C] font-semibold text-xs py-2.5 px-4 rounded-lg transition-all duration-200"
                >
                  Apply Now
                </Link>
              </div>

            </div>
          ))}
        </div>

      {/* View All Footer Callout */}
        <div className="text-center mt-12">
          <Link 
            href="/jobs" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] hover:text-[#C8A24C] transition-colors duration-200 group"
          >
            Explore All Open Positions 
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}