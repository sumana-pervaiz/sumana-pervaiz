import React from 'react';
import { NAV_ITEMS } from '../types.ts';
import { ArrowUp, Mail, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directEmail = 'sumanaspeaksofficial@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/sumana-pervaiz-721611373';
  const fiverrUrl = 'https://www.fiverr.com/s/1Eq64Vk';

  return (
    <footer className="bg-[#F8F6F2] py-14 border-t border-[#E5E1D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E5E1D8]">
          
          {/* Identity & Role */}
          <div className="md:col-span-5 space-y-2">
            <span className="text-xl font-bold tracking-tight text-[#111111] block">
              Sumana Pervaiz
            </span>
            <p className="text-sm font-semibold text-[#681426]">
              Email Copywriter
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed">
              Persuasive sales emails and automated sequences written around your offer, audience psychology, and clear next actions.
            </p>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-neutral-700">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#681426] transition-colors py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Platform Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Direct Contact
            </p>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-neutral-700">
              <a
                href={`mailto:${directEmail}?subject=Email%20Copywriting%20Inquiry`}
                className="inline-flex items-center gap-2 hover:text-[#681426] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#681426]" />
                <span>Email</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#681426] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#681426]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              <a
                href={fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#681426] transition-colors"
              >
                <span className="w-4 h-4 rounded-full bg-[#681426] text-white flex items-center justify-center text-[10px] font-bold">
                  fi
                </span>
                <span>Fiverr</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>
            © {new Date().getFullYear()} Sumana Pervaiz. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-[#681426] font-medium transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
