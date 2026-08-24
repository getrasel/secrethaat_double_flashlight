import React from 'react';
import {
  FiLayers,
  FiZap,
  FiClock,
  FiStar,
  FiGift,
  FiHome,
  FiEdit3
} from 'react-icons/fi';
import { PRODUCT_BENEFITS } from '../data/productData';
import shapeSpiral from '../assets/images/shape/1.png';
import shapeSparkle from '../assets/images/shape/2.png';

export const Benefits: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return {
          icon: <FiStar className="w-7 h-7 text-[#D97706]" />,
          bg: 'bg-amber-50/90 text-[#D97706] border-amber-100',
        };
      case 'lamp':
        return {
          icon: <FiZap className="w-7 h-7 text-[#0068FF]" />,
          bg: 'bg-blue-50/90 text-[#0068FF] border-blue-100',
        };
      case 'clock':
        return {
          icon: <FiClock className="w-7 h-7 text-[#4F46E5]" />,
          bg: 'bg-indigo-50/90 text-[#4F46E5] border-indigo-100',
        };
      case 'holder':
        return {
          icon: <FiEdit3 className="w-7 h-7 text-[#0284C7]" />,
          bg: 'bg-sky-50/90 text-[#0284C7] border-sky-100',
        };
      case 'multipurpose':
        return {
          icon: <FiLayers className="w-7 h-7 text-[#0068FF]" />,
          bg: 'bg-blue-50/90 text-[#0068FF] border-blue-100',
        };
      case 'home':
        return {
          icon: <FiHome className="w-7 h-7 text-[#06B6D4]" />,
          bg: 'bg-cyan-50/90 text-[#06B6D4] border-cyan-100',
        };
      case 'gift':
        return {
          icon: <FiGift className="w-7 h-7 text-[#16A34A]" />,
          bg: 'bg-emerald-50/90 text-[#16A34A] border-emerald-100',
        };
      default:
        return {
          icon: <FiLayers className="w-7 h-7 text-[#0068FF]" />,
          bg: 'bg-blue-50/90 text-[#0068FF] border-blue-100',
        };
    }
  };

  return (
    <section id="benefits" className="relative overflow-hidden py-16 md:py-24 bg-white border-y border-slate-100">
      
      {/* Decorative Swimming Shape 1.png (Hidden on mobile, desktop only) */}
      <div className="hidden sm:block absolute -top-10 -left-12 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-60 z-0">
        <img
          src={shapeSpiral}
          alt=""
          className="w-full h-full object-contain animate-[spin_110s_linear_infinite]"
        />
      </div>

      <div className="absolute top-12 right-8 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-80 z-0">
        <img src={shapeSparkle} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#0068FF] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4 sm:mb-5 shadow-2xs">
            প্রধান সুবিধাসমূহ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            কেন এটি আপনার টেবিলের সেরা সঙ্গী?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            দৈনন্দিন পড়ালেখা, কাজ ও জীবনযাত্রাকে আরও গোছানো এবং আরামদায়ক করতে প্রয়োজনীয় প্রতিটি সুবিধা এতে দেওয়া হয়েছে।
          </p>
        </div>

        {/* Benefits Grid with Unique Modern Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCT_BENEFITS.map((benefit) => {
            const iconData = getBenefitIcon(benefit.iconName);
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 card-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Modern Squircle Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border shadow-2xs group-hover:scale-105 transition-transform duration-300 ${iconData.bg}`}>
                    {iconData.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
