import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What type of email copy do you write?',
      answer:
        'I write direct-response email copy designed to build trust and move subscribers toward a buying decision. This includes single promotional broadcasts, product launch emails, customer re-engagement emails, and automated lifecycle sequences. Every email is built around a clear message, audience psychology, and a single, natural next step.',
    },
    {
      id: 'faq-2',
      question: 'Do you write sales emails and email sequences?',
      answer:
        'Yes, sales emails and email sequences are my primary specialization. For sales emails, I write focused promotional broadcasts for launches, seasonal offers, and announcements. For email sequences, I map and write multi-email automated journeys, including welcome sequences, abandoned checkout flows, and customer onboarding series, where each email has a distinct role in guiding the reader forward.',
    },
    {
      id: 'faq-3',
      question: 'Who do you write for?',
      answer:
        'I write for coaches, consultants, personal brands, online businesses, digital product creators, service-based businesses, and growing e-commerce brands. The main requirement is having an offer with genuine substance and a list of people who opted in to hear from you. If your product solves a real problem, we can find the words that connect it with your audience.',
    },
    {
      id: 'faq-4',
      question: 'What do you need from me before starting?',
      answer:
        'Before writing, I need a clear understanding of your offer, who your ideal buyer is, the common hesitations or questions they have, and any previous email copy or performance notes you have. If you do not have a formal creative brief ready, we will cover the essentials together in a simple onboarding questionnaire or discussion.',
    },
    {
      id: 'faq-5',
      question: 'Can you work from my existing offer or brief?',
      answer:
        'Yes. If you already have an established offer, landing page, or campaign brief, I can work directly from your existing materials. I will identify the strongest angles, clarify the core value proposition, and structure the emails to speak directly to your reader’s needs.',
    },
    {
      id: 'faq-6',
      question: 'Do you provide cold-email outreach?',
      answer:
        'I provide email copywriting. I do not provide cold-email outreach or lead-generation services. My work focuses on communicating with warm audiences: people who have already subscribed to your newsletter, signed up for a trial, or joined your customer list.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#E5E1D8]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
            06. Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-5">
            Clear Answers on Working Together
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Direct answers to the most common questions regarding my scope, process, and deliverables as an Email Copywriter.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`border transition-all duration-150 ${
                  isOpen
                    ? 'bg-white border-[#681426] shadow-xs'
                    : 'bg-white border-[#E5E1D8] hover:border-neutral-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg font-bold text-[#111111] pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 p-1.5 text-neutral-600 rounded-sm">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#681426]" />
                    ) : (
                      <Plus className="w-4 h-4 text-neutral-500" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-700 leading-relaxed border-t border-[#F1ECE4]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Reassurance */}
        <div className="mt-12 p-6 bg-white border border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-[#111111] mb-1">
              Have a question that is not covered here?
            </p>
            <p className="text-xs text-neutral-600">
              Feel free to reach out directly to discuss your specific email project.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#681426] hover:bg-[#500F1D] transition-colors whitespace-nowrap cursor-pointer"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
