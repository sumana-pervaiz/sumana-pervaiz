import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Send, Linkedin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Sales Email',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const directEmail = 'sumanaspeaksofficial@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/sumana-pervaiz-721611373';
  const fiverrUrl = 'https://www.fiverr.com/s/1Eq64Vk';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/sumanaspeaksofficial@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Email Copywriting Inquiry from ${formData.name} (${formData.service})`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback to mailto if external endpoint encounters rate limit
        window.location.href = `mailto:${directEmail}?subject=${encodeURIComponent(
          `Inquiry: ${formData.service} from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
        )}`;
        setIsSubmitted(true);
      }
    } catch {
      // Offline or network fallback
      window.location.href = `mailto:${directEmail}?subject=${encodeURIComponent(
        `Inquiry: ${formData.service} from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      )}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header with Curiosity-Driven Headline */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#681426] mb-3">
            07. Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-5">
            Have an offer that deserves clearer emails?
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            If you have an audience that trusts you and an offer with genuine value, getting stronger results does not require aggressive hype. It requires emails that meet your readers where they are, answer their silent hesitations, and make the next decision feel natural. Fill out the brief details below, or reach out directly.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Form, Right Direct Options */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Professional Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-[#E5E1D8] shadow-xs">
            {isSubmitted ? (
              <div className="py-10 text-left space-y-4">
                <div className="w-12 h-12 bg-[#681426]/10 text-[#681426] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">
                  Thank you, {formData.name || 'there'}.
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Your project details have been received. I will review your offer and audience notes, and reply within 24 business hours to discuss scope and availability.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Sales Email',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#681426] hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-2">
                    Project Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Share a few details regarding your business and what you would like to write.
                  </p>
                </div>

                {submitError && (
                  <div className="p-3 bg-red-50 text-red-800 text-xs border border-red-200">
                    {submitError}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-2">
                    Name <span className="text-[#681426]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 text-sm bg-[#F8F6F2] border border-[#E5E1D8] text-neutral-900 focus:outline-hidden focus:bg-white focus:border-[#681426] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-2">
                    Email <span className="text-[#681426]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 text-sm bg-[#F8F6F2] border border-[#E5E1D8] text-neutral-900 focus:outline-hidden focus:bg-white focus:border-[#681426] transition-colors"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-2">
                    Service <span className="text-[#681426]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-[#F8F6F2] border border-[#E5E1D8] text-neutral-900 focus:outline-hidden focus:bg-white focus:border-[#681426] transition-colors cursor-pointer"
                  >
                    <option value="Sales Email">Sales Email</option>
                    <option value="Email Sequence">Email Sequence</option>
                    <option value="Other Email Copywriting">Other Email Copywriting</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-2">
                    Message <span className="text-[#681426]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your offer, your audience, and what you want this email or sequence to accomplish."
                    className="w-full px-4 py-3 text-sm bg-[#F8F6F2] border border-[#E5E1D8] text-neutral-900 focus:outline-hidden focus:bg-white focus:border-[#681426] transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#681426] hover:bg-[#500F1D] active:scale-[0.99] transition-all shadow-xs cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Platform Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="bg-white p-8 border border-[#E5E1D8] shadow-xs space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#681426] mb-1">
                  Direct Options
                </p>
                <h3 className="text-xl font-bold text-[#111111]">
                  Prefer to connect directly?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  You can reach me directly via email, message me on LinkedIn, or book through my verified Fiverr profile.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Email Direct */}
                <a
                  href={`mailto:${directEmail}?subject=Email%20Copywriting%20Inquiry`}
                  className="flex items-center justify-between p-4 bg-[#F8F6F2] hover:bg-[#F1ECE4] border border-[#E5E1D8] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#681426]" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                        Email
                      </span>
                      <span className="text-xs text-neutral-600">
                        {directEmail}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#681426] transition-colors" />
                </a>

                {/* LinkedIn Direct */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#F8F6F2] hover:bg-[#F1ECE4] border border-[#E5E1D8] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#681426]" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                        LinkedIn
                      </span>
                      <span className="text-xs text-neutral-600">
                        Sumana Pervaiz
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#681426] transition-colors" />
                </a>

                {/* Fiverr Direct */}
                <a
                  href={fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#F8F6F2] hover:bg-[#F1ECE4] border border-[#E5E1D8] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#681426] text-white flex items-center justify-center text-[10px] font-bold">
                      fi
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                        Fiverr
                      </span>
                      <span className="text-xs text-neutral-600">
                        Sumana Pervaiz Copywriting
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#681426] transition-colors" />
                </a>
              </div>
            </div>

            {/* Standards & Response Time Card */}
            <div className="bg-[#F8F6F2] p-6 border border-[#E5E1D8]">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                Response Standards
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                All client inquiries receive an answer within 24 business hours. Every project begins with a clear discussion of your offer and timeline before any writing begins.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
