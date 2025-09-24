'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Database, 
  FileText, 
  Smartphone, 
  BarChart3,
  Cloud,
  Lock
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function AboutFeatures() {
  const features = [
    {
      icon: Zap,
      title: 'Serverless Computing',
      description: 'AWS Lambda functions handle all business logic without server management, scaling automatically based on demand.',
      color: 'from-yellow-500 to-orange-500',
      category: 'Compute'
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Amazon Cognito provides enterprise-grade user authentication, authorization, and user management.',
      color: 'from-green-500 to-emerald-500',
      category: 'Security'
    },
    {
      icon: Database,
      title: 'Scalable Storage',
      description: 'DynamoDB and S3 work together to handle both structured data and file storage with automatic scaling.',
      color: 'from-blue-500 to-cyan-500',
      category: 'Storage'
    },
    {
      icon: FileText,
      title: 'AI Text Extraction',
      description: 'Amazon Textract automatically extracts text and data from receipts and documents with high accuracy.',
      color: 'from-purple-500 to-pink-500',
      category: 'AI/ML'
    },
    {
      icon: Cloud,
      title: 'API Gateway',
      description: 'Centralized API management with request routing, throttling, and monitoring capabilities.',
      color: 'from-indigo-500 to-blue-500',
      category: 'API'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Event-driven architecture enables real-time processing and analytics of expense data.',
      color: 'from-teal-500 to-green-500',
      category: 'Analytics'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Core{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built using cutting-edge AWS services and modern development practices to ensure 
            scalability, security, and optimal performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20",
                "hover:bg-white/80 hover:shadow-2xl hover:shadow-gray-200/50",
                "transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              )}
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {feature.category}
                </span>
              </div>

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

              {/* Hover effect overlay */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
                "bg-gradient-to-r", feature.color, "opacity-5",
                "transition-opacity duration-300"
              )}></div>
            </motion.div>
          ))}
        </div>

        {/* AWS Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className={cn(
            "bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10",
            "backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20",
            "relative overflow-hidden"
          )}>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why AWS Serverless?</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl mb-3">💰</div>
                  <h4 className="font-bold text-gray-900 mb-2">Cost Efficient</h4>
                  <p className="text-gray-600">Pay only for what you use with automatic scaling</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-bold text-gray-900 mb-2">High Performance</h4>
                  <p className="text-gray-600">Sub-second response times with global distribution</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">🔒</div>
                  <h4 className="font-bold text-gray-900 mb-2">Enterprise Security</h4>
                  <p className="text-gray-600">Built-in security controls and compliance features</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                This architecture demonstrates how serverless technologies can reduce operational overhead 
                while maintaining high availability, security, and scalability for modern web applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}