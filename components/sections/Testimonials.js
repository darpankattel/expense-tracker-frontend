'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      company: 'Johnson & Co.',
      image: '👩‍💼',
      rating: 5,
      text: 'ExpenseTracker has revolutionized how I manage my business expenses. The AI-powered receipt scanning is incredibly accurate, and I save hours every month on bookkeeping.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Freelance Designer',
      company: 'Creative Studio',
      image: '👨‍🎨',
      rating: 5,
      text: 'The AWS Textract integration is phenomenal! I can snap a photo of any receipt and it instantly categorizes everything perfectly. Best expense app I\'ve ever used.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'TechCorp Inc.',
      image: '👩‍💻',
      rating: 5,
      text: 'The predictive budgeting feature helped me reduce unnecessary expenses by 30%. The insights are incredibly detailed and actionable. Highly recommended!',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Consultant',
      company: 'Thompson Consulting',
      image: '👨‍💼',
      rating: 5,
      text: 'I travel frequently for work, and ExpenseTracker makes managing receipts effortless. The mobile app is intuitive and the real-time sync is perfect.',
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Restaurant Owner',
      company: 'Park\'s Bistro',
      image: '👩‍🍳',
      rating: 5,
      text: 'Managing expenses for my restaurant used to be a nightmare. Now with AI categorization, everything is automated and accurate. It\'s like having a personal accountant!',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-blue-50/30">
        {/* Animated background shapes */}
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-200/50">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ Users</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their expense tracking experience 
            with our AI-powered platform.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "bg-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20",
                  "shadow-2xl hover:shadow-3xl transition-shadow duration-500 min-h-[350px]"
                )}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                      {testimonials[currentIndex].image}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Quote icon */}
                    <Quote className="h-8 w-8 text-blue-500/30 mb-4 mx-auto lg:mx-0" />
                    
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Author info */}
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className={cn(
                "p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/20",
                "hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110",
                "text-gray-600 hover:text-blue-600 cursor-pointer"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
                  )}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className={cn(
                "p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/20",
                "hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110",
                "text-gray-600 hover:text-blue-600 cursor-pointer"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200/50"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">10k+</div>
            <div className="text-sm text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50k+</div>
            <div className="text-sm text-gray-600">Receipts Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}