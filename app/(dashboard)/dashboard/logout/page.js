"use client";

import Link from "next/link";

  
export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Logged Out</h1>
                <p className="text-gray-600">You have been logged out. Go to <Link href="/" className="text-blue-600 hover:underline">Home</Link>.</p>
            </div>
        </div>
    );
}