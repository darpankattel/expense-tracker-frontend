import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import AuthValidator from './AuthValidator';


export const metadata = {
  title: "Dashboard - ExpenseTracker",
  description: "Your expense tracking dashboard with analytics and insights.",
};

export default function DashboardLayout({
  children,
}) {
  return (
    <AuthValidator>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex">
          <DashboardSidebar />
          <main className="flex-1 lg:ml-0 overflow-auto">
          <div className="p-4 lg:p-8 pt-20 lg:pt-8">
              {children}
          </div>
          </main>
      </div>
    </AuthValidator>
  )
}