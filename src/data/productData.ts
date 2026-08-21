import alarmClockImg from '../assets/images/alarm_clock.jpg';
import tableFanImg from '../assets/images/table_fan.jpg';
import deskClockImg from '../assets/images/desk_clock.jpg';
import clockBacksideImg from '../assets/images/clock_backside.jpg';
import fullboxClockImg from '../assets/images/fullbox_clock.jpg';

import type { ProductColor, GalleryItem, BenefitItem, FeatureSpec, TestimonialItem, FAQItem } from '../types';

export const PRODUCT_INFO = {
  name: '2-in-1 Fashion Fan Alarm Clock',
  nameBangla: '২-ইন-১ ফ্যাশন ফ্যান অ্যালার্ম ক্লক',
  tagline: 'ঘড়ি ও মিনি ফ্যান—দুই সুবিধা একসাথে!',
  subTagline: 'কিউট অ্যাস্ট্রোনট ডিজাইন, 500mAh রিচার্জেবল সাইলেন্ট ফ্যান এবং নিখুঁত অ্যালার্ম ঘড়ি নিয়ে আপনার পড়ার বা কাজের টেবিলকে করুন আরও আকর্ষণীয় ও আরামদায়ক।',
  regularPrice: 1100,
  basePrice: 890,
  discountAmount: 210,
  discountPercentage: 19,
  deliveryDhaka: 70,
  deliveryOutside: 130,
};

export const COLOR_VARIANTS: ProductColor[] = [
  {
    id: 'pink',
    name: 'সুইট পিংক',
    nameEn: 'Sweet Pink',
    hex: '#F472B6',
    badgeBg: 'bg-pink-100 text-pink-700 border-pink-200',
    image: deskClockImg,
  },
  {
    id: 'blue',
    name: 'স্কাই ব্লু',
    nameEn: 'Sky Blue',
    hex: '#38BDF8',
    badgeBg: 'bg-sky-100 text-sky-700 border-sky-200',
    image: alarmClockImg,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'স্কাই ব্লু কমপ্লিট লুক',
    caption: 'ঘড়ি ও ফ্যানের আকর্ষণীয় কম্বিনেশন',
    image: alarmClockImg,
    category: 'মেইন লুক',
  },
  {
    id: '2',
    title: 'টেবিল ফ্যান মোড',
    caption: 'গরমের দিনে পড়াশোনা ও কাজের সময় নীরব বাতাস',
    image: tableFanImg,
    category: 'ফ্যান ভিউ',
  },
  {
    id: '3',
    title: 'সুইট পিংক ডেস্ক ভিউ',
    caption: 'পড়ার টেবিল ও অফিস ডেস্কে চমৎকার মানানসই',
    image: deskClockImg,
    category: 'ডেস্ক ডেকোর',
  },
  {
    id: '4',
    title: 'রিয়ার কন্ট্রোল ও ব্যাটারি পোর্ট',
    caption: 'সহজ টাইম অ্যাডজাস্টমেন্ট ও AA ব্যাটারি স্লট',
    image: clockBacksideImg,
    category: 'কন্ট্রোল প্যানেল',
  },
  {
    id: '5',
    title: 'প্রিমিয়াম বক্স প্যাকেজিং',
    caption: 'নিরাপদ প্যাকেজিংসহ উপহারের জন্য সেরা পছন্দ',
    image: fullboxClockImg,
    category: 'প্যাকেজিং',
  },
];

