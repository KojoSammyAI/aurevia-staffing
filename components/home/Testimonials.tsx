"use client"; // Required for interactivity
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Aurevia Staffing made my transition to the Middle East seamless. Their transparency and professionalism are unmatched.",
    name: "John Doe",
    role: "Senior Operations Manager"
  },
  {
    quote: "They found me the perfect role in record time. The team is incredibly supportive and truly understands the talent market.",
    name: "Sarah Smith",
    role: "Logistics Coordinator"
  },
  {
    quote: "A premium service that actually cares. Their vetting process gave me confidence in every placement they presented.",
    name: "Ahmed Hassan",
    role: "Executive Director"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#0B1F3A] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-12">What Professionals Say</h2>
        
        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <blockquote className="text-xl md:text-2xl italic font-light leading-relaxed mb-8">
                "{testimonials[index].quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-[#C8A24C]/20 rounded-full flex items-center justify-center font-bold text-[#C8A24C]">
                  {testimonials[index].name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-bold">{testimonials[index].name}</p>
                  <p className="text-sm text-slate-400">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}