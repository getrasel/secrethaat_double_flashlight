import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiShoppingBag,
  FiMapPin,
  FiPhone,
  FiUser,
  FiTruck,
  FiShield,
  FiArrowLeft,
  FiPackage,
  FiCheck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  PRODUCT_INFO,
  COLOR_VARIANTS,
  toBanglaNumber,
} from "../data/productData";
import type { OrderState } from "../types";

export const ThankYou: React.FC = () => {
  const location = useLocation();
  const state = location.state as {
    order?: OrderState;
    orderNumber?: string;
    grandTotal?: number;
    deliveryFee?: number;
    subtotal?: number;
  } | null;

  const [fallbackOrderNumber] = useState(() => `SH-${Math.floor(10000 + Math.random() * 90000)}`);
  const orderNumber = state?.orderNumber || fallbackOrderNumber;

  const order = state?.order;
  const grandTotal =
    state?.grandTotal ?? PRODUCT_INFO.basePrice + PRODUCT_INFO.deliveryDhaka;
  const deliveryFee =
    state?.deliveryFee ??
    (order?.deliveryArea === "outside"
      ? PRODUCT_INFO.deliveryOutside
      : PRODUCT_INFO.deliveryDhaka);
  const quantity = order?.quantity ?? 1;
  const unitPrice = PRODUCT_INFO.basePrice;
  const subtotal = state?.subtotal ?? unitPrice * quantity;

  // Find color variant details if available
  const variant =
    COLOR_VARIANTS.find(
      (v) => v.name === order?.selectedColor || v.id === order?.selectedColor,
    ) || COLOR_VARIANTS[0];

  const whatsappUrl = `https://wa.me/8801746867350?text=${encodeURIComponent(
    `হ্যালো, আমি অর্ডার #${orderNumber} সম্পর্কে জানতে চাই।`,
  )}`;

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-[85vh] flex items-center justify-center">
      <div className="container-custom max-w-3xl">
        {/* Success Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-blue-500/5 text-center relative overflow-hidden">
          {/* Subtle Top Accent Gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-blue" />

          {/* Success Animated Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 text-emerald-500 mx-auto flex items-center justify-center border-4 border-emerald-100 shadow-inner mb-6">
            <FiCheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold mb-3">
            <FiCheck className="w-4 h-4" />
            অর্ডার সফলভাবে গ্রহণ করা হয়েছে
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
            অভিনন্দন! আপনার অর্ডারটি নিশ্চিত হয়েছে
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed mb-6">
            আমাদের কাস্টমার সাপোর্ট প্রতিনিধি খুব শীঘ্রই আপনার নম্বরে কল করে
            অর্ডারটি ভেরিফাই করবেন এবং পার্সেলটি পাঠিয়ে দেওয়া হবে।
          </p>

          {/* Order Reference Number Banner */}
          <div className="inline-flex items-center gap-3 bg-slate-100/90 border border-slate-200 px-5 py-2.5 rounded-2xl text-xs sm:text-sm text-slate-700 font-latin">
            <span className="font-semibold text-slate-500">Order ID:</span>
            <span className="font-extrabold text-slate-900 tracking-wider text-base">
              {orderNumber}
            </span>
          </div>

          {/* Order Details & Summary Card */}
          <div className="mt-8 text-left bg-slate-50/90 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200/80 pb-3">
              <FiShoppingBag className="w-5 h-5 text-[#0068FF]" />
              অর্ডারের সংক্ষিপ্ত বিবরণ
            </h2>

            {/* Product Item Preview */}
            <div className="flex items-center gap-4 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate">
                  {PRODUCT_INFO.nameBangla}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-2 mt-1">
                  <span>
                    রঙ:{" "}
                    <strong className="text-slate-800">
                      {order?.selectedColor || variant.name}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    পরিমাণ:{" "}
                    <strong className="text-slate-800">
                      {toBanglaNumber(quantity)} পিস
                    </strong>
                  </span>
                </p>
                <div className="text-xs sm:text-sm font-bold text-[#0068FF] mt-1 font-latin">
                  ৳{toBanglaNumber(unitPrice)} × {toBanglaNumber(quantity)} = ৳
                  {toBanglaNumber(subtotal)}
                </div>
              </div>
            </div>

            {/* Customer Details if available */}
            {order?.customerName && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <FiUser className="w-3.5 h-3.5 text-[#0068FF]" />
                    গ্রাহকের নাম:
                  </span>
                  <span className="font-bold text-slate-900 block wrap-break-word">
                    {order.customerName}
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <FiPhone className="w-3.5 h-3.5 text-[#0068FF]" />
                    মোবাইল নম্বর:
                  </span>
                  <span className="font-bold text-slate-900 block font-latin">
                    {order.phoneNumber}
                  </span>
                </div>

                <div className="sm:col-span-2 bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <FiMapPin className="w-3.5 h-3.5 text-[#0068FF]" />
                    ডেলিভারি ঠিকানা:
                  </span>
                  <span className="font-semibold text-slate-900 block wrap-break-word">
                    {order.fullAddress}
                  </span>
                </div>
              </div>
            )}

            {/* Price Calculations */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-600">
                <span>পণ্যের মূল্য:</span>
                <span className="font-semibold text-slate-900">
                  ৳{toBanglaNumber(subtotal)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>
                  ডেলিভারি চার্জ (
                  {order?.deliveryArea === "outside"
                    ? "ঢাকার বাইরে"
                    : "ঢাকা শহর"}
                  ):
                </span>
                <span className="font-semibold text-slate-900">
                  ৳{toBanglaNumber(deliveryFee)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>পেমেন্ট পদ্ধতি:</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  ক্যাশ অন ডেলিভারি
                </span>
              </div>
              <div className="border-t border-slate-200/80 pt-2.5 flex justify-between items-center text-base sm:text-lg font-bold text-slate-900">
                <span>সর্বমোট পরিশোধযোগ্য:</span>
                <span className="text-xl sm:text-2xl font-extrabold text-[#0068FF]">
                  ৳{toBanglaNumber(grandTotal)}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery & Security Assurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 text-left">
            <div className="bg-blue-50/60 border border-blue-100 p-3 rounded-2xl flex items-start gap-2.5">
              <FiTruck className="w-5 h-5 text-[#0068FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  দ্রুত ডেলিভারি
                </h4>
                <p className="text-[11px] text-slate-600 leading-tight">
                  ঢাকা ২-৩ দিন, বাইরে ৩-৫ দিন
                </p>
              </div>
            </div>
            <div className="bg-emerald-50/60 border border-emerald-100 p-3 rounded-2xl flex items-start gap-2.5">
              <FiPackage className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  চেক করে রিসিভ
                </h4>
                <p className="text-[11px] text-slate-600 leading-tight">
                  ডেলিভারি ম্যানের সামনে চেক করুন
                </p>
              </div>
            </div>
            <div className="bg-amber-50/60 border border-amber-100 p-3 rounded-2xl flex items-start gap-2.5">
              <FiShield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  ৭ দিনের গ্যারান্টি
                </h4>
                <p className="text-[11px] text-slate-600 leading-tight">
                  যেকোনো সমস্যায় সহজ রিপ্লেসমেন্ট
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-blue bg-gradient-blue-hover text-white font-bold py-3.5 px-7 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-98"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>মূল পাতায় ফিরে যান</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-98"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>হোয়াটসঅ্যাপে যোগাযোগ</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
