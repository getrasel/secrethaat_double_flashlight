import React, { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import { FAQ_ITEMS } from '../data/productData';
import shapeSpiral from '../assets/images/shape/1.png';
import shapeSparkle from '../assets/images/shape/2.png';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative overflow-hidden py-16 md:py-24 bg-white border-t border-slate-100">
      
      {/* Decorative Background Shapes */}
      <div className="hidden sm:block absolute -bottom-10 -left-10 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-55 z-0">
        <img
          src={shapeSpiral}
          alt=""
          className="w-full h-full object-contain animate-[spin_100s_linear_infinite]"
        />
      </div>

      <div className="absolute top-10 left-10 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-80 z-0">
        <img src={shapeSparkle} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-narrow relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#0068FF] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4 sm:mb-5">
            প্রশ্ন ও উত্তর
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            পণ্য সম্পর্কে আপনার যেকোনো সাধারণ প্রশ্নের সমাধান জেনে নিন।
          </p>
        </div>

        {/* Accordion List (Healis Style) */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 ${isOpen
                    ? 'bg-blue-50/40 border-blue-200 shadow-xs'
                    : 'bg-slate-50/70 border-slate-200/90 hover:border-slate-300'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <FiHelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#0068FF]' : 'text-slate-400'}`} />
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen
                        ? 'rotate-180 bg-[#0068FF] text-white border-[#0068FF]'
                        : 'bg-white text-slate-600 border-slate-200'
                      }`}
                  >
                    <FiChevronDown className="w-4.5 h-4.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-base text-slate-600 leading-relaxed border-t border-blue-100/60 animate-in fade-in slide-in-from-top-1">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
