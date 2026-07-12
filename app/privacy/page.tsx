// src/app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 max-w-4xl mx-auto px-6 text-[#0B1F3A]">
      <h1 className="text-3xl font-extrabold mb-6">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-8">Last Updated: July 2026</p>
      
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>
          At Aurevia Staffing, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or apply for a position.
        </p>
        <h2 className="text-xl font-bold text-[#0B1F3A] pt-4">1. The Data We Collect About You</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which you provide via our CV upload or inquiry forms, including your identity, contact details, employment history, and qualifications.
        </p>
        <h2 className="text-xl font-bold text-[#0B1F3A] pt-4">2. How We Use Your Data</h2>
        <p>
          We will only use your personal data to match your profile with available job vacancies, facilitate international deployment, and communicate updates regarding your applications.
        </p>
      </div>
    </main>
  );
}