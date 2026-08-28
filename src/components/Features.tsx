import React from "react";
import {
  FiCheckCircle,
  FiZap,
  FiClock,
  FiSmile,
  FiPackage,
  FiCompass,
  FiLayers,
  FiStar,
  FiEdit3,
} from "react-icons/fi";
import tableClockImg from "../assets/images/3inone_table_lamp/table_clock.webp";
import shapeSpiral from "../assets/images/shape/1.png";
import shapeSparkle from "../assets/images/shape/2.png";

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 md:py-24 bg-white border-b border-slate-100"
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

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#0068FF] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4 sm:mb-5">
            স্পেসিফিকেশন ও বিবরণ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            পণ্যের পূর্ণাঙ্গ কারিগরি বিবরণ
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            প্রতিটি খুঁটিনাটি তথ্য জেনে নিশ্চিত হয়ে অর্ডার সম্পন্ন করুন।
          </p>
        </div>

        {/* 2-Column Specs Layout (Full Height Stretched Alignment) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Full-Height Visual Backside Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/90 shadow-sm p-4 sm:p-6 flex flex-col justify-between h-full">
              <div className="flex-1 flex items-center justify-center rounded-2xl overflow-hidden bg-white border border-slate-100 p-3 sm:p-4 min-h-80 sm:min-h-100 lg:min-h-115">
                <img
                  src={tableClockImg}
                  alt="৩-ইন-১ কার্টুন টেবিল ল্যাম্প গঠন"
                  className="w-full h-full object-contain rounded-xl max-h-125"
                  loading="lazy"
                />
              </div>
              {/* Bigger & Taller Operation Info Box (Sapphire-Cyan Gradient) */}
              <div className="mt-5 p-6 sm:p-7 md:p-8 rounded-3xl bg-[linear-gradient(135deg,#0A58CA_0%,#0068FF_35%,#0284C7_70%,#06B6D4_100%)] text-white space-y-3.5 shadow-md shrink-0 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
                    <FiCheckCircle className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    সহজ অপারেট সিস্টেম
                  </span>
                </div>
                <p className="text-base sm:text-lg text-blue-50 leading-relaxed font-normal">
                  ল্যাম্পের জন্য রয়েছে ফ্লেক্সিবল নেক ডিজাইন এবং ঘড়ির পেছনে
                  রয়েছে সহজ টাইম সেটিং নব। যেকোনো বয়সের মানুষ বা শিশুরা অনায়াসে
                  পরিচালনা করতে পারবে।
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Specification Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Spec Item: Product Name */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiLayers className="w-4.5 h-4.5" />
                  <span>পণ্যের নাম</span>
                </div>
                <p className="font-latin text-base font-bold text-slate-900">
                  3-in-1 Cute Cartoon Theme Table Lamp
                </p>
              </div>

              {/* Spec Item: Product Type */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiCompass className="w-4.5 h-4.5" />
                  <span>পণ্যের ধরন</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  ৩-ইন-১ মাল্টিফাংশনাল টেবিল ল্যাম্প
                </p>
              </div>

              {/* Spec Item: Core Benefit */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiStar className="w-4.5 h-4.5" />
                  <span>প্রধান সুবিধা</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  LED ল্যাম্প + অ্যানালগ ঘড়ি + পেন হোল্ডার
                </p>
              </div>

              {/* Spec Item: Lamp Type */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiZap className="w-4.5 h-4.5" />
                  <span>ল্যাম্পের ধরন</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  <span className="font-latin">
                    Moon Shape Flexible LED Light
                  </span>
                </p>
              </div>

              {/* Spec Item: Clock Type */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiClock className="w-4.5 h-4.5" />
                  <span>ঘড়ির ধরন</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  <span className="font-latin">Quartz</span> ব্যাটারি চালিত
                  অ্যানালগ ঘড়ি
                </p>
              </div>

              {/* Spec Item: Pen Holder */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiEdit3 className="w-4.5 h-4.5" />
                  <span>পেন হোল্ডার</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  কলম, পেন্সিল ও প্রয়োজনীয় জিনিস রাখার সুবিধা
                </p>
              </div>

              {/* Spec Item: Design Theme */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors sm:col-span-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiSmile className="w-4.5 h-4.5" />
                  <span>ডিজাইন থিম</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  Cute Bear / Rabbit Cartoon Theme (আকর্ষণীয় কার্টুন থিম)
                </p>
              </div>

              {/* Spec Item: Usage Places */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 sm:col-span-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-2">
                  <FiCheckCircle className="w-4.5 h-4.5" />
                  <span>ব্যবহারের উপযুক্ত স্থান</span>
                </div>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    বাচ্চাদের পড়ার টেবিল
                  </span>
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    নাইট স্ট্যান্ড
                  </span>
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    ঘরের কর্নার
                  </span>
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    ডেস্ক ডেকোরেশন
                  </span>
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    গিফট / উপহার
                  </span>
                </div>
              </div>

              {/* Spec Item: Package Contents (Clean #0068ff Gradient Card) */}
              <div className="p-6 rounded-3xl bg-gradient-blue text-white shadow-md sm:col-span-2 flex items-center gap-4.5">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
                  <FiPackage className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-blue-100 uppercase tracking-wider">
                    প্যাকেজে যা থাকছে
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-white">
                    ১টি ৩-ইন-১ কিউট কার্টুন থিম টেবিল ল্যাম্প (LED লাইট,
                    অ্যানালগ ঘড়ি ও পেন হোল্ডারসহ)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
