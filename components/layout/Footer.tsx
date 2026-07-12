import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] py-16 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold mb-4">AUREVIA STAFFING</h3>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            Leading the way in ethical, high-impact global recruitment. Connecting talent across borders with professional precision.
          </p>
        </div>

        {/* Company Links (Active) */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-[#C8A24C]">Company</h4>
          <ul className="text-slate-400 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-[#C8A24C] transition duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-[#C8A24C] transition duration-200">
                Careers & Vacancies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#C8A24C] transition duration-200">
                Global Hubs
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links (Active) */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-[#C8A24C]">Legal</h4>
          <ul className="text-slate-400 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-[#C8A24C] transition duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#C8A24C] transition duration-200">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/compliance" className="hover:text-[#C8A24C] transition duration-200">
                Compliance
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} Aurevia Staffing. All rights reserved.
      </div>
    </footer>
  );
}