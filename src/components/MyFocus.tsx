import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MyFocus: React.FC = () => {
  const preparationElements = [
    {
      term: 'The Offer',
      detail: 'What makes your product or service genuinely worth paying for right now?',
    },
    {
      term: 'The Audience',
      detail: 'Who is reading, and what specific frustration or situation are they facing?',
    },
    {
      term: 'The Message',
      detail: 'What is the single core idea that connects the reader’s situation to your offer?',
    },
    {
      term: 'The Objections',
      detail: 'What silent doubts or questions are making them hesitate to move forward?',
    },
    {
      term: 'The Desire',
      detail: 'What outcome, relief, or result does the reader actually want to achieve?',
    },
    {
      term: 'The Next Action',
      detail: 'What is the specific, low-friction next step we want them to take today?',
    },
  ];

  return (
    <section id="my-focus" className="py-20 md:py-28 border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
            03. Focus
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-5">
            My Focus
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            I don't offer generic content writing or broad social media services. My entire focus is on the copy that directly moves readers toward a buying decision.
          </p>
        </div>

        {/* Primary Two Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Pillar 1: Sales Emails */}
          <div className="bg-white p-8 sm:p-9 border border-[#E5E1D8] shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#681426] mb-2">
                Core Area 01
              </p>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Sales Emails
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                Broadcast emails and timely campaigns written to introduce an offer, re-ignite interest, or present a seasonal promotion. Each email opens with an engaging angle, grounds the value in reality, and presents a clear reason to take action today.
              </p>
            </div>
            <div className="pt-5 border-t border-[#F1ECE4] text-xs text-neutral-600 font-medium">
              Promotional broadcasts, product launches, and special offers
            </div>
          </div>

          {/* Pillar 2: Email Sequences */}
          <div className="bg-white p-8 sm:p-9 border border-[#E5E1D8] shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#681426] mb-2">
                Core Area 02
              </p>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Email Sequences
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                Automated multi-email journeys that guide a subscriber step by step. From introducing your brand to a new subscriber, to addressing hesitations after an abandoned cart, each sequence is structured so every email naturally prepares the reader for the next.
              </p>
            </div>
            <div className="pt-5 border-t border-[#F1ECE4] text-xs text-neutral-600 font-medium">
              Welcome sequences, launch series, cart recovery, and re-engagement flows
            </div>
          </div>

        </div>

        {/* The Thinking Before The Writing */}
        <div className="bg-white p-8 sm:p-10 border border-[#E5E1D8] shadow-xs">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">
              The Preparation Before Writing
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Effective email copy isn't born from clever wordplay. It comes from understanding the fundamental elements of the decision before writing a single sentence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {preparationElements.map((item, idx) => (
              <div key={item.term} className="p-4 bg-[#F8F6F2] border border-[#E5E1D8]">
                <p className="text-xs font-bold text-[#681426] uppercase tracking-wider mb-1 font-mono">
                  0{idx + 1}. {item.term}
                </p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Bridge to Services */}
        <div className="mt-14 pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-neutral-700">
            Here is how these two core areas translate into specific client engagements.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681426] hover:underline cursor-pointer"
          >
            <span>See services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
