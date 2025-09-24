import ExpensesTable from '@/components/dashboard/ExpensesTable';

export const metadata = {
  title: "Expenses - ExpenseTracker Dashboard",
  description: "Manage your expenses with AI-powered receipt processing and detailed tracking.",
};

export default function Expenses() {
  return (
    <ExpensesTable />
  );
}