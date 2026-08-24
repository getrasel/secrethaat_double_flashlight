import cartoonClockImg from '../assets/images/3inone_table_lamp/cartoon_clock.jpg';
import tableClockImg from '../assets/images/3inone_table_lamp/table_clock.jpg';
import tableClockHolderImg from '../assets/images/3inone_table_lamp/table_clock_holder.jpg';
import timeLightImg from '../assets/images/3inone_table_lamp/time_light.jpg';

import type { ProductColor, GalleryItem, BenefitItem, FeatureSpec, TestimonialItem, FAQItem } from '../types';

export const PRODUCT_INFO = {
  name: '3-in-1 Cute Cartoon Theme Table Lamp',
  nameBangla: '৩-ইন-১ কিউট কার্টুন থিম টেবিল ল্যাম্প',
  tagline: 'আপনার টেবিলকে রাখুন সুন্দর ও গোছানো।',
  subTagline: 'পড়ার টেবিল বা ঘরের কর্নারকে আরও সুন্দর ও গোছানো রাখতে নিয়ে এলাম ৩-ইন-১ কিউট কার্টুন থিম টেবিল ল্যাম্প—ল্যাম্প, ঘড়ি ও পেন হোল্ডার একসাথে।',
  regularPrice: 1190,
  basePrice: 990,
  discountAmount: 200,
  discountPercentage: 17,
  deliveryDhaka: 70,
  deliveryOutside: 130,
};

export const COLOR_VARIANTS: ProductColor[] = [
  {
    id: 'yellow',
    name: 'কিউট ইয়েলো',
    nameEn: 'Cute Yellow',
    hex: '#FBBF24',
    badgeBg: 'bg-amber-100 text-amber-700 border-amber-200',
    image: tableClockImg,
  },
  {
    id: 'orange',
    name: 'কিউট অরেঞ্জ',
    nameEn: 'Cute Orange',
    hex: '#FB923C',
    badgeBg: 'bg-orange-100 text-orange-700 border-orange-200',
    image: timeLightImg,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: '৩-ইন-১ কমপ্লিট লুক',
    caption: 'টেবিল ল্যাম্প + অ্যানালগ ঘড়ি + পেন হোল্ডার',
    image: tableClockHolderImg,
    category: 'মেইন লুক',
  },
  {
    id: '2',
    title: 'কিউট ইয়েলো বিয়ার মোড',
    caption: 'Moon Shape Flexible LED Light সহ চমৎকার স্টাডি ভিউ',
    image: tableClockImg,
    category: 'টেবিল ল্যাম্প',
  },
  {
    id: '3',
    title: 'কিউট অরেঞ্জ কার্টুন মোড',
    caption: 'রাতে পড়ার টেবিল ও বেডসাইডে ব্যবহারের উপযোগী',
    image: timeLightImg,
    category: 'নাইট লাইট',
  },
  {
    id: '4',
    title: 'প্রিমিয়াম বক্স প্যাকেজিং',
    caption: 'নিরাপদ প্যাকেজিংসহ প্রিয়জনকে উপহার দেওয়ার সেরা পছন্দ',
    image: cartoonClockImg,
    category: 'প্যাকেজিং',
  },
];

