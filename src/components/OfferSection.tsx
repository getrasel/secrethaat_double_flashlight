import React, { useState, useEffect } from "react";
import {
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { toBanglaNumber, PRODUCT_INFO } from "../data/productData";
import tableClockHolderImg from "../assets/images/3inone_table_lamp/table_clock_holder.webp";

export const OfferSection: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only track mouse movement on pointer-capable devices (desktop)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize from -1 to +1 from screen center
      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      // Smooth 2D translation movement (physical position shift)
      targetX = normX * 22; // Move up to 22px left/right
      targetY = normY * 18; // Move up to 18px up/down
    };

    const renderLoop = () => {
      // Smooth linear interpolation for buttery motion
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setOffset({
        x: currentX,
        y: currentY,
      });

      animId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const whatsappUrl = `https://wa.me/8801746867350?text=${encodeURIComponent(
    "হ্যালো, আমি ৩-ইন-১ কিউট কার্টুন থিম টেবিল ল্যাম্প সম্পর্কে বিস্তারিত জানতে ও অর্ডার করতে চাই।",
  )}`;

  const scrollToOrder = () => {
    const element = document.getElementById("order-section");
    if (element) {
      const yOffset = -75;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-19.5 sm:pt-32.5 pb-6 sm:pb-16 bg-white">
      <div className="container-custom">
        {/* Main Minimalist Showcase Card: 135deg, #e2eeff 0%, #e2eeff 60%, #0068FF 100% */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #e2eeff 0%, #e2eeff 60%, #0068FF 100%)",
          }}
          className="relative rounded-3xl sm:rounded-3xl p-4 sm:p-12 md:p-14 overflow-visible healis-shadow-lg"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 left-0 -mt-16 -ml-16 w-96 h-96 bg-[#e2eeff]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 -mb-16 -mr-16 w-72 h-72 bg-[#0068FF]/15 rounded-full blur-3xl pointer-events-none" />

          {/* 60% Left / 40% Right Desktop Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center">
            {/* Left Content Column (60% on desktop) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-base font-bold text-[#0068FF] shadow-xs">
                <FiCheckCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0068FF]" />
                <span>৩-ইন-১ মাল্টিফাংশনাল গ্যাজেট</span>
              </div>

              {/* Main Headline (Bigger & punchy) */}
              <h1 className="text-[26px] sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-slate-900">আপনার টেবিলকে রাখুন</span>
                <br />
                <span className="bg-[linear-gradient(90deg,#0A58CA_0%,#0068FF_35%,#0284C7_70%,#06B6D4_100%)] bg-clip-text text-transparent drop-shadow-2xs">
                  সুন্দর ও গোছানো।
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                {PRODUCT_INFO.subTagline}
              </p>

              {/* Price Display */}
              <div className="pt-0.5 sm:pt-1">
                <div className="flex items-baseline justify-center lg:justify-start gap-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0068FF]">
                    ৳{toBanglaNumber(PRODUCT_INFO.basePrice)}
                  </span>
                  <span className="text-lg sm:text-2xl text-slate-400 line-through font-bold">
                    ৳{toBanglaNumber(PRODUCT_INFO.regularPrice)}
                  </span>
                </div>
              </div>

              {/* Action Buttons: Clear & prominent text */}
              <div className="pt-1.5 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={scrollToOrder}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-blue bg-gradient-blue-hover text-white text-sm sm:text-base font-bold py-3 px-5 sm:px-6 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                >
                  <FiShoppingBag className="w-4.5 h-4.5 text-white" />
                  <span>এখনই অর্ডার করুন</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm sm:text-base font-bold py-3 px-5 sm:px-6 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  <span>হোয়াটসঅ্যাপে মেসেজ দিন</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <FiTruck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0068FF]" />
                  <span>সারা দেশে হোম ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiShield className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#0068FF]" />
                  <span>ক্যাশ অন ডেলিভারি</span>
                </div>
              </div>
            </div>

            {/* Right Side Column: Smooth 2D Mouse Moving Floating Image (Pure Translation, No Curve/Tilt) */}
            <div className="lg:col-span-5 flex justify-center items-center relative my-auto">
              {/* 25px Rounded White Card Frame that physically glides and moves with mouse */}
              <div
                style={{
                  transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
                }}
                className="relative w-full max-w-97.5 h-80 sm:h-125 rounded-[22px] sm:rounded-[25px] bg-white shadow-2xl p-3 sm:p-5 flex items-center justify-center overflow-hidden will-change-transform group"
              >
                {/* 19% Discount Badge (Sapphire-Cyan Gradient) */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-30 bg-gradient-blue text-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-extrabold shadow-md flex items-center gap-1 backdrop-blur-md">
                  <span>
                    {toBanglaNumber(PRODUCT_INFO.discountPercentage)}% ছাড়
                  </span>
                </div>

                {/* Product Image moving smoothly inside frame */}
                <div
                  style={{
                    transform: `translate3d(${offset.x * 0.3}px, ${offset.y * 0.3}px, 0)`,
                  }}
                  className="relative z-20 w-full h-full flex items-center justify-center will-change-transform"
                >
                  <img
                    src={tableClockHolderImg}
                    alt="৩-ইন-১ কিউট কার্টুন থিম টেবিল ল্যাম্প"
                    className="w-full h-full object-cover rounded-2xl sm:rounded-[18px] select-none pointer-events-none drop-shadow-md"
                    loading="eager"
                    fetchPriority="high"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
