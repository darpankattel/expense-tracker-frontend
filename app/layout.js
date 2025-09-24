import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ExpenseTracker - AI-Powered Expense Management",
  description: "Transform your financial management with our AI-powered platform. Using AWS Textract, we automatically extract and categorize expenses from receipts, making budgeting effortless.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
