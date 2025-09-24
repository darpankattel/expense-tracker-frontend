'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Shield, 
  Zap, 
  Database, 
  FileText, 
  Cloud,
  Smartphone,
  ArrowRight,
  Play,
  Info,
  CheckCircle,
  Globe
} from 'lucide-react';
import { cn } from '../../lib/utils';
import Image from 'next/image';

export default function ArchitectureSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [showFlow, setShowFlow] = useState(false);
  const dataFlowRef = useRef(null);

  const services = [
    {
      id: 'amplify',
      name: 'AWS Amplify',
      icon: Globe,
      description: 'Hosts the React frontend with CI/CD pipeline and global content delivery',
      role: 'Frontend Hosting',
      color: 'from-orange-500 to-red-500',
      position: { top: '10%', left: '10%' },
      details: {
        purpose: 'Static web hosting with global CDN',
        features: ['Automatic deployments', 'Global CDN', 'Custom domains', 'SSL certificates'],
        integration: 'Serves the React frontend and connects to API Gateway'
      }
    },
    {
      id: 'cognito',
      name: 'Amazon Cognito',
      icon: Shield,
      description: 'Manages user authentication, authorization, and user pool management',
      role: 'Authentication',
      color: 'from-green-500 to-emerald-500',
      position: { top: '15%', left: '45%' },
      details: {
        purpose: 'User authentication and authorization',
        features: ['User sign-up/sign-in', 'MFA support', 'Social login', 'JWT tokens'],
        integration: 'Authenticates users and provides tokens for API Gateway'
      }
    },
    {
      id: 'apigateway',
      name: 'API Gateway',
      icon: Cloud,
      description: 'Central API management with request routing, throttling, and monitoring',
      role: 'API Management',
      color: 'from-blue-500 to-cyan-500',
      position: { top: '35%', left: '45%' },
      details: {
        purpose: 'API endpoint management and routing',
        features: ['Request routing', 'Rate limiting', 'CORS handling', 'Request validation'],
        integration: 'Routes authenticated requests to appropriate Lambda functions'
      }
    },
    {
      id: 'lambda',
      name: 'AWS Lambda',
      icon: Zap,
      description: 'Serverless compute functions handling all business logic and processing',
      role: 'Business Logic',
      color: 'from-yellow-500 to-orange-500',
      position: { top: '55%', left: '45%' },
      details: {
        purpose: 'Serverless compute for business logic',
        features: ['Auto-scaling', 'Pay-per-request', 'Multiple runtimes', 'Event triggers'],
        integration: 'Processes API requests and triggers from S3/DynamoDB events'
      }
    },
    {
      id: 's3',
      name: 'Amazon S3',
      icon: Database,
      description: 'Object storage for receipts, documents, and static assets with event triggers',
      role: 'File Storage',
      color: 'from-green-600 to-teal-500',
      position: { top: '55%', left: '15%' },
      details: {
        purpose: 'Object storage with event notifications',
        features: ['Unlimited storage', 'Event triggers', '99.999999999% durability', 'Lifecycle policies'],
        integration: 'Stores uploaded files and triggers Lambda functions on upload'
      }
    },
    {
      id: 'dynamodb',
      name: 'Amazon DynamoDB',
      icon: Database,
      description: 'NoSQL database storing expense metadata, user data, and application state',
      role: 'Database',
      color: 'from-indigo-500 to-purple-500',
      position: { top: '55%', left: '75%' },
      details: {
        purpose: 'NoSQL database for structured data',
        features: ['Single-digit millisecond latency', 'Auto-scaling', 'Global tables', 'Point-in-time recovery'],
        integration: 'Stores expense data, user preferences, and metadata from Textract'
      }
    },
    {
      id: 'textract',
      name: 'Amazon Textract',
      icon: FileText,
      description: 'AI-powered text extraction from receipts and documents',
      role: 'AI Processing',
      color: 'from-purple-500 to-pink-500',
      position: { top: '75%', left: '30%' },
      details: {
        purpose: 'AI-powered document analysis',
        features: ['OCR text extraction', 'Form data extraction', 'Table detection', 'Key-value pairs'],
        integration: 'Processes uploaded documents and extracts expense data'
      }
    }
  ];

  const dataFlow = [
    { from: 'User', to: 'Amplify', description: 'Accesses web app' },
    { from: 'Amplify', to: 'Cognito', description: 'Authentication request' },
    { from: 'Cognito', to: 'API Gateway', description: 'JWT token validation' },
    { from: 'API Gateway', to: 'Lambda', description: 'Authenticated API calls' },
    { from: 'Lambda', to: 'S3', description: 'File upload/retrieval' },
    { from: 'S3', to: 'Lambda', description: 'Event trigger on upload' },
    { from: 'Lambda', to: 'Textract', description: 'Document processing' },
    { from: 'Lambda', to: 'DynamoDB', description: 'Data storage/retrieval' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">AWS</span>
            </div>
            <span className="text-sm font-medium text-orange-800">Serverless Architecture</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            System{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive serverless architecture demonstrating event-driven processing, 
            AI integration, and scalable cloud-native design patterns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setShowFlow(!showFlow);
                // scrolldown to data flow section with 2rem margin at top
                if (!showFlow && dataFlowRef.current) {
                    setTimeout(() => {
                        dataFlowRef.current.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
                }}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer",
                "flex items-center gap-2 transform hover:scale-105",
                showFlow 
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
              )}
            >
              <Play className="h-4 w-4" />
              {showFlow ? 'Hide' : 'Show'} Data Flow
            </button>
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Main Architecture Image Placeholder */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
            <div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-orange-200">
                <Image src="/architecture/main.png" alt="AWS Architecture Diagram" width={960} height={540} className="rounded-2xl mx-auto" />
            </div>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                className={cn(
                  "group cursor-pointer bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20",
                  "hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105",
                  "hover:border-orange-300/50"
                )}
              >
                {/* Service Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-xl mb-4 flex items-center justify-center",
                  "bg-gradient-to-r", service.color,
                  "group-hover:scale-110 transition-transform duration-300"
                )}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                {/* Service Info */}
                <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                    {service.role}
                  </span>
                  <Info className="h-4 w-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Flow Animation */}
        <div ref={dataFlowRef}></div>
        <AnimatePresence>
          {showFlow && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request Flow</h3>
                <div className="grid gap-4">
                  {dataFlow.map((flow, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl"
                    >
                      <div className="font-medium text-gray-800 min-w-[100px]">{flow.from}</div>
                      <ArrowRight className="h-4 w-4 text-orange-500" />
                      <div className="font-medium text-gray-800 min-w-[120px]">{flow.to}</div>
                      <div className="text-sm text-gray-600 flex-1">{flow.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Architecture Benefits */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Architecture
            </span>
            {" "} Benefits
        </h3>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Event-Driven</h3>
            <p className="text-gray-600">
              Reactive architecture that automatically processes uploads and triggers workflows based on events.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Auto-Scaling</h3>
            <p className="text-gray-600">
              All services automatically scale based on demand without manual intervention or capacity planning.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure by Design</h3>
            <p className="text-gray-600">
              Built-in security controls, encryption at rest and in transit, and managed authentication.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center",
                  "bg-gradient-to-r", selectedService.color
                )}>
                  <selectedService.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedService.name}</h3>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Purpose</h4>
                  <p className="text-gray-700">{selectedService.details.purpose}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedService.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Integration</h4>
                  <p className="text-gray-700">{selectedService.details.integration}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="mt-8 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}