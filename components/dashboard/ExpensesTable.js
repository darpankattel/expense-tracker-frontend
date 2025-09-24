'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Upload,
  Calendar,
  DollarSign,
  Tag,
  Store,
  ChevronLeft,
  ChevronRight,
  X,
  Save
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CreateExpenseModal from './CreateExpenseModal';

export default function ExpensesTable() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Mock data - replace with actual API calls
  const mockExpenses = [
    {
      expenseId: "exp-001",
      amount: 25.50,
      currency: "USD",
      merchant: "Starbucks Coffee",
      expenseDate: "2025-09-23",
      category: "Food & Dining",
      status: "processed",
      createdAt: "2025-09-23T10:30:00Z",
      ocrSummary: "Starbucks - Grande Latte $5.50, Breakfast Sandwich $4.00",
      s3SignedImageUrl: null
    },
    {
      expenseId: "exp-002", 
      amount: 120.00,
      currency: "USD",
      merchant: "Shell Gas Station",
      expenseDate: "2025-09-22",
      category: "Transportation",
      status: "processed",
      createdAt: "2025-09-22T14:20:00Z",
      ocrSummary: "Shell - Premium Gas $120.00",
      s3SignedImageUrl: null
    },
    {
      expenseId: "exp-003",
      amount: 45.99,
      currency: "USD", 
      merchant: "Amazon",
      expenseDate: "2025-09-21",
      category: "Shopping",
      status: "pending",
      createdAt: "2025-09-21T16:45:00Z",
      ocrSummary: "Amazon - Office Supplies $45.99",
      s3SignedImageUrl: null
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setExpenses(mockExpenses);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredExpenses = expenses.filter(expense =>
    expense.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedExpenses = filteredExpenses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);

  const handleRowClick = (expense) => {
    setSelectedExpense(expense);
    setIsDetailModalOpen(true);
  };

  const handleDelete = async (expenseId) => {
    if (confirm('Are you sure you want to delete this expense?')) {
      // API call to delete expense
      setExpenses(expenses.filter(e => e.expenseId !== expenseId));
      setIsDetailModalOpen(false);
    }
  };

  const handleCreateExpense = async (expenseData) => {
    // API call to create expense
    const newExpense = {
      expenseId: `exp-${Date.now()}`,
      ...expenseData,
      status: 'processed',
      createdAt: new Date().toISOString(),
      ocrSummary: expenseData.ocrSummary || `${expenseData.merchant} - $${expenseData.amount}`,
      s3SignedImageUrl: null
    };
    
    setExpenses(prev => [newExpense, ...prev]);
    setIsCreateModalOpen(false);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Food & Dining': 'bg-green-100 text-green-800',
      'Transportation': 'bg-blue-100 text-blue-800',
      'Shopping': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Entertainment': 'bg-yellow-100 text-yellow-800',
      'Utilities': 'bg-gray-100 text-gray-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    return status === 'processed' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-orange-100 text-orange-800';
  };

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
            <p className="text-gray-600 mt-1">Manage your expense records</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white cursor-pointer",
                "rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              )}
            >
              <Upload className="h-4 w-4" />
              Upload Receipt
            </button>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 cursor-pointer",
                "text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              )}
            >
              <Plus className="h-4 w-4" />
              Add Manual
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 "
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-400">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Merchant</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {paginatedExpenses.map((expense) => (
                <motion.tr
                  key={expense.expenseId}
                  onClick={() => handleRowClick(expense)}
                  className="hover:bg-gray-50/50 cursor-pointer transition-colors"
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(expense.expenseDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Store className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{expense.merchant}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("px-3 py-1 text-xs font-medium rounded-full", getCategoryColor(expense.category))}>
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    ${expense.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("px-3 py-1 text-xs font-medium rounded-full", getStatusColor(expense.status))}>
                      {expense.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRowClick(expense);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-gray-50/50 px-6 py-4 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredExpenses.length)} of {filteredExpenses.length} results
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 border border-gray-200 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 border border-gray-200 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isDetailModalOpen && selectedExpense && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsDetailModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Expense Details</h3>
                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Receipt Image */}
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📄</div>
                      <p className="text-gray-600">Receipt Image</p>
                      <p className="text-sm text-gray-500">
                        {selectedExpense.s3SignedImageUrl ? 'Loading...' : 'No image available'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expense Info Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Store className="h-4 w-4" />
                        Merchant
                      </label>
                      <input
                        type="text"
                        defaultValue={selectedExpense.merchant}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Amount
                      </label>
                      <input
                        type="number"
                        defaultValue={selectedExpense.amount}
                        step="0.01"
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Date
                      </label>
                      <input
                        type="date"
                        defaultValue={selectedExpense.expenseDate}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Category
                      </label>
                      <select
                        defaultValue={selectedExpense.category}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Food & Dining</option>
                        <option>Transportation</option>
                        <option>Shopping</option>
                        <option>Healthcare</option>
                        <option>Entertainment</option>
                        <option>Utilities</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        defaultValue={selectedExpense.status}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="processed">Processed</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2">
                        OCR Summary
                      </label>
                      <textarea
                        defaultValue={selectedExpense.ocrSummary}
                        rows={3}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </button>
                  <button
                    onClick={() => handleDelete(selectedExpense.expenseId)}
                    className="px-6 py-3 bg-red-100 text-red-700 rounded-xl font-medium hover:bg-red-200 transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create Expense Modal */}
      <CreateExpenseModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateExpense}
      />
    </div>
  );
}