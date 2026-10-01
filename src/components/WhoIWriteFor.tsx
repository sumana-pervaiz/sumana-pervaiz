import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WhoIWriteFor: React.FC = () => {
  const clientTypes = [
    {
      title: 'Coaches, Consultants, and Personal Brands',
      description:
        'Experts with high-value programs, advisory services, or one-on-one offers who need email copy that reflects their authority, speaks directly to client pain points, and leads to qualified conversations.',
    },
    {
      title: 'Digital Product Creators and Online Businesses',
      description:
        'Builders of courses, paid communities, memberships, and software who need thoughtful launch sequences and evergreen flows that explain the transformation without feeling aggressive.',
    },
    {
      title: 'Service-Based Businesses and Agencies',
      description:
        'Professional services where reputation is everything. Email sequences that address unspoken buyer hesitations, demonstrate capability, and guide prospects to the next step.',
    },
    {
      title: 'E-Commerce and Direct-to-Consumer Brands',
      description:
        'Brands with products people genuinely appreciate, needing targeted promotion campaigns, seasonal drops, and automated flows that turn first-time purchasers into regular buyers.',
    },
  ];

  return (
    <section id="who-i-write-for" className="py-20 md:py-28 border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
            02. Who I Write For
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-5">
            Who I Write For
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#111111] leading-snug">
            I write for businesses that have something valuable to offer but need clearer, more persuasive email communication to move people toward action.
          </p>
        </div>

        {/* Framing Context */}
        <p className="max-w-3xl text-base text-neutral-700 leading-relaxed mb-10">
          You don't need a massive team or complicated marketing funnels to benefit from good email copy. If your business has an offer you believe in and an audience of people who opted in to hear from you, we can create emails that connect the two.
        </p>

        {/* 2x2 Clean Grid of Business Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {clientTypes.map((client) => (
            <div
              key={client.title}
              className="bg-white p-7 sm:p-8 border border-[#E5E1D8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
                  {client.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Note */}
        <div className="mt-8 p-6 bg-white border border-[#E5E1D8] max-w-3xl">
          <p className="text-sm text-neutral-700 leading-relaxed">
            <span className="font-semibold text-[#111111]">The common requirement:</span> An offer with real substance. Good copy can clarify what makes your solution special, but it works best when the underlying product or service genuinely solves the problem it promises to solve.
          </p>
        </div>

        {/* Transition Bridge to Focus */}
        <div className="mt-14 pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-neutral-700">
            Connecting with these audiences requires dedicated focus on two specific types of email copy.
          </p>
          <a
            href="#my-focus"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681426] hover:underline cursor-pointer"
          >
            <span>See my focus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