export const PRODUCT_BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: 'নমনীয় LED লাইট',
    description: 'ওপরের দিকে রয়েছে চাঁদ আকৃতির (Moon Shape) ফ্লেক্সিবল LED ল্যাম্প, যা রাতে পড়ার টেবিল বা নাইট স্ট্যান্ডে ব্যবহারের জন্য দারুণ উপযোগী।',
    iconName: 'lamp',
    tag: 'Moon Shape LED',
  },
  {
    id: 2,
    title: 'অ্যানালগ ঘড়ি',
    description: 'সামনে রয়েছে স্পষ্ট সংখ্যাযুক্ত Quartz ব্যাটারি চালিত অ্যানালগ ঘড়ি, যা একই সঙ্গে সময় দেখার সুবিধা ও সৌন্দর্য দুটোই যোগ করে।',
    iconName: 'clock',
    tag: 'Quartz ঘড়ি',
  },
  {
    id: 3,
    title: 'পেন হোল্ডার',
    description: 'ঘড়ির পাশেই রয়েছে একটি সুন্দর পেন/পেন্সিল হোল্ডার, যেখানে কলম, পেন্সিল ও ছোটখাটো জিনিস গুছিয়ে রাখা যায়।',
    iconName: 'holder',
    tag: 'পেন হোল্ডার',
  },
  {
    id: 4,
    title: '৩-ইন-১ মাল্টিফাংশনাল ব্যবহার',
    description: 'একটি পণ্যেই পাওয়া যাচ্ছে: টেবিল ল্যাম্প + অ্যানালগ ঘড়ি + পেন হোল্ডার। ফলে এটি একই সঙ্গে ব্যবহারিক এবং ডেকোরেশন—দুই কাজেই উপযোগী।',
    iconName: 'multipurpose',
    tag: '৩-ইন-১ সুবিধা',
  },
  {
    id: 5,
    title: 'পড়ার টেবিল ও ঘর সাজাতে উপযোগী',
    description: 'বাচ্চাদের পড়াশোনার টেবিল, নাইট স্ট্যান্ড কিংবা ঘরের কর্নারকে আরও সুন্দর ও গোছানো করে তুলতে এটি চমৎকার একটি সংযোজন।',
    iconName: 'home',
    tag: 'ডেস্ক ডেকোর',
  },
  {
    id: 6,
    title: 'সুন্দর গিফট আইডিয়া',
    description: 'এর কিউট ডিজাইন ও ব্যবহারিক সুবিধার কারণে এটি প্রিয়জন, শিশু বা পরিবারের সদস্যদের জন্য একটি আকর্ষণীয় উপহার হতে পারে।',
    iconName: 'gift',
    tag: 'সেরা উপহার',
  },
];

