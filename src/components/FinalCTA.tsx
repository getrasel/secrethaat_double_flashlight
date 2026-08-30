import React from 'react';
import { FiShoppingBag, FiTruck, FiShield } from 'react-icons/fi';

export const FinalCTA: React.FC = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="container-narrow text-center">

        {/* Soft Blue Gradient Card with Pure White Text */}
        <div className="bg-[linear-gradient(135deg,#0A58CA_0%,#0068FF_35%,#0284C7_70%,#06B6D4_100%)] text-white rounded-3xl p-6 sm:p-12 md:p-14 healis-shadow-lg space-y-5 sm:space-y-6 relative overflow-hidden border border-white/20">

          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-white/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/20 px-3.5 py-1.5 rounded-full border border-white/30 backdrop-blur-md">
            স্টক সীমিত — আজই অর্ডার করুন
          </span>

          {/* Pure White Headline (Strictly 2 Lines) */}
          <h2
            style={{ color: "#FFFFFF" }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-snug sm:leading-tight drop-shadow-xs max-w-2xl mx-auto"
          >
            <span className="block">প্রয়োজনের সময় আলো খুঁজবেন না।</span>
            <span className="block mt-1 sm:mt-1.5">আলো রাখুন হাতের কাছেই।</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-blue-50 max-w-xl mx-auto leading-relaxed">
            ঘর, পড়াশোনা, ক্যাম্পিং কিংবা ট্রাভেলিং—প্রয়োজনের মুহূর্তে প্রস্তুত
            থাকুক আপনার আলো। শক্তিশালী টর্চ ও চারপাশে ছড়ানো ল্যাম্প—দুটি আলোর
            সুবিধা এক ডিভাইসে।
          </p>

          {/* CTA Button with White Background (Only text, no price) */}
          <div className="pt-2 flex items-center justify-center">
            <button
              type="button"
              onClick={scrollToOrder}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-[#0068FF] text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-98 cursor-pointer"
            >
              <FiShoppingBag className="w-4.5 h-4.5 text-[#0068FF] shrink-0" />
              <span>এখনই অর্ডার করুন</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <FiTruck className="w-4.5 h-4.5 text-white" />
              <span>সারা দেশে হোম ডেলিভারি</span>
            </div>
            <div className="flex items-center gap-2">
              <FiShield className="w-4.5 h-4.5 text-white" />
              <span>ক্যাশ অন ডেলিভারি (পণ্য দেখে মূল্য পরিশোধ)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
