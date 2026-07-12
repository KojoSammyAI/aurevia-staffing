// src/app/employers/page.tsx
export default function EmployersPage() {
  return (
    <main className="pt-32 pb-20 bg-white text-[#0B1F3A]">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A24C] bg-[#C8A24C]/10 px-3 py-1 rounded-full">
          Institutional Partners
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight mt-4 mb-6">
          Global Talent Acquisition & Deployment
        </h1>
        <p className="text-base text-slate-600 leading-relaxed mb-6">
          Aurevia provides premium, pre-vetted human resource pipelines for international operations across Hospitality, Education, Corporate Support, and Private Households. 
        </p>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mt-8">
          <h2 className="text-lg font-bold mb-3">Our Rigorous Vetting Safeguards</h2>
          <ul className="space-y-2.5 text-sm text-slate-500 list-disc pl-5">
            <li>Comprehensive criminal background and credential verification checks.</li>
            <li>Bilingual and operational cross-border competency testing.</li>
            <li>Rigid compliance management aligning with host country labor mandates.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}