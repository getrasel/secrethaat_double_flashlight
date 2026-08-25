import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { ThankYou } from './pages/ThankYou';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-bangla antialiased selection:bg-[#0068FF] selection:text-white">
        {/* Header Navigation Bar */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-1 w-full pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/order-success" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
