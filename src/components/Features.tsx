import React from "react";
import {
  FiCheckCircle,
  FiSun,
  FiSliders,
  FiBatteryCharging,
  FiZap,
  FiPackage,
} from "react-icons/fi";
import shapeSpiral from "../assets/images/shape/1.png";
import shapeSparkle from "../assets/images/shape/2.png";

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-14 md:py-20 bg-white border-b border-slate-100"
    >
      {/* Decorative Background Shapes */}
      <div className="hidden sm:block absolute -bottom-10 -left-12 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-55 z-0">
        <img
          src={shapeSpiral}
          alt=""
          className="w-full h-full object-contain animate-[spin_95s_linear_infinite]"
        />
      </div>

      <div className="absolute top-10 left-12 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-80 z-0">
        <img
          src={shapeSparkle}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container-custom relative z-10 max-w-4xl sm:max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0068FF] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-3 sm:mb-4">
            স্পেসিফিকেশন ও বিবরণ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
            পণ্যের পূর্ণাঙ্গ কারিগরি বিবরণ
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            প্রতিটি খুঁটিনাটি তথ্য জেনে নিশ্চিত হয়ে অর্ডার সম্পন্ন করুন।
          </p>
        </div>

        {/* 2 Columns x 3 Rows Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Row 1, Col 1: ব্যবহারের ক্ষেত্র */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-[#0068FF] font-bold mb-3">
                <FiCheckCircle className="w-4.5 h-4.5 text-[#0068FF] shrink-0" />
                <span>ব্যবহারের ক্ষেত্র</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ঘর
                </span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  পড়াশোনা
                </span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ক্যাম্পিং
                </span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ট্রাভেলিং
                </span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  জরুরি লোডশেডিং
                </span>
              </div>
            </div>
          </div>

          {/* Row 1, Col 2: লাইটিং মোড */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-[#0068FF] font-bold mb-3">
                <FiSun className="w-4.5 h-4.5 text-[#0068FF] shrink-0" />
                <span>লাইটিং মোড</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ফোকাসড টর্চ
                </span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  সফট ল্যাম্প
                </span>
              </div>
            </div>
          </div>

          {/* Row 2, Col 1: কন্ট্রোল সিস্টেম */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-[#0068FF] font-bold mb-3">
                <FiSliders className="w-4.5 h-4.5 text-[#0068FF] shrink-0" />
                <span>কন্ট্রোল সিস্টেম</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  আলাদা ডুয়েল বাটন
                </span>
              </div>
            </div>
          </div>

          {/* Row 2, Col 2: ব্যাটারি */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-[#0068FF] font-bold mb-3">
                <FiBatteryCharging className="w-4.5 h-4.5 text-[#0068FF] shrink-0" />
                <span>ব্যাটারি</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ইনবিল্ট লিথিয়াম ব্যাটারি
                </span>
              </div>
            </div>
          </div>

          {/* Row 3, Col 1: চার্জিং */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-[#0068FF] font-bold mb-3">
                <FiZap className="w-4.5 h-4.5 text-[#0068FF] shrink-0" />
                <span>চার্জিং</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ইউএসবি চার্জিং
                </span>
              </div>
            </div>
          </div>

          {/* Row 3, Col 2: প্যাকেজে যা থাকছে */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-[#0068FF] font-bold mb-3">
                <FiPackage className="w-4.5 h-4.5 text-[#0068FF] shrink-0" />
                <span>প্যাকেজে যা থাকছে</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ১ × ২-ইন-১ টর্চ ও ল্যাম্প
                </span>
                <span className="px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-xl text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs">
                  ১ × ইউএসবি ক্যাবল
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
