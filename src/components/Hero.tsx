import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

interface HeroProps {
  profileImage: string;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profileImage,
  onContactClick,
}) => {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workElem = document.querySelector('#work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Messaging Hierarchy (7 cols on lg) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center text-left">
            
            {/* 1. Identity & Role Kicker */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#681426] mb-3 sm:mb-4">
              Sumana Pervaiz, Email Copywriter
            </p>

            {/* 2. Curiosity-Driven Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#111111] leading-[1.12] mb-5 sm:mb-6 text-balance">
              Your subscribers don't hate sales emails. They hate boring ones.
            </h1>

            {/* 3. Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl mb-8">
              I write sales emails and email sequences designed around four essentials: who your audience is, what you are offering, the message that connects them, and the exact action you want them to take next.
            </p>

            {/* 4. Primary CTA & Secondary Subtle Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#681426] hover:bg-[#500F1D] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-1.5 text-base font-medium text-neutral-800 hover:text-[#681426] transition-colors py-2 group cursor-pointer"
              >
                <span>See My Work</span>
                <ArrowDownRight className="w-4 h-4 text-neutral-500 group-hover:text-[#681426] transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Circular Profile Image (5 cols on lg) - Locked Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
              
              {/* Circular cropped image container */}
              <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-white border border-[#E5E1D8] shadow-xs flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#F1ECE4] relative">
                  <img
                    src={profileImage}
                    alt="Sumana Pervaiz - Professional Email Copywriter"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
