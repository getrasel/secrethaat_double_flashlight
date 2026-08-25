import React from 'react';
import { OfferSection } from '../components/OfferSection';
import { Benefits } from '../components/Benefits';
import { Gallery } from '../components/Gallery';
import { LotteryOffer } from '../components/LotteryOffer';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { OrderSection } from '../components/OrderSection';
import { FinalCTA } from '../components/FinalCTA';
import { FAQ } from '../components/FAQ';

export const Home: React.FC = () => {
  return (
    <>
      {/* 1. Top Intro / Value Offer Section */}
      <OfferSection />

      {/* 2. Product Benefits */}
      <Benefits />

      {/* 3. Product Gallery */}
      <Gallery />

      {/* 4. Mega Lottery Offer */}
      <LotteryOffer />

      {/* 5. Features / Specifications */}
      <Features />

      {/* 6. Customer Reviews & Testimonials */}
      <Testimonials />

      {/* 7. Color Selection + Live Calculator + Order Form */}
      <OrderSection />

      {/* 8. Final CTA */}
      <FinalCTA />

      {/* 9. FAQ Accordion */}
      <FAQ />
    </>
  );
};

export default Home;
