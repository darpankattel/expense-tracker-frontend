'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Upload, 
  DollarSign, 
  Calendar, 
  Store, 
  Tag,
  FileText,
  Camera,
  Plus,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CreateExpenseModal({ isOpen, onClose, onSubmit }) {
  const [activeTab, setActiveTab] = useState('receipt');
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    merchant: '',
    amount: '',
    expenseDate: new Date().toISOString().split('T')[0],
    category: 'Food & Dining',
    notes: ''
  });

  const categories = [
    'Food & Dining',
    'Transportation', 
    'Shopping',
    'Healthcare',
    'Entertainment',
    'Utilities',
    'Business',
    'Travel',
    'Other'
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReceiptSubmit = async () => {
    if (!uploadedFile) return;
    
    setLoading(true);
    try {
      // Simulate API call for receipt processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock extracted data
      const extractedData = {
        merchant: "Starbucks Coffee",
        amount: "25.50",
        expenseDate: "2025-09-24",
        category: "Food & Dining",
        ocrSummary: "Grande Latte $5.50, Breakfast Sandwich $4.00, Tax $2.00"
      };
      
      onSubmit(extractedData);
      onClose();
    } catch (error) {
      console.error('Error processing receipt:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Error creating expense:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetModal = () => {
    setActiveTab('receipt');
    setUploadedFile(null);
    setPreviewUrl(null);
    setFormData({
      merchant: '',
      amount: '',
      expenseDate: new Date().toISOString().split('T')[0],
      category: 'Food & Dining',
      notes: ''
    });
    setLoading(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
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
            <h3 className="text-xl font-bold text-gray-900">Add New Expense</h3>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('receipt')}
              className={cn(
                "flex-1 py-4 px-6 text-sm font-medium transition-colors",
                activeTab === 'receipt'
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              )}
            >
              <div className="flex items-center justify-center gap-2">
                <Camera className="h-4 w-4" />
                Upload Receipt
              </div>
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={cn(
                "flex-1 py-4 px-6 text-sm font-medium transition-colors",
                activeTab === 'manual'
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              )}
            >
              <div className="flex items-center justify-center gap-2">
                <Plus className="h-4 w-4" />
                Manual Entry
              </div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'receipt' ? (
              <div className="space-y-6">
                {/* File Upload Area */}
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="receipt-upload"
                  />
                  <label
                    htmlFor="receipt-upload"
                    className={cn(
                      "block w-full p-8 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all",
                      uploadedFile
                        ? "border-green-300 bg-green-50"
                        : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                    )}
                  >
                    {previewUrl ? (
                      <div className="space-y-4">
                        <img
                          src={previewUrl}
                          alt="Receipt preview"
                          className="mx-auto max-h-48 rounded-xl"
                        />
                        <div className="flex items-center justify-center gap-2 text-green-600">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-medium">Receipt obtained successfully</span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <div className="text-lg font-medium text-gray-900 mb-2">
                          Upload Receipt
                        </div>
                        <div className="text-sm text-gray-600">
                          Drag & drop your receipt image here, or click to browse
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          Supports JPG, PNG, PDF up to 10MB
                        </div>
                      </div>
                    )}
                  </label>
                </div>

                {/* AI Processing Info */}
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">AI-Powered Processing</h4>
                      <p className="text-sm text-blue-700">
                        Our AWS Textract service will automatically extract merchant, amount, 
                        date, and other details from your receipt.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleReceiptSubmit}
                  disabled={!uploadedFile || loading}
                  className={cn(
                    "w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",
                    uploadedFile && !loading
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  )}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Processing Receipt...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      Process Receipt
                    </>
                  )}
                </button>
              </div>
            ) : (
              <form onSubmit={handleManualSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Store className="inline h-4 w-4 mr-1" />
                      Merchant *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.merchant}
                      onChange={(e) => handleInputChange('merchant', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Starbucks Coffee"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="inline h-4 w-4 mr-1" />
                      Amount *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.expenseDate}
                      onChange={(e) => handleInputChange('expenseDate', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Tag className="inline h-4 w-4 mr-1" />
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Additional notes about this expense..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    "w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",
                    "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
                  )}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Creating Expense...
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      Create Expense
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}