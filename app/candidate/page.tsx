// src/app/candidates/page.tsx
import Link from "next/link";

export default function CandidatesPage() {
  return (
    <main className="pt-32 pb-20 bg-white text-[#0B1F3A]">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Elite Placements
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight mt-4 mb-6">
          Your Global Trajectory Starts Here
        </h1>
        <p className="text-base text-slate-600 leading-relaxed mb-6">
          We match exceptional African professionals with industry-defining opportunities in international growth markets. 
        </p>
        <div className="bg-emerald-50/60 border border-emerald-100 p-6 rounded-xl mt-8 text-emerald-950">
          <h2 className="text-base font-bold text-emerald-800 mb-2">⚖️ Strict Candidate Protection Mandate</h2>
          <p className="text-xs leading-relaxed text-emerald-700">
            Aurevia strictly operates on an ethical recruitment standard. Under our <strong>"Candidate Pays Zero Fees"</strong> directive, we will never request payments from job seekers for applications, travel processing, or visas.
          </p>
        </div>
        <div className="mt-8 text-center sm:text-left">
          <Link href="/apply" className="inline-block bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-[#C8A24C] transition duration-300 shadow-md">
            Submit Your Resume Profile
          </Link>
        </div>
      </div>
    </main>
  );
}