import React, { useState } from 'react';
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GALLERY_ITEMS } from '../data/productData';
import shapeSpiral from '../assets/images/shape/1.png';
import shapeSparkle from '../assets/images/shape/2.png';

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeItem = GALLERY_ITEMS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32 md:pt-24 md:pb-36 bg-slate-50/60">
      
      {/* Decorative Background Shapes */}
      <div className="hidden sm:block absolute -top-10 -right-12 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-60 z-0">
        <img
          src={shapeSpiral}
          alt=""
          className="w-full h-full object-contain animate-[spin_100s_linear_infinite]"
        />
      </div>

      <div className="absolute bottom-10 left-6 sm:left-14 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-80 z-0">
        <img src={shapeSparkle} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#0068FF] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4 sm:mb-5">
            প্রোডাক্ট গ্যালারি
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            কাছ থেকে দেখুন প্রিমিয়াম ফিনিশিং
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            প্রতিটি অ্যাঙ্গেল ও বাস্তব ছবি দেখে নিন আপনার পছন্দের গ্যাজেটটির।
          </p>
        </div>

        {/* Gallery Showcase Container (Healis Minimal Style, Larger Viewport) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-7 md:p-8 border border-slate-200/90 shadow-sm">

          {/* Main Showcase Image (Enlarged with object-contain so entire product is fully visible and big) */}
          <div className="relative aspect-4/3 sm:aspect-16/10 max-h-[520px] rounded-2xl overflow-hidden bg-slate-50/80 flex items-center justify-center border border-slate-100 p-2 sm:p-4 group">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full max-h-[480px] object-contain transition-all duration-300 group-hover:scale-102"
              loading="lazy"
            />

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer opacity-90 hover:opacity-100 z-10"
              aria-label="পূর্ববর্তী ছবি"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer opacity-90 hover:opacity-100 z-10"
              aria-label="পরবর্তী ছবি"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Trigger Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="absolute top-3.5 right-3.5 bg-slate-900/75 hover:bg-[#0068FF] text-white p-2.5 rounded-xl backdrop-blur-md shadow-md transition-all cursor-pointer z-10"
              title="বড় করে দেখুন"
              aria-label="বড় করে দেখুন"
            >
              <FiMaximize2 className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Thumbnails Row */}
          <div className="mt-4 sm:mt-6 grid grid-cols-5 gap-2.5 sm:gap-3.5">
            {GALLERY_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all cursor-pointer bg-slate-50 p-1.5 flex items-center justify-center ${isActive
                      ? 'border-[#0068FF] ring-3 ring-[#0068FF]/20 scale-102 shadow-sm'
                      : 'border-transparent hover:border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                  aria-label={`ছবি ${index + 1}: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#0068FF]/5 pointer-events-none rounded-2xl" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="বড় ছবি প্রদর্শনী"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 p-2 text-2xl cursor-pointer"
              aria-label="বন্ধ করুন"
            >
              <FiX className="w-8 h-8" />
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[80vh] w-auto rounded-3xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
