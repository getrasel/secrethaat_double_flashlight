import React, { useState } from "react";
import {
  FiMaximize2,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
} from "react-icons/fi";
import { GALLERY_ITEMS } from "../data/productData";

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeItem = GALLERY_ITEMS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-slate-50/70">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs sm:text-sm font-semibold text-[#0265FF] mb-3">
            <FiEye className="w-3.5 h-3.5" />
            <span>প্রোডাক্ট গ্যালারি</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
            বাস্তব ছবি ও প্রিমিয়াম ফিনিশিং
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            প্রতিটি অ্যাঙ্গেল ও ব্যবহারিক মোড কাছ থেকে দেখে নিন।
          </p>
        </div>

        {/* Gallery Showcase Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-sm">
          {/* Main Showcase Image Viewport */}
          <div className="relative aspect-4/3 sm:aspect-16/10 max-h-[460px] rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100 p-4 sm:p-6 group">
            {/* Active Category Badge */}
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800 shadow-xs">
              {activeItem.category}
            </div>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102 select-none"
              loading="lazy"
            />

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer z-20"
              aria-label="পূর্ববর্তী ছবি"
            >
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer z-20"
              aria-label="পরবর্তী ছবি"
            >
              <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Lightbox Trigger Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 bg-slate-900/70 hover:bg-[#0265FF] text-white p-2.5 rounded-xl backdrop-blur-md shadow-xs transition-colors cursor-pointer z-20"
              title="বড় করে দেখুন"
              aria-label="বড় করে দেখুন"
            >
              <FiMaximize2 className="w-4 h-4" />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-4 right-4 bg-white/85 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200/60 text-xs sm:text-sm font-medium text-slate-700 text-center truncate">
              {activeItem.caption}
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="mt-4 sm:mt-5 grid grid-cols-4 gap-2 sm:gap-3.5">
            {GALLERY_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-200 cursor-pointer bg-slate-50 p-1.5 flex items-center justify-center ${
                    isActive
                      ? "border-[#0265FF] ring-3 ring-[#0265FF]/15 shadow-sm scale-[1.02]"
                      : "border-slate-200/70 hover:border-slate-300 opacity-75 hover:opacity-100"
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
                    <div className="absolute inset-0 bg-[#0265FF]/5 rounded-2xl pointer-events-none" />
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 text-2xl cursor-pointer transition-colors"
              aria-label="বন্ধ করুন"
            >
              <FiX className="w-7 h-7" />
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <p className="mt-4 text-white text-sm sm:text-base font-medium text-center">
              {activeItem.title} — {activeItem.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
