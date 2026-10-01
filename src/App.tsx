/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import defaultPortrait from '../Gemini_Generated_Image_m22zhim22zhim22z.jpg';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { WhoIWriteFor } from './components/WhoIWriteFor.tsx';
import { MyFocus } from './components/MyFocus.tsx';
import { Services } from './components/Services.tsx';
import { Work } from './components/Work.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Contact } from './components/Contact.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { BackToTop } from './components/BackToTop.tsx';

export default function App() {
  // Preserve the user's currently uploaded photo from localStorage, fallback to default
  const [profileImage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('sumana_pervaiz_profile_pic') || localStorage.getItem('email_copywriter_profile_pic');
      return saved || defaultPortrait;
    } catch {
      return defaultPortrait;
    }
  });

  const scrollToContact = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#111111]">
      {/* Top Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections: Hero → About → Who I Write For → Focus → Services → Work → FAQ → Contact → Let's Work Together */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          profileImage={profileImage}
          onContactClick={scrollToContact}
        />

        {/* 2. About */}
        <About />

        {/* 3. Who I Write For */}
        <WhoIWriteFor />

        {/* 4. Focus */}
        <MyFocus />

        {/* 5. Services */}
        <Services onContactClick={scrollToContact} />

        {/* 6. Work & Portfolio */}
        <Work />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Contact */}
        <Contact />

        {/* 9. Final Conversion Section */}
        <FinalCTA onContactClick={scrollToContact} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Subtle Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