export const PRODUCT_BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: '২-ইন-১ সুবিধা',
    description: 'ঘড়ি ও মিনি ফ্যান একসাথে। একটি গ্যাজেটেই সময় দেখা, অ্যালার্ম সেট করা এবং গরমের দিনে শীতল বাতাস উপভোগ করা যায়।',
    iconName: 'dual',
    tag: 'মাল্টিফাংশনাল',
  },
  {
    id: 2,
    title: 'রিচার্জেবল ফ্যান (500mAh)',
    description: 'ফ্যানে রয়েছে 500mAh রিচার্জেবল ব্যাটারি। USB ক্যাবল ব্যবহার করে পাওয়ার ব্যাংক, ল্যাপটপ বা USB পোর্ট থেকে সহজে চার্জ দেওয়া সম্ভব।',
    iconName: 'battery',
    tag: 'USB চার্জিং',
  },
  {
    id: 3,
    title: 'সাইলেন্ট এয়ারফ্লো',
    description: 'ফ্যান চলার সময় কোনো বিরক্তিকর শব্দ তৈরি করে না। তাই পড়াশোনা, কাজ বা অফিসের সময় একাগ্রতা নষ্ট না করে শান্তিতে ব্যবহার করা যায়।',
    iconName: 'wind',
    tag: 'শব্দহীন বাতাস',
  },
  {
    id: 4,
    title: 'সহজ ব্যাটারি সিস্টেম',
    description: 'ঘড়ি ও অ্যালার্ম নির্বিঘ্নে দীর্ঘ সময় পরিচালনার জন্য প্রয়োজন মাত্র ১টি সাধারণ AA 1.5V ব্যাটারি।',
    iconName: 'clock',
    tag: '১টি AA 1.5V',
  },
  {
    id: 5,
    title: 'কিউট অ্যাস্ট্রোনট ডিজাইন',
    description: 'কিউট অ্যাস্ট্রোনট/কার্টুন ডিজাইনটি পড়ার টেবিল, অফিস ডেস্ক বা বেডসাইড টেবিলে দারুণ সৌন্দর্য বাড়ায়। শিশুদের স্টাডি স্পেসও করে তোলে আকর্ষণীয়।',
    iconName: 'sparkles',
    tag: 'ইউনিক লুক',
  },
  {
    id: 6,
    title: 'গিফট হিসেবেও উপযোগী',
    description: 'ইউনিক ও প্রয়োজনীয় ডিজাইনের কারণে এটি প্রিয়জন, বন্ধু বা পরিবারের শিশুদের জন্য একটি সুন্দর ও প্রশংসনীয় উপহার হতে পারে।',
    iconName: 'gift',
    tag: 'পারফেক্ট উপহার',
  },
];