export const PRODUCT_SPECS: FeatureSpec[] = [
  { label: 'পণ্যের নাম', value: '3-in-1 Cute Cartoon Theme Table Lamp', icon: 'tag', highlight: true },
  { label: 'পণ্যের ধরন', value: '৩-ইন-১ মাল্টিফাংশনাল টেবিল ল্যাম্প', icon: 'layers', highlight: true },
  { label: 'প্রধান সুবিধা', value: 'LED ল্যাম্প + অ্যানালগ ঘড়ি + পেন হোল্ডার', icon: 'star', highlight: true },
  { label: 'ল্যাম্প টাইপ', value: 'Moon Shape Flexible LED Light', icon: 'zap' },
  { label: 'ঘড়ির ধরন', value: 'Quartz Battery Powered Analog Clock', icon: 'clock' },
  { label: 'ডিজাইন থিম', value: 'Cute Bear / Rabbit Cartoon Theme', icon: 'smile' },
  { label: 'পেন হোল্ডার', value: 'পেন, পেন্সিল ও ছোটখাটো জিনিস রাখার সুবিধা', icon: 'box' },
  { label: 'উপযুক্ত স্থান', value: 'বাচ্চাদের পড়ার টেবিল, নাইট স্ট্যান্ড, ঘরের কর্নার, ডেস্ক ডেকোরেশন, গিফট', icon: 'home' },
  { label: 'প্যাকেজে যা থাকছে', value: '১টি ৩-ইন-১ কিউট কার্টুন থিম টেবিল ল্যাম্প', icon: 'box' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'ফারহানা ইসলাম',
    location: 'মিরপুর, ঢাকা',
    rating: 5,
    date: '৩ দিন আগে',
    comment: 'বাচ্চার পড়ার টেবিলের জন্য নিয়েছিলাম। দেখতে দারুণ কিউট এবং ওপরের চাঁদের মতো LED লাইটের আলো পড়ার জন্য খুব সুন্দর। পেন হোল্ডারে কলমগুলোও সাজিয়ে রাখা যায়।',
    colorPurchased: 'কিউট ইয়েলো (Cute Yellow)',
    avatarColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 't2',
    name: 'তানভীর আহমেদ',
    location: 'উত্তরা, ঢাকা',
    rating: 5,
    date: '১ সপ্তাহ আগে',
    comment: 'এক গ্যাজেটেই টেবিল ল্যাম্প, ঘড়ি আর পেন হোল্ডার—এই আইডিয়াটা দারুণ! কোয়ালিটি যথেষ্ট প্রিমিয়াম এবং টেবিল খুব পরিপাটি দেখায়।',
    colorPurchased: 'কিউট অরেঞ্জ (Cute Orange)',
    avatarColor: 'bg-orange-100 text-orange-700',
  },
  {
    id: 't3',
    name: 'নুসরাত জাহান',
    location: 'জিইসি, চট্টগ্রাম',
    rating: 5,
    date: '২ সপ্তাহ আগে',
    comment: 'আমার ছোট ভাগ্নির জন্মদিনে গিফট দিয়েছিলাম। ও কার্টুন ডিজাইন আর লাইট দেখে ভীষণ আনন্দ পেয়েছে। উপহার দেওয়ার জন্য সেরা একটি জিনিস।',
    colorPurchased: 'কিউট ইয়েলো (Cute Yellow)',
    avatarColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 't4',
    name: 'মাহমুদুল হাসান',
    location: 'ধানমন্ডি, ঢাকা',
    rating: 5,
    date: '২ সপ্তাহ আগে',
    comment: 'অ্যানালগ ঘড়িটি একদম নিখুঁত সময় দেয় এবং ফ্লেক্সিবল LED ল্যাম্পটি ইচ্ছামতো অ্যাডজাস্ট করা যায়। প্যাকেজিংও অনেক ভালো ছিল। ধন্যবাদ!',
    colorPurchased: 'কিউট অরেঞ্জ (Cute Orange)',
    avatarColor: 'bg-zinc-100 text-zinc-700',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'এটি কি ৩-ইন-১ পণ্য?',
    answer: 'হ্যাঁ। এতে টেবিল ল্যাম্প, অ্যানালগ ঘড়ি এবং পেন হোল্ডার—এই তিনটি সুবিধা একসাথে রয়েছে।',
  },
  {
    id: 'faq2',
    question: 'ল্যাম্পটি কেমন?',
    answer: 'এতে চাঁদ আকৃতির (Moon Shape) ফ্লেক্সিবল LED ল্যাম্প রয়েছে, যা সহজে যেকোনো দিকে ঘুরিয়ে রাতে পড়াশোনা বা বেডসাইডে ব্যবহার করা যায়।',
  },
  {
    id: 'faq3',
    question: 'এতে কি ঘড়ি আছে?',
    answer: 'হ্যাঁ, সামনে স্পষ্ট সংখ্যাযুক্ত একটি Quartz ব্যাটারি চালিত অ্যানালগ ঘড়ি রয়েছে।',
  },
  {
    id: 'faq4',
    question: 'পেন রাখা যাবে কি?',
    answer: 'হ্যাঁ, ঘড়ির পাশেই রয়েছে একটি সুন্দর পেন হোল্ডার, যেখানে কলম, পেন্সিল ও ছোটখাটো জিনিস গুছিয়ে রাখা যায়।',
  },
  {
    id: 'faq5',
    question: 'কোথায় ব্যবহার করা যায়?',
    answer: 'বাচ্চাদের পড়ার টেবিল, নাইট স্ট্যান্ড, অফিস ডেস্ক কিংবা ঘরের যেকোনো কর্নারে ডেকোরেশন ও ব্যবহারের জন্য দারুণ উপযোগী।',
  },
  {
    id: 'faq6',
    question: 'এটি কি গিফট হিসেবে দেওয়া যায়?',
    answer: 'হ্যাঁ, এর কিউট কার্টুন ডিজাইন ও ব্যবহারিক সুবিধার কারণে এটি শিশু, প্রিয়জন বা পরিবারের সদস্যদের জন্য আকর্ষণীয় একটি উপহার।',
  },
  {
    id: 'faq7',
    question: 'ঢাকার ভিতরে ও বাইরে ডেলিভারি চার্জ কত?',
    answer: 'ঢাকার ভিতরে হোম ডেলিভারি চার্জ মাত্র ৳৭০ এবং ঢাকার বাইরে সারা বাংলাদেশে ৳১৩০। ক্যাশ অন ডেলিভারিতে পণ্য দেখে মূল্য পরিশোধ করতে পারবেন।',
  },
  {
    id: 'faq8',
    question: 'প্যাকেজে কী কী থাকবে?',
    answer: 'প্যাকেজে থাকবে ১টি ৩-ইন-১ কিউট কার্টুন থিম টেবিল ল্যাম্প (Moon Shape LED লাইট, অ্যানালগ ঘড়ি ও পেন হোল্ডারসহ) ও সুরক্ষিত বক্স প্যাকেজিং।',
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
