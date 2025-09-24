'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, Users } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">About ExpenseTracker</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Built with{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                AWS
              </span>{' '}
              Serverless Architecture
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ExpenseTracker is a modern, serverless web application that demonstrates the power of AWS cloud services. 
              Built as an architecture practice project, it showcases event-driven processing, AI-powered text extraction, 
              and scalable serverless design patterns.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className={cn(
              "bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20",
              "hover:bg-white/80 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            )}>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Serverless</h3>
              <p className="text-gray-600">No servers to manage, automatic scaling, and pay-per-use pricing</p>
            </div>

            <div className={cn(
              "bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20",
              "hover:bg-white/80 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            )}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">AWS Textract for intelligent document processing and data extraction</p>
            </div>

            <div className={cn(
              "bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20",
              "hover:bg-white/80 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            )}>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Event-Driven</h3>
              <p className="text-gray-600">Reactive architecture that processes events in real-time</p>
            </div>
          </motion.div>

          {/* Project Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className={cn(
              "bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50",
              "text-center"
            )}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AWS Architecture Practice Project</h3>
              <p className="text-gray-700 leading-relaxed">
                This project serves as a comprehensive demonstration of modern serverless architecture patterns, 
                showcasing how various AWS services can work together to create scalable, efficient, and 
                cost-effective applications. Every component is designed with cloud-native principles in mind.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}