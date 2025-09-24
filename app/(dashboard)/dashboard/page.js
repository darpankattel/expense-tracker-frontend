"use client";
import { useAuth } from "react-oidc-context";
  
export default function Dashboard() {
  const auth = useAuth();
  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome! Here&apos;s your expense overview.</p>
        </div>

        {/* Placeholder for analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg"
            >
              <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Analytics Widget {i}</span>
              </div>
            </div>
          ))}
        </div>

        {/* More placeholder content */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="text-gray-600">
            <p>Analytics and charts will be implemented here later...</p>
          </div>
        </div>
      </div>
  );
}