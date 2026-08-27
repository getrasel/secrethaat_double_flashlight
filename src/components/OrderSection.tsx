import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiCheckCircle,
  FiShoppingBag,
  FiPlus,
  FiMinus,
  FiCheck,
  FiAlertCircle,
  FiX,
  FiTruck,
  FiMapPin
} from 'react-icons/fi';
import {
  PRODUCT_INFO,
  COLOR_VARIANTS,
  toBanglaNumber
} from '../data/productData';
import type { OrderState } from '../types';
import shapeSpiral from '../assets/images/shape/1.png';
import shapeSparkle from '../assets/images/shape/2.png';

import { createSupabaseOrder } from '../utils/orderStorage';

export const OrderSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState<string>('yellow');
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryArea, setDeliveryArea] = useState<'dhaka' | 'outside'>('dhaka');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  // Validation & Submit State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedOrder, setSubmittedOrder] = useState<OrderState | null>(null);

  // Dynamic Calculations
  const unitPrice = PRODUCT_INFO.basePrice;
  const regularUnitPrice = PRODUCT_INFO.regularPrice;
  const regularTotal = regularUnitPrice * quantity;
  const itemsTotal = unitPrice * quantity;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm() && !isSubmitting) {
      setIsSubmitting(true);
      const fallbackId = Math.floor(10000 + Math.random() * 90000);
      const orderPayload: OrderState = {
        selectedColor: currentColor.name,
        quantity,
        customerName: formData.name.trim(),
        phoneNumber: formData.phone.trim(),
        fullAddress: formData.address.trim(),
        deliveryArea,
        notes: formData.notes.trim() || undefined,
      };

      // Store in Supabase
      const { data: createdOrder } = await createSupabaseOrder({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        product: PRODUCT_INFO.name,
        color: currentColor.name,
        quantity,
        price: unitPrice,
        shipping_amount: deliveryCharge,
        total_amount: grandTotal,
        status: 'pending',
        notes: formData.notes.trim() || undefined,
      });

      const finalOrderId = createdOrder?.id ? `SH-${createdOrder.id}` : `SH-${fallbackId}`;

      setSubmittedOrder(orderPayload);
      setIsSubmitted(true);
      setIsSubmitting(false);

      navigate('/thank-you', {
        state: {
          order: orderPayload,
          orderNumber: finalOrderId,
          grandTotal,
          deliveryFee: deliveryCharge,
          subtotal: itemsTotal,
        },
      });
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
            <div className="bg-slate-50/70 rounded-3xl p-5 sm:p-6 pb-4 sm:pb-5 border border-slate-200 shadow-xs space-y-4">

              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  ১. রঙ নির্বাচন করুন
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
                      className={`relative flex flex-col items-center p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer bg-white ${isSelected
                        ? 'border-[#0068FF] ring-3 ring-[#0068FF]/20 shadow-md scale-101'
                        : 'border-slate-200/90 hover:border-slate-300'
                        }`}
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden mb-2.5 bg-slate-100 border border-slate-100">
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

              {/* Quantity Selector - Reduced bottom padding */}
              <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">২. পরিমাণ (Quantity)</h4>
                  <p className="text-xs sm:text-sm text-slate-500">কত পিস নিতে চান?</p>
                </div>

                <div className="flex items-center bg-white border border-slate-300 rounded-2xl p-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    aria-label="পরিমাণ কমান"
                  >
                    <FiMinus className="w-4.5 h-4.5" />
                  </button>

                  <span className="w-12 text-center font-latin font-bold text-base sm:text-lg text-slate-900">
                    {toBanglaNumber(quantity)}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    aria-label="পরিমাণ বাড়ান"
                  >
                    <FiPlus className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Dynamic Price Breakdown Box - Reduced bottom padding & Market price removed */}
            <div className="bg-[linear-gradient(135deg,#0A58CA_0%,#0068FF_35%,#0284C7_70%,#06B6D4_100%)] text-white rounded-3xl p-5 sm:px-7 sm:pt-5 sm:pb-4.5 healis-shadow-lg space-y-3.5 border border-white/20">
              <div className="flex items-center justify-between border-b border-white/25 pb-2.5">
                <h3 style={{ color: '#FFFFFF' }} className="text-base sm:text-lg font-extrabold text-white tracking-wide flex items-center gap-2">
                  <FiShoppingBag className="w-5 h-5 text-blue-200" />
                  মূল্য ও অর্ডার সামারি
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20">
                  ক্যাশ অন ডেলিভারি
                </span>
              </div>

              {/* Delivery Area Selection inside Summary Card */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                    <FiTruck className="w-4.5 h-4.5 text-cyan-200" />
                    <span>ডেলিভারি এলাকা নির্বাচন করুন <span className="text-rose-300 font-bold">*</span></span>
                  </label>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/20 text-white">
                    {deliveryArea === 'dhaka' ? 'ঢাকা শহর' : 'ঢাকার বাইরে'}
                  </span>
                </div>

                {/* 2 Selectable Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

                  {/* Option 1: Dhaka */}
                  <button
                    type="button"
                    onClick={() => setDeliveryArea('dhaka')}
                    className={`text-left p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer relative flex items-center justify-between ${deliveryArea === 'dhaka'
                        ? 'bg-white text-slate-900 border-white shadow-md ring-3 ring-white/50 scale-[1.01]'
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-xs'
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${deliveryArea === 'dhaka'
                            ? 'border-[#0068FF] bg-[#0068FF] text-white'
                            : 'border-white/70 bg-white/15'
                          }`}
                      >
                        {deliveryArea === 'dhaka' && <FiCheck className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <p className={`text-sm sm:text-base font-bold leading-tight ${deliveryArea === 'dhaka' ? 'text-slate-900' : 'text-white'}`}>
                          ঢাকা শহর
                        </p>
                        <p className={`text-xs ${deliveryArea === 'dhaka' ? 'text-slate-500' : 'text-blue-100'}`}>
                          ২৪-৪৮ ঘণ্টার মধ্যে
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-lg shrink-0 ${deliveryArea === 'dhaka'
                          ? 'bg-blue-50 text-[#0068FF] border border-blue-100'
                          : 'bg-white/20 text-white border border-white/20'
                        }`}
                    >
                      ৳{toBanglaNumber(PRODUCT_INFO.deliveryDhaka)}
                    </span>
                  </button>

                  {/* Option 2: Outside Dhaka */}
                  <button
                    type="button"
                    onClick={() => setDeliveryArea('outside')}
                    className={`text-left p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer relative flex items-center justify-between ${deliveryArea === 'outside'
                        ? 'bg-white text-slate-900 border-white shadow-md ring-3 ring-white/50 scale-[1.01]'
                        : 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-xs'
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${deliveryArea === 'outside'
                            ? 'border-[#0068FF] bg-[#0068FF] text-white'
                            : 'border-white/70 bg-white/15'
                          }`}
                      >
                        {deliveryArea === 'outside' && <FiCheck className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <p className={`text-sm sm:text-base font-bold leading-tight ${deliveryArea === 'outside' ? 'text-slate-900' : 'text-white'}`}>
                          ঢাকার বাইরে
                        </p>
                        <p className={`text-xs ${deliveryArea === 'outside' ? 'text-slate-500' : 'text-blue-100'}`}>
                          সারা বাংলাদেশে
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-lg shrink-0 ${deliveryArea === 'outside'
                          ? 'bg-blue-50 text-[#0068FF] border border-blue-100'
                          : 'bg-white/20 text-white border border-white/20'
                        }`}
                    >
                      ৳{toBanglaNumber(PRODUCT_INFO.deliveryOutside)}
                    </span>
                  </button>

                </div>
              </div>

              {/* Price Calculation Lines - Regular Cut Price & Offer Price */}
              <div className="space-y-2 text-base pt-2.5 border-t border-white/25">
                <div className="flex justify-between items-center text-white font-medium text-sm sm:text-base">
                  <span>পণ্যের অফার মূল্য ({toBanglaNumber(quantity)} পিস)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-blue-200 line-through opacity-85">
                      ৳{toBanglaNumber(regularTotal)}
                    </span>
                    <span className="font-bold text-white text-base sm:text-lg">
                      ৳{toBanglaNumber(itemsTotal)}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-blue-100 text-sm sm:text-base">
                  <span>
                    ডেলিভারি চার্জ ({deliveryArea === 'dhaka' ? 'ঢাকা শহর' : 'ঢাকার বাইরে'})
                  </span>
                  <span className="font-bold text-white">৳{toBanglaNumber(deliveryCharge)}</span>
                </div>

                <div className="pt-2 border-t border-white/25 flex justify-between items-center text-lg sm:text-xl">
                  <span className="font-extrabold text-white">সর্বমোট মূল্য</span>
                  <span className="font-extrabold text-2xl sm:text-3xl text-white leading-none">
                    ৳{toBanglaNumber(grandTotal)}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Bangla Checkout Order Form & Trust Guarantee */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">

              <div className="mb-6 pb-4 border-b border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  ৩. অর্ডার ফর্ম পূরণ করুন
                </h3>
                <p className="text-sm text-slate-500">
                  আপনার ডেলিভারি ঠিকানা ও মোবাইল নম্বর সঠিকভাবে দিন
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Field: Full Name */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="customer-name" className="block text-xs sm:text-base font-bold text-slate-800">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="আপনার নাম লিখুন"
                    className={`w-full px-3.5 sm:px-4.5 py-3 sm:py-3.5 rounded-2xl bg-white border text-sm sm:text-base text-slate-900 placeholder:text-xs sm:placeholder:text-base placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0068FF] transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
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
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="customer-phone" className="block text-xs sm:text-base font-bold text-slate-800">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="আপনার ১১ ডিজিটের মোবাইল নম্বর লিখুন"
                    className={`w-full px-3.5 sm:px-4.5 py-3 sm:py-3.5 rounded-2xl bg-white border text-sm sm:text-base text-slate-900 placeholder:text-xs sm:placeholder:text-base placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0068FF] transition-all ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
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
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="customer-address" className="block text-xs sm:text-base font-bold text-slate-800">
                    সম্পূর্ণ ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    name="address"
                    rows={2}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="জেলা, থানা, রোড নম্বর ও বাসার সম্পূর্ণ ঠিকানা লিখুন"
                    className={`w-full px-3.5 sm:px-4.5 py-3 sm:py-3.5 rounded-2xl bg-white border text-sm sm:text-base text-slate-900 placeholder:text-xs sm:placeholder:text-base placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0068FF] transition-all resize-none ${errors.address ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                      }`}
                  />
                  {errors.address && (
                    <p className="text-xs sm:text-sm text-red-600 flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-4 h-4" />
                      <span>{errors.address}</span>
                    </p>
                  )}
                </div>

                {/* Selected Delivery Area Display (Read-only status from left summary selection, no prices) */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <FiMapPin className="w-4 h-4 text-[#0068FF]" />
                    ডেলিভারি এলাকা:
                  </span>
                  <span className="text-sm font-bold text-[#0068FF] bg-white px-3.5 py-1 rounded-xl border border-blue-200/80 shadow-2xs">
                    {deliveryArea === 'dhaka' ? 'ঢাকা শহর' : 'ঢাকার বাইরে'}
                  </span>
                </div>

                {/* Primary CTA Submit Button (Styled with #0068ff Gradient - Sleeker & Compact) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-blue bg-gradient-blue-hover disabled:opacity-75 disabled:cursor-not-allowed text-white text-sm sm:text-base font-bold py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>অর্ডার সাবমিট হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <FiShoppingBag className="w-5 h-5 text-white shrink-0" />
                      <span>অর্ডার কনফার্ম করুন — ৳{toBanglaNumber(grandTotal)}</span>
                    </>
                  )}
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
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto animate-in fade-in"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-200 relative my-6 sm:my-8 max-h-[calc(100vh-3rem)] overflow-y-auto animate-in zoom-in-95">
            {/* Close Button - Well positioned with comfortable tap area */}
            <button
              type="button"
              onClick={resetOrderModal}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shadow-2xs z-10"
              aria-label="বন্ধ করুন"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Header / Success Message */}
            <div className="text-center space-y-2 pt-1 sm:pt-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-xs border border-emerald-100">
                <FiCheckCircle className="w-9 h-9 sm:w-10 sm:h-10" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                আমাদের কাস্টমার প্রতিনিধি খুব শীঘ্রই আপনার নম্বরে কল করে অর্ডারটি ভেরিফাই করবেন।
              </p>
            </div>

            {/* Customer Details & Order Breakdown Box */}
            <div className="mt-5 space-y-3.5">

              {/* 1. Customer Information Card (Full name, phone, address) */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-200/90 pb-2">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <FiMapPin className="w-4 h-4 text-[#0068FF]" />
                    আপনার দেওয়া ডেলিভারি তথ্য
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-[#0068FF] border border-blue-100">
                    ক্যাশ অন ডেলিভারি
                  </span>
                </div>

                {/* Full Customer Name */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2">
                  <span className="text-slate-500 font-medium shrink-0">নাম:</span>
                  <span className="font-bold text-slate-900 break-words text-left sm:text-right">
                    {submittedOrder.customerName}
                  </span>
                </div>

                {/* Mobile Phone Number */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2">
                  <span className="text-slate-500 font-medium shrink-0">মোবাইল নম্বর:</span>
                  <span className="font-bold text-slate-900 font-latin tracking-wide text-left sm:text-right">
                    {submittedOrder.phoneNumber}
                  </span>
                </div>

                {/* Full Address - Clearly displayed without truncation */}
                <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-200/80">
                  <span className="text-slate-500 font-medium">সম্পূর্ণ ঠিকানা:</span>
                  <div className="font-semibold text-slate-900 text-left bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/90 break-words leading-relaxed text-xs sm:text-sm">
                    {submittedOrder.fullAddress}
                  </div>
                </div>

                {/* Selected Delivery Area */}
                <div className="flex justify-between items-center pt-1 border-t border-slate-200/80">
                  <span className="text-slate-500 font-medium">ডেলিভারি এলাকা:</span>
                  <span className="font-bold text-[#0068FF] bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 shadow-2xs">
                    {submittedOrder.deliveryArea === 'dhaka' ? 'ঢাকা শহর' : 'ঢাকার বাইরে'}
                  </span>
                </div>
              </div>

              {/* 2. Order Summary & Total Card */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">পণ্য:</span>
                  <span className="font-semibold text-slate-900">{PRODUCT_INFO.nameBangla}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-600">নির্বাচিত রঙ:</span>
                  <span className="font-bold text-[#0068FF]">{submittedOrder.selectedColor}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-600">পরিমাণ:</span>
                  <span className="font-semibold text-slate-900">{toBanglaNumber(submittedOrder.quantity)} পিস</span>
                </div>

                <div className="flex justify-between items-center border-t border-blue-200/80 pt-2 text-base sm:text-lg font-bold text-slate-900">
                  <span>সর্বমোট বিল:</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0068FF]">
                    ৳{toBanglaNumber(grandTotal)}
                  </span>
                </div>
              </div>

            </div>

            {/* Confirmation Action Button */}
            <div className="mt-5">
              <button
                type="button"
                onClick={resetOrderModal}
                className="w-full bg-gradient-blue bg-gradient-blue-hover text-white font-bold py-3.5 sm:py-4 rounded-2xl transition-all cursor-pointer text-sm sm:text-base shadow-md hover:shadow-lg active:scale-98"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
