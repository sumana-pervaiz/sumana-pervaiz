import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
            01. About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-5">
            About Me
          </h2>
          <p className="text-sm font-semibold tracking-wide text-[#681426]">
            Sumana Pervaiz, Email Copywriter
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Story & Why Email (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              I write sales emails and email sequences for businesses with offers that deserve clearer, more persuasive words.
            </p>

            <p>
              Most digital marketing fights for a split-second of attention in an overcrowded feed. Email is different. When a subscriber opens your message, they have paused their day and invited you directly into their personal space. It is the only channel where you can speak to one person at a time, without an algorithm deciding whether your message gets seen.
            </p>

            <p>
              I focus specifically on email because it rewards clarity, empathy, and honest thinking over cheap hype. You do not need exaggerated claims or manipulative urgency to make an offer compelling. You need to understand what the reader is experiencing, present what you have clearly, and make the next step feel natural.
            </p>

            <div className="p-5 bg-white border-l-3 border-[#681426] border-y border-r border-[#E5E1D8] mt-6">
              <p className="text-base font-medium text-[#111111] italic leading-relaxed">
                "Good email copy is not about filling an inbox with words. It is about understanding what matters to the reader and communicating your offer in a way that makes the next decision clearer."
              </p>
            </div>
          </div>

          {/* Core Writing Commitments (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 border border-[#E5E1D8] shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-[#111111] tracking-tight pb-3 border-b border-[#F1ECE4]">
              What I Care About in Every Email
            </h3>

            <div className="space-y-5 text-sm">
              <div>
                <p className="font-semibold text-[#111111] mb-1">
                  1. Protecting Reader Trust
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Every email should leave the subscriber glad they opened it, even if they are not ready to buy today.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#111111] mb-1">
                  2. Deep Offer Understanding
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Taking the time to understand what makes your product valuable and why someone might hesitate before writing a word.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#111111] mb-1">
                  3. Making Decisions Simple
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Focusing each message on one central idea and one clear action rather than overwhelming the reader with competing choices.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Transition Bridge to Who I Write For */}
        <div className="mt-14 pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-neutral-700">
            Email works best when there is a real match between the message and the reader.
          </p>
          <a
            href="#who-i-write-for"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681426] hover:underline cursor-pointer"
          >
            <span>See who I write for</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