export const PRODUCT_SPECS: FeatureSpec[] = [
  { label: 'পণ্যের নাম', value: '2-in-1 Fashion Fan Alarm Clock', icon: 'tag', highlight: true },
  { label: 'পণ্যের ধরন', value: 'অ্যালার্ম ক্লক + মিনি ফ্যান', icon: 'layers', highlight: true },
  { label: 'ফ্যান ব্যাটারি', value: '500mAh রিচার্জেবল ব্যাটারি', icon: 'battery-charging', highlight: true },
  { label: 'চার্জিং সিস্টেম', value: 'USB কেবল চার্জিং সাপোর্ট', icon: 'zap' },
  { label: 'ফ্যান মোড', value: 'Silent Airflow (শব্দহীন বাতাস)', icon: 'wind' },
  { label: 'ঘড়ির ব্যাটারি', value: '১টি AA 1.5V ব্যাটারি', icon: 'clock' },
  { label: 'ডিজাইন থিম', value: 'কিউট অ্যাস্ট্রোনট / কার্টুন ডিজাইন', icon: 'smile' },
  { label: 'উপযুক্ত স্থান', value: 'পড়ার টেবিল, অফিস ডেস্ক, বেডসাইড টেবিল, বাচ্চাদের স্টাডি টেবিল', icon: 'home' },
  { label: 'প্যাকেজে যা থাকছে', value: '১টি ২-ইন-১ অ্যালার্ম ক্লক ও ফ্যান, ১টি USB চার্জিং ক্যাবল', icon: 'box' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'ফারহানা ইসলাম',
    location: 'মিরপুর, ঢাকা',
    rating: 5,
    date: '৩ দিন আগে',
    comment: 'পড়ার টেবিলের জন্য নিয়েছিলাম। দেখতে অসম্ভব কিউট এবং ফ্যানের বাতাস খুব আরামদায়ক। পড়ার সময় কোনো শব্দ হয় না, এটা সবথেকে ভালো লেগেছে।',
    colorPurchased: 'সুইট পিংক (Sweet Pink)',
    avatarColor: 'bg-rose-100 text-rose-700',
  },
  {
    id: 't2',
    name: 'তানভীর আহমেদ',
    location: 'উত্তরা, ঢাকা',
    rating: 5,
    date: '১ সপ্তাহ আগে',
    comment: 'আমার অফিস ডেস্কের জন্য কিনেছি। এক গ্যাজেটেই টাইম দেখা, অ্যালার্ম এবং কাজের মাঝে একটু বাতাস খাওয়ার সুবিধা পাওয়া সত্যিই চমৎকার!',
    colorPurchased: 'স্কাই ব্লু (Sky Blue)',
    avatarColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 't3',
    name: 'নুসরাত জাহান',
    location: 'জিইসি, চট্টগ্রাম',
    rating: 5,
    date: '২ সপ্তাহ আগে',
    comment: 'আমার ছোট ভাইয়ের বার্থডে গিফট হিসেবে দিয়েছিলাম। ও অ্যাস্ট্রোনট ডিজাইন দেখে ভীষণ খুশি হয়েছে। কোয়ালিটি বেশ ভালো।',
    colorPurchased: 'স্কাই ব্লু (Sky Blue)',
    avatarColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 't4',
    name: 'মাহমুদুল হাসান',
    location: 'ধানমন্ডি, ঢাকা',
    rating: 5,
    date: '২ সপ্তাহ আগে',
    comment: 'USB দিয়ে সহজেই চার্জ দেওয়া যায় এবং ঘড়ির অ্যালার্ম সাউন্ড যথেষ্ট স্পষ্ট। প্যাকেজিংও সুন্দর ছিল। ধন্যবাদ!',
    colorPurchased: 'সুইট পিংক (Sweet Pink)',
    avatarColor: 'bg-zinc-100 text-zinc-700',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'এটি কি ঘড়ি এবং ফ্যান দুটোই?',
    answer: 'হ্যাঁ, এটি একটি ২-ইন-১ অ্যালার্ম ক্লক ও মিনি ফ্যান। আপনি একই ডিভাইসে সময় দেখা, অ্যালার্ম সেট করা এবং বাতাস উপভোগ করতে পারবেন।',
  },
  {
    id: 'faq2',
    question: 'ফ্যানটি কীভাবে চার্জ করতে হয়?',
    answer: 'USB ক্যাবলের মাধ্যমে ফ্যানটি খুব সহজেই চার্জ করা যায়। ল্যাপটপ, পাওয়ার ব্যাংক বা যেকোনো USB অ্যাডাপ্টার দিয়ে চার্জ দিতে পারবেন।',
  },
  {
    id: 'faq3',
    question: 'ফ্যানের ব্যাটারি কত?',
    answer: 'ফ্যানে রয়েছে 500mAh রিচার্জেবল ব্যাটারি, যা নিরবচ্ছিন্নভাবে সুন্দর বাতাস সরবরাহ করে।',
  },
  {
    id: 'faq4',
    question: 'ফ্যানটি কি বেশি শব্দ করে?',
    answer: 'না, এটি Silent Airflow প্রযুক্তিতে তৈরি, তাই চলার সময় বিরক্তিকর কোনো শব্দ হয় না। পড়াশোনা বা কাজের সময় অনায়াসে ব্যবহার করা যায়।',
  },
  {
    id: 'faq5',
    question: 'ঘড়ির জন্য কী ব্যাটারি লাগে?',
    answer: 'ঘড়িটি পরিচালনার জন্য মাত্র ১টি সাধারণ AA 1.5V ব্যাটারি প্রয়োজন হয়।',
  },
  {
    id: 'faq6',
    question: 'ঢাকার ভিতরে ডেলিভারি চার্জ কত?',
    answer: 'ঢাকার ভিতরে হোম ডেলিভারি চার্জ মাত্র ৳৭০। সাধারণত ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি সম্পন্ন হয়।',
  },
  {
    id: 'faq7',
    question: 'ঢাকার বাইরে ডেলিভারি চার্জ কত?',
    answer: 'ঢাকার বাইরে সারা বাংলাদেশে হোম ডেলিভারি চার্জ ৳১৩০। ২ থেকে ৩ কার্যদিবসের মধ্যে কুরিয়ারের মাধ্যমে পৌঁছে দেওয়া হয়।',
  },
  {
    id: 'faq8',
    question: 'প্যাকেজে কী কী থাকবে?',
    answer: 'প্যাকেজে থাকবে ১টি ২-ইন-১ অ্যালার্ম ক্লক ও ফ্যান এবং ১টি USB চার্জিং ক্যাবল।',
  },
];

// Helper to convert English numbers to Bangla digits
export const toBanglaNumber = (num: number | string): string => {
  const banglaDigits: { [key: string]: string } = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
  };
  return String(num).replace(/[0-9]/g, (match) => banglaDigits[match] || match);
};
