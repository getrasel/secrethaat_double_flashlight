import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '8801746867350';
  const displayPhone = '+8801746867350';
  const message = 'হ্যালো, আমি ২-ইন-১ ফ্যাশন ফ্যান অ্যালার্ম ক্লক সম্পর্কে বিস্তারিত জানতে ও অর্ডার করতে চাই।';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="হোয়াটসঅ্যাপে যোগাযোগ" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(22,163,74,0.45)] hover:shadow-[0_6px_25px_rgba(22,163,74,0.65)] transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label={`হোয়াটসঅ্যাপে যোগাযোগ করুন: ${displayPhone}`}
      >
        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform group-hover:rotate-12" />

        {/* Live Notification Indicator Pulse */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#16A34A] flex items-center justify-center">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
        </span>
      </a>
    </aside>
  );
};
