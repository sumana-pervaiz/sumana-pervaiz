import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface FinalCTAProps {
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 md:py-24 bg-[#F1ECE4] border-b border-[#E5E1D8]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        
        <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
          08. Next Steps
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-6">
          Let's Work Together
        </h2>

        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-10">
          If you have an offer with real substance and subscribers who want to hear from you, we can create emails that communicate your value clearly and guide readers toward a confident decision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#681426] hover:bg-[#500F1D] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:sumanaspeaksofficial@gmail.com?subject=Email%20Copywriting%20Inquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-neutral-800 bg-white hover:bg-neutral-50 border border-[#E5E1D8] transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#681426]" />
            <span>Send Direct Email</span>
          </a>
        </div>

      </div>
    </section>
  );
};
