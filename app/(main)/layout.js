import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: "ExpenseTracker - AI-Powered Expense Management",
  description: "Transform your financial management with our AI-powered platform. Using AWS Textract, we automatically extract and categorize expenses from receipts, making budgeting effortless.",
};

export default function MainLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  );
}
