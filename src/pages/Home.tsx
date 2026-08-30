import React from 'react';
import { OfferSection } from '../components/OfferSection';
import { Benefits } from '../components/Benefits';
import { Gallery } from '../components/Gallery';
import { Features } from '../components/Features';
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

      {/* 4. Features / Specifications */}
      <Features />

      {/* 5. Color Selection + Live Calculator + Order Form */}
      <OrderSection />

      {/* 6. Final CTA */}
      <FinalCTA />

      {/* 7. FAQ Accordion */}
      <FAQ />
    </>
  );
};

export default Home;
