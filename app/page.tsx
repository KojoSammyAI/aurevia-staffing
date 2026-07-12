import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import Testimonials from "@/components/home/Testimonials"; // Imported here
import CallToAction from "@/components/home/CallToAction"; // Imported here

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <Testimonials />
      <FeaturedJobs />
      <CallToAction /> {/* Appended right before closing main layout wrapper */}
      
    </main>
  );
}