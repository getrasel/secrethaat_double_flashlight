import React from 'react';
import { FiStar, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';
import { TESTIMONIALS } from '../data/productData';
import shapeSpiral from '../assets/images/shape/1.png';
import shapeSparkle from '../assets/images/shape/2.png';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-slate-50/60 border-t border-slate-100">
      
      {/* Decorative Background Shapes */}
      <div className="hidden sm:block absolute -top-10 -right-10 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-60 z-0">
        <img
          src={shapeSpiral}
          alt=""
          className="w-full h-full object-contain animate-[spin_110s_linear_infinite]"
        />
      </div>

      <div className="absolute top-10 right-28 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-80 z-0">
        <img src={shapeSparkle} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header with generous badge gap */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-xs sm:text-sm font-bold text-[#0068FF] shadow-2xs mb-3.5 sm:mb-5">
            <FiMessageSquare className="w-4 h-4 text-[#0068FF]" />
            <span>গ্রাহক মতামত ও রিভিউ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ব্যবহারকারীদের বাস্তব অভিজ্ঞতা
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            আমাদের 2-in-1 Rechargeable Double Light Torch & Reading Lamp ব্যবহারের পর সম্মানিত গ্রাহকদের সন্তুষ্টির কিছু বাস্তব মন্তব্য।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between card-hover"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-5">
                  "{review.comment}"
                </p>
              </div>

              {/* User Info Bar */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ${review.avatarColor}`}
                >
                  {review.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900 truncate">
                      {review.name}
                    </span>
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="যাচাইকৃত ক্রেতা" />
                  </div>
                  <p className="text-xs text-slate-500 truncate font-medium">{review.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
