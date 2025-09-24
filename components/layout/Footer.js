'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { DollarSign, Github, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Architecture', href: '/about' },
    { name: 'Login / Signup', href: '/auth' },
  ];

  return (
    <footer className="relative py-12 overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-white to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={cn(
            "bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20",
            "shadow-lg hover:shadow-xl transition-all duration-300"
          )}
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800">ExpenseTracker</span>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-gray-600 hover:text-blue-600 text-sm font-medium',
                    'transition-colors duration-300 hover:scale-105 transform'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            {/* Bottom section */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                <span>by Darpan Kattel</span>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/darpankattel/expense-tracker-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-2 rounded-lg bg-white/50 hover:bg-white/80 border border-white/20',
                    'transition-all duration-300 transform hover:scale-110 hover:shadow-lg',
                    'text-gray-600 hover:text-gray-800'
                  )}
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} ExpenseTracker. AWS Architecture Practice Project.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}