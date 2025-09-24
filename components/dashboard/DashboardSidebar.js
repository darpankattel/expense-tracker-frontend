'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Receipt, 
  Menu, 
  DollarSign, 
  User, 
  LogOut,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import useIsDesktop from '@/hooks/useIsDesktop';
import { useAuth } from "react-oidc-context";
import Image from 'next/image';

export default function DashboardSidebar() {
    const pathname = usePathname();
    const isDesktop = useIsDesktop();
    const [isOpen, setIsOpen] = useState(false);
    const auth = useAuth();
    console.log("Auth State in DashboardSidebar:", auth);

    useEffect(() => {
      setIsOpen(isDesktop);
    }, [isDesktop]);

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {   
      name: 'Expenses',
      href: '/dashboard/expenses',
      icon: Receipt,
    },
  ];

  const toggleSidebar = () => setIsOpen(isDesktop ? true : !isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className={cn(
          "lg:hidden fixed top-4 left-4 z-50 p-3 rounded-xl",
          "bg-white/80 backdrop-blur-md border border-white/20 shadow-lg",
          "hover:bg-white/90 transition-all duration-300",
            isOpen ? "opacity-0": "opacity-100"
        )}
      >
        <Menu className="h-6 w-6 text-black" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : '-100%',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-72",
          "lg:translate-x-0 lg:w-64",
          "bg-white/90 backdrop-blur-md border-r border-white/20",
          "shadow-2xl lg:shadow-none"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-gray-200/50">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">ExpenseTracker</h1>
              <p className="text-sm text-gray-600">Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(isDesktop ? true : false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                    "hover:bg-white/70 hover:shadow-md cursor-pointer",
                    isActive
                      ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-blue-700"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-blue-600" : "text-gray-500"
                  )} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200/50">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                {auth?.user?.profile?.picture ?
                <img alt="User Avatar" src={auth?.user?.profile?.picture} className="rounded-full" /> :
                <User className="h-4 w-4 text-white" /> }
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                    {auth?.user?.profile.name || auth?.user?.profile.username || "--"}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {auth?.user?.profile.email || "--"}
                </p>
              </div>
            </div>
            
            <div className="mt-3 space-y-1">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white/70 rounded-lg transition-colors">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer" onClick={()=>{
                window.confirm("Are you sure you want to log out?") && auth.signoutSilent();
              }}>
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}