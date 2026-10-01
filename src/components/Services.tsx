import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const services = [
    {
      id: 'sales-emails',
      name: 'Sales Emails',
      badge: 'Single and Campaign Broadcasts',
      summary:
        'Individual sales emails and promotional broadcasts built around your specific offer, your audience’s mindset, their silent hesitations, and the exact action you want them to take.',
      clientGoal:
        'Ideal for product launches, seasonal promotions, special announcements, and regular list communications that need to sell without burning subscriber goodwill.',
      deliverables: [
        'Research into the offer, audience desire, and main objections',
        'Multiple hook and angle explorations',
        '3–5 subject line and preview text options per email',
        'Body copy structured around a single, clear next step',
      ],
      ctaText: "Let's Work Together",
    },
    {
      id: 'email-sequences',
      name: 'Email Sequences',
      badge: 'Automated Multi-Email Journeys',
      summary:
        'Connected email series where every single email has a distinct purpose. The sequence guides the reader through a deliberate progression from first introduction to confident buying decision.',
      clientGoal:
        'Ideal for welcoming new subscribers, recovering abandoned checkouts, launching new offerings, or re-engaging subscribers who have gone quiet.',
      deliverables: [
        'Strategic sequence mapping and narrative outline',
        'Welcome & onboarding sequences (3–6 emails)',
        'Cart abandonment and checkout recovery sequences',
        'Post-purchase and subscriber re-engagement flows',
      ],
      ctaText: "Let's Work Together",
    },
    {
      id: 'copy-audit',
      name: 'Email Copy Audit',
      badge: 'Diagnostics and Messaging Review',
      summary:
        'A comprehensive evaluation of your current sales emails or existing automated flows to identify where the messaging loses attention, where objections are ignored, and how to sharpen the copy.',
      clientGoal:
        'Ideal for businesses that already have emails running but feel the messaging doesn’t reflect the quality of their offer or make the value clear.',
      deliverables: [
        'Line-by-line review of up to 5 emails in your current funnel',
        'Identification of weak hooks, confusing transitions, and friction points',
        'Written suggestions and recommended angles for revision',
        'Clear next-step priorities for improving clarity and persuasion',
      ],
      ctaText: "Let's Work Together",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
            04. Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-5">
            What I Offer
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            I write sales emails and sequences designed to meet readers where they are, clarify why your offer matters, and guide them toward a confident decision.
          </p>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white p-8 md:p-9 border border-[#E5E1D8] shadow-xs flex flex-col justify-between"
            >
              {/* Card Header & Description */}
              <div>
                <div className="pb-4 mb-6 border-b border-[#F1ECE4]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#681426] mb-1">
                    {svc.badge}
                  </p>
                  <h3 className="text-2xl font-bold text-[#111111] tracking-tight">
                    {svc.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
                  {svc.summary}
                </p>

                <div className="p-4 bg-[#F8F6F2] border border-[#E5E1D8] mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                    Best For
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                    {svc.clientGoal}
                  </p>
                </div>
              </div>

              {/* What the Client Gets & CTA */}
              <div>
                <div className="pt-6 border-t border-[#F1ECE4] mb-8">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                    What You Get
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
                    {svc.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 leading-snug">
                        <span className="w-1.5 h-1.5 bg-[#681426] rounded-full shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={onContactClick}
                  className="w-full flex items-center justify-between py-3 px-4 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-white border border-neutral-300 hover:bg-[#681426] hover:border-[#681426] transition-all cursor-pointer group"
                >
                  <span>{svc.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Framing Reassurance */}
        <div className="mt-12 p-6 bg-white border border-[#E5E1D8] max-w-3xl">
          <p className="text-sm text-neutral-700 leading-relaxed">
            <span className="font-semibold text-[#111111]">Collaborative process:</span> Every project begins with a clear discussion of your offer, existing audience data, and what has or hasn’t worked before. There are no pre-packaged templates. Everything is written specifically for your business and audience.
          </p>
        </div>

        {/* Transition Bridge to Work */}
        <div className="mt-14 pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-neutral-700">
            Strategy only matters if the words perform. Here is what my writing looks like in practice.
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681426] hover:underline cursor-pointer"
          >
            <span>See my work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
