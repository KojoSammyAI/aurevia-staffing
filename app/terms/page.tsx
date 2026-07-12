// src/app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 max-w-4xl mx-auto px-6 text-[#0B1F3A]">
      <h1 className="text-3xl font-extrabold mb-6">Terms of Service</h1>
      <p className="text-sm text-slate-400 mb-8">Last Updated: July 2026</p>
      
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>
          Welcome to Aurevia Staffing. By accessing or using our website and recruitment services, you agree to be bound by these terms and conditions.
        </p>
        <h2 className="text-xl font-bold text-[#0B1F3A] pt-4">1. Use of the Site</h2>
        <p>
          You agree to use this site purely for legitimate employment seeking or talent acquisition activities. Submitting fraudulent resumes, false credentials, or misleading corporate inquiries is strictly prohibited.
        </p>
        <h2 className="text-xl font-bold text-[#0B1F3A] pt-4">2. Limitation of Liability</h2>
        <p>
          While Aurevia vetting processes are highly rigorous, final employment agreements exist strictly between the employer and the candidate. Aurevia is not liable for issues arising from final employer-employee contracts.
        </p>
      </div>
    </main>
  );
}