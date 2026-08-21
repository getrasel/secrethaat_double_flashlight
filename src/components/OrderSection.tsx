import React, { useState } from 'react';
import {
  FiCheckCircle,
  FiShoppingBag,
  FiPlus,
  FiMinus,
  FiCheck,
  FiAlertCircle,
  FiX
} from 'react-icons/fi';
import {
  PRODUCT_INFO,
  COLOR_VARIANTS,
  toBanglaNumber
} from '../data/productData';
import type { OrderState } from '../types';
import shapeSpiral from '../assets/images/shape/1.png';
import shapeSparkle from '../assets/images/shape/2.png';

export const OrderSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('pink');
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryArea, setDeliveryArea] = useState<'dhaka' | 'outside'>('dhaka');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  // Validation State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedOrder, setSubmittedOrder] = useState<OrderState | null>(null);

  // Dynamic Calculations
  const unitPrice = PRODUCT_INFO.basePrice;
  const itemsTotal = unitPrice * quantity;
  const regularTotal = PRODUCT_INFO.regularPrice * quantity;
  const deliveryCharge = deliveryArea === 'dhaka' ? PRODUCT_INFO.deliveryDhaka : PRODUCT_INFO.deliveryOutside;
  const grandTotal = itemsTotal + deliveryCharge;

  const currentColor = COLOR_VARIANTS.find((c) => c.id === selectedColor) || COLOR_VARIANTS[0];

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => {
      const newQty = prev + delta;
      return newQty >= 1 ? newQty : 1;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'অনুগ্রহ করে আপনার নাম লিখুন';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন';
    } else if (cleanPhone.length < 11) {
      newErrors.phone = 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'অনুগ্রহ করে আপনার সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const orderPayload: OrderState = {
        selectedColor: currentColor.name,
        quantity,
        customerName: formData.name.trim(),
        phoneNumber: formData.phone.trim(),
        fullAddress: formData.address.trim(),
        deliveryArea,
        notes: formData.notes.trim() || undefined,
      };

      setSubmittedOrder(orderPayload);
      setIsSubmitted(true);
    }
  };

  const resetOrderModal = () => {
    setIsSubmitted(false);
    setFormData({ name: '', phone: '', address: '', notes: '' });
    setQuantity(1);
  };

  return (
    <section id="order-section" className="relative overflow-hidden py-16 md:py-24 bg-white border-y border-slate-100">
      
      {/* Decorative Background Shapes */}
      <div className="hidden sm:block absolute top-10 -right-12 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-55 z-0">
        <img
          src={shapeSpiral}
          alt=""
          className="w-full h-full object-contain animate-[spin_120s_linear_infinite]"
        />
      </div>

      <div className="absolute top-12 left-10 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none opacity-80 z-0">
        <img src={shapeSparkle} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#0068FF] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4 sm:mb-5">
            সহজ ও দ্রুত অর্ডার
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            পছন্দের রঙ নির্বাচন ও অর্ডার সম্পন্ন করুন
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            ফর্মটি পূরণ করে "অর্ডার কনফার্ম করুন" বাটনে ক্লিক করুন। ক্যাশ অন ডেলিভারিতে পণ্য বুঝে পেয়ে মূল্য পরিশোধ করুন।
          </p>
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Product Customization & Dynamic Price Breakdown */}
          <div className="lg:col-span-6 space-y-6">

            {/* Color Swatch Card */}
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">

              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  রঙ নির্বাচন করুন
                </h3>
                <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-xl bg-white border border-slate-200 text-[#0068FF]">
                  নির্বাচিত: {currentColor.name}
                </span>
              </div>

              {/* Color Swatches Grid (2 Columns for Sweet Pink & Sky Blue) */}
              <div className="grid grid-cols-2 gap-4">
                {COLOR_VARIANTS.map((variant) => {
                  const isSelected = variant.id === selectedColor;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedColor(variant.id)}
                      className={`relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all cursor-pointer bg-white ${isSelected
                        ? 'border-[#0068FF] ring-3 ring-[#0068FF]/20 shadow-md scale-101'
                        : 'border-slate-200/90 hover:border-slate-300'
                        }`}
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 bg-slate-100 border border-slate-100">
                        <img
                          src={variant.image}
                          alt={variant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs shrink-0"
                          style={{ backgroundColor: variant.hex }}
                        />
                        <span className="text-sm sm:text-base font-bold text-slate-900">
                          {variant.name}
                        </span>
                      </div>

                      {isSelected && (
                        <span className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-xs">
                          <FiCheck className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quantity Selector */}
              <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">পরিমাণ (Quantity)</h4>
                  <p className="text-xs sm:text-sm text-slate-500">কত পিস নিতে চান?</p>
                </div>

                <div className="flex items-center bg-white border border-slate-300 rounded-2xl p-1.5 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    aria-label="পরিমাণ কমান"
                  >
                    <FiMinus className="w-5 h-5" />
                  </button>

                  <span className="w-14 text-center font-latin font-bold text-lg text-slate-900">
                    {toBanglaNumber(quantity)}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    aria-label="পরিমাণ বাড়ান"
                  >
                    <FiPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Dynamic Price Breakdown Box (Sapphire-Cyan Gradient & Pure White Text) */}
            <div className="bg-[linear-gradient(135deg,#0A58CA_0%,#0068FF_35%,#0284C7_70%,#06B6D4_100%)] text-white rounded-3xl p-6 sm:p-8 healis-shadow-lg space-y-4 border border-white/20">
              <h3 style={{ color: '#FFFFFF' }} className="text-base sm:text-lg font-extrabold text-white tracking-wide border-b border-white/25 pb-3">
                মূল্য ও অর্ডার সামারি
              </h3>

              <div className="space-y-3 text-base">
                <div className="flex justify-between text-blue-100">
                  <span>নিয়মিত বাজার মূল্য</span>
                  <span className="text-blue-200 line-through">৳{toBanglaNumber(regularTotal)}</span>
                </div>

                <div className="flex justify-between text-white font-medium">
                  <span>অফার মূল্য ({toBanglaNumber(quantity)} পিস)</span>
                  <span className="font-bold">৳{toBanglaNumber(itemsTotal)}</span>
                </div>

                <div className="flex justify-between text-blue-100">
                  <span>
                    ডেলিভারি চার্জ ({deliveryArea === 'dhaka' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'})
                  </span>
                  <span className="font-bold text-white">৳{toBanglaNumber(deliveryCharge)}</span>
                </div>

                <div className="pt-3 border-t border-white/20 flex justify-between items-center text-lg sm:text-xl">
                  <span className="font-extrabold text-white">সর্বমোট প্রদেয় মূল্য</span>
                  <span className="font-extrabold text-3xl text-white">
                    ৳{toBanglaNumber(grandTotal)}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Bangla Checkout Order Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">

              <div className="mb-6 pb-4 border-b border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  অর্ডার ফর্ম
                </h3>
                <p className="text-sm text-slate-500">
                  আপনার ডেলিভারি তথ্য সঠিকভাবে পূরণ করুন
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Field: Full Name */}
                <div className="space-y-2">
                  <label htmlFor="customer-name" className="block text-sm sm:text-base font-bold text-slate-800">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="আপনার নাম লিখুন"
                    className={`w-full px-4.5 py-3.5 rounded-2xl bg-white border text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0068FF] transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                      }`}
                  />
                  {errors.name && (
                    <p className="text-xs sm:text-sm text-red-600 flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field: Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="customer-phone" className="block text-sm sm:text-base font-bold text-slate-800">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="আপনার ১১ ডিজিটের মোবাইল নম্বর লিখুন"
                    className={`w-full px-4.5 py-3.5 rounded-2xl bg-white border text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0068FF] transition-all ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                      }`}
                  />
                  {errors.phone && (
                    <p className="text-xs sm:text-sm text-red-600 flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-4 h-4" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Field: Full Address */}
                <div className="space-y-2">
                  <label htmlFor="customer-address" className="block text-sm sm:text-base font-bold text-slate-800">
                    সম্পূর্ণ ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    name="address"
                    rows={2}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="জেলা, থানা, রোড নম্বর ও বাসার সম্পূর্ণ ঠিকানা লিখুন"
                    className={`w-full px-4.5 py-3.5 rounded-2xl bg-white border text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0068FF] transition-all resize-none ${errors.address ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                      }`}
                  />
                  {errors.address && (
                    <p className="text-xs sm:text-sm text-red-600 flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-4 h-4" />
                      <span>{errors.address}</span>
                    </p>
                  )}
                </div>

                {/* Delivery Area Selection */}
                <div className="space-y-2.5">
                  <label className="block text-sm sm:text-base font-bold text-slate-800">
                    ডেলিভারি এলাকা নির্বাচন করুন <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                    {/* Option 1: Dhaka */}
                    <label
                      className={`relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all bg-white ${deliveryArea === 'dhaka'
                        ? 'border-[#0068FF] ring-2 ring-[#0068FF]/15 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryArea"
                          value="dhaka"
                          checked={deliveryArea === 'dhaka'}
                          onChange={() => setDeliveryArea('dhaka')}
                          className="w-4.5 h-4.5 text-[#0068FF] focus:ring-[#0068FF]"
                        />
                        <div>
                          <p className="text-sm sm:text-base font-bold text-slate-900">ঢাকা শহর</p>
                          <p className="text-xs text-slate-500">২৪-৪৮ ঘণ্টার মধ্যে</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0068FF] bg-blue-50 px-2.5 py-1 rounded-lg">
                        ৳{toBanglaNumber(PRODUCT_INFO.deliveryDhaka)}
                      </span>
                    </label>

                    {/* Option 2: Outside Dhaka */}
                    <label
                      className={`relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all bg-white ${deliveryArea === 'outside'
                        ? 'border-[#0068FF] ring-2 ring-[#0068FF]/15 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliveryArea"
                          value="outside"
                          checked={deliveryArea === 'outside'}
                          onChange={() => setDeliveryArea('outside')}
                          className="w-4.5 h-4.5 text-[#0068FF] focus:ring-[#0068FF]"
                        />
                        <div>
                          <p className="text-sm sm:text-base font-bold text-slate-900">ঢাকার বাইরে</p>
                          <p className="text-xs text-slate-500">সারা বাংলাদেশে</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0068FF] bg-blue-50 px-2.5 py-1 rounded-lg">
                        ৳{toBanglaNumber(PRODUCT_INFO.deliveryOutside)}
                      </span>
                    </label>

                  </div>
                </div>

                {/* Primary CTA Submit Button (Styled with #0068ff Gradient - Sleeker & Compact) */}
                <button
                  type="submit"
                  className="w-full bg-gradient-blue bg-gradient-blue-hover text-white text-sm sm:text-base font-bold py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white shrink-0" />
                  <span>অর্ডার কনফার্ম করুন — ৳{toBanglaNumber(grandTotal)}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Order Confirmation Modal */}
      {isSubmitted && submittedOrder && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="অর্ডার কনফার্মেশন"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-9 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
            <button
              type="button"
              onClick={resetOrderModal}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="বন্ধ করুন"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-18 h-18 rounded-full bg-blue-50 text-[#0068FF] mx-auto flex items-center justify-center shadow-xs">
                <FiCheckCircle className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                আমাদের কাস্টমার প্রতিনিধি খুব শীঘ্রই আপনার নম্বরে কল করে অর্ডারটি ভেরিফাই করবেন।
              </p>
            </div>

            {/* Invoice Summary Box */}
            <div className="my-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-2.5 text-slate-700">
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="font-semibold text-slate-900">পণ্য:</span>
                <span>{PRODUCT_INFO.nameBangla}</span>
              </div>
              <div className="flex justify-between">
                <span>নির্বাচিত রঙ:</span>
                <span className="font-bold text-[#0068FF]">{submittedOrder.selectedColor}</span>
              </div>
              <div className="flex justify-between">
                <span>পরিমাণ:</span>
                <span className="font-medium text-slate-900">{toBanglaNumber(submittedOrder.quantity)} পিস</span>
              </div>
              <div className="flex justify-between">
                <span>ক্রেতার নাম:</span>
                <span className="font-medium text-slate-900">{submittedOrder.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span>মোবাইল নম্বর:</span>
                <span className="font-medium text-slate-900">{submittedOrder.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>ঠিকানা:</span>
                <span className="font-medium text-slate-900 text-right max-w-[220px] truncate">
                  {submittedOrder.fullAddress}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-200/80 pt-2.5 text-lg font-bold text-slate-900">
                <span>সর্বমোট বিল:</span>
                <span className="text-[#0068FF]">৳{toBanglaNumber(grandTotal)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={resetOrderModal}
              className="w-full bg-gradient-blue bg-gradient-blue-hover text-white font-bold py-4 rounded-2xl transition-all cursor-pointer text-base"
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
