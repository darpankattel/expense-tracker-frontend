'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Camera, 
  PieChart, 
  Shield, 
  Zap, 
  TrendingUp,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recognition',
      description: 'Advanced AWS Textract technology automatically extracts data from receipts, invoices, and documents with 99.9% accuracy.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Camera,
      title: 'Smart Receipt Scanning',
      description: 'Simply snap a photo of your receipt and let our AI handle the rest. Instant categorization and data extraction.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: PieChart,
      title: 'Intelligent Analytics',
      description: 'Get detailed insights into your spending patterns with beautiful charts and personalized recommendations.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with enterprise-grade encryption and AWS security infrastructure.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Lightning-fast processing ensures your expenses are categorized and available instantly.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Budgeting',
      description: 'AI-driven predictions help you plan better and avoid overspending with smart budget alerts.',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
      
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
            <Brain className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Powered by AI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Platform?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of expense tracking with cutting-edge AI technology 
            that makes financial management effortless and intelligent.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={cn(
                "group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20",
                "hover:bg-white/80 hover:shadow-2xl hover:shadow-gray-200/50",
                "transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              )}
            >
              {/* Icon */}
              <div className={cn(
                "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6",
                "bg-gradient-to-r", feature.color,
                "group-hover:scale-110 transition-transform duration-300"
              )}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:hidden",
                "bg-gradient-to-r", feature.color, "opacity-5",
                "transition-opacity duration-300"
              )}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* AWS Textract Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className={cn(
            "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10",
            "backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20",
            "relative overflow-hidden"
          )}>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-50"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                    <Image src="/aws-textract.png" width={60} height={60} alt='AWS Textract Logo' />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AWS Textract Integration</h3>
                    <p className="text-gray-600">Advanced document analysis</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our platform leverages Amazon Textract, AWS&apos;s machine learning service that 
                  automatically extracts text, handwriting, and data from scanned documents. 
                  This ensures maximum accuracy in expense tracking.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">OCR Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">&lt;2s</div>
                    <div className="text-sm text-gray-600">Processing Time</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Placeholder for AWS Textract demo image */}
                <div className={cn(
                  "aspect-square bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/20",
                  "flex items-center justify-center shadow-2xl"
                )}>
                  <div className="text-center">
                    <div className="text-8xl mb-4">🧠</div>
                    <div className="text-gray-700 font-medium">AWS Textract Flow</div>
                    <div className="text-sm text-gray-500 mt-2">
                      Upload receipt → AI processing → extracted data
                    </div>
                  </div>
                </div>

                {/* Animated elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Zap className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}