import React from 'react';
import {
  FiCheckCircle,
  FiZap,
  FiVolumeX,
  FiBattery,
  FiSmile,
  FiPackage,
  FiCompass,
  FiLayers
} from 'react-icons/fi';
import clockBacksideImg from '../assets/images/clock_backside.jpg';
import shapeSpiral from '../assets/images/shape/1.png';
import shapeSparkle from '../assets/images/shape/2.png';

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative overflow-hidden py-16 md:py-24 bg-white border-b border-slate-100">
      
      {/* Decorative Background Shapes */}
      <div className="hidden sm:block absolute -bottom-10 -left-12 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-55 z-0">
        <img
          src={shapeSpiral}
          alt=""
          className="w-full h-full object-contain animate-[spin_95s_linear_infinite]"
        />
      </div>

      <div className="absolute top-10 left-12 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-80 z-0">
        <img src={shapeSparkle} alt="" className="w-full h-full object-contain" />
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
              <div className="flex-1 flex items-center justify-center rounded-2xl overflow-hidden bg-white border border-slate-100 p-3 sm:p-4 min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
                <img
                  src={clockBacksideImg}
                  alt="ঘড়ির রিয়ার কন্ট্রোল ও গঠন"
                  className="w-full h-full object-contain rounded-xl max-h-[500px]"
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
                  ঘড়ির পিছন দিকে রয়েছে টাইম ন্যারেশন ও অ্যালার্ম নব এবং নিচে আলাদা অন/অফ সুইচ। যেকোনো বয়সের মানুষ সহজেই পরিচালনা করতে পারবেন।
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
                  2-in-1 Fashion Fan Alarm Clock
                </p>
              </div>

              {/* Spec Item: Product Type */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiCompass className="w-4.5 h-4.5" />
                  <span>পণ্যের ধরন</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  অ্যালার্ম ক্লক + মিনি ফ্যান
                </p>
              </div>

              {/* Spec Item: Fan Battery */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiZap className="w-4.5 h-4.5" />
                  <span>ফ্যান ব্যাটারি</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  <span className="font-latin">500mAh</span> রিচার্জেবল ব্যাটারি
                </p>
              </div>

              {/* Spec Item: Charging System */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiZap className="w-4.5 h-4.5" />
                  <span>চার্জিং মাধ্যম</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  <span className="font-latin">USB</span> কেবল চার্জিং
                </p>
              </div>

              {/* Spec Item: Fan Airflow */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiVolumeX className="w-4.5 h-4.5" />
                  <span>ফ্যান প্রযুক্তি</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  <span className="font-latin">Silent Airflow</span> (নীরব বাতাস)
                </p>
              </div>

              {/* Spec Item: Clock Battery */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiBattery className="w-4.5 h-4.5" />
                  <span>ঘড়ির ব্যাটারি</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  ১টি <span className="font-latin">AA 1.5V</span> ব্যাটারি
                </p>
              </div>

              {/* Spec Item: Design Theme */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 transition-colors sm:col-span-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0068FF] font-semibold mb-1.5">
                  <FiSmile className="w-4.5 h-4.5" />
                  <span>ডিজাইন ও গঠন</span>
                </div>
                <p className="text-base font-bold text-slate-900">
                  কিউট অ্যাস্ট্রোনট / কার্টুন প্রিমিয়াম ডিজাইন
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
                    পড়ার টেবিল
                  </span>
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    অফিস ডেস্ক
                  </span>
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    বেডসাইড টেবিল
                  </span>
                  <span className="text-xs sm:text-sm bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-medium text-slate-800">
                    শিশুদের স্টাডি টেবিল
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
                    ১টি ২-ইন-১ অ্যালার্ম ক্লক ও ফ্যান এবং ১টি USB চার্জিং ক্যাবল
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
