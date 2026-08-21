import React from 'react';
import { Navbar } from './components/Navbar';
import { OfferSection } from './components/OfferSection';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { LotteryOffer } from './components/LotteryOffer';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { OrderSection } from './components/OrderSection';
import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-bangla antialiased selection:bg-[#0068FF] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Top Intro / Value Offer Section */}
        <OfferSection />

        {/* 3. Product Benefits */}
        <Benefits />

        {/* 4. Product Gallery (কাছ থেকে দেখুন প্রিমিয়াম ফিনিশিং) */}
        <Gallery />

        {/* 5. Mega Lottery Bike Offer (মেগা লটারি অফার) */}
        <LotteryOffer />

        {/* 6. Features / Specifications (পণ্যের পূর্ণাঙ্গ কারিগরি বিবরণ) */}
        <Features />

        {/* 7. Customer Reviews & Testimonials (ব্যবহারকারীদের বাস্তব অভিজ্ঞতা) */}
        <Testimonials />

        {/* 8. Color Selection + Live Calculator + Order Form */}
        <OrderSection />

        {/* 9. Final CTA */}
        <FinalCTA />

        {/* 10. FAQ Accordion */}
        <FAQ />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button (Bottom-Right Corner) */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
