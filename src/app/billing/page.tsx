'use client';

import React, { useState } from 'react';
import { Plus, Trash2, Printer } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';
import { Button, Container, Heading } from '@/components/ui';

interface InvoiceItem {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
}

export default function BillingPage() {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', name: '', originalPrice: 0, discountedPrice: 0, quantity: 1 },
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: Math.random().toString(36).substr(2, 9),
        name: '',
        originalPrice: 0,
        discountedPrice: 0,
        quantity: 1,
      },
    ]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.originalPrice * item.quantity,
    0
  );
  const finalTotal = items.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );
  const totalSavings = subtotal - finalTotal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white print:min-h-0">
        <Container className="py-8 print:p-0 print:m-0 print:max-w-none">
          
          {/* =========================================================
              FORM SECTION (Hidden during print)
              ========================================================= */}
          <div className="print:hidden space-y-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <Heading as="h1" className="text-2xl">Invoice Generator (Internal)</Heading>
              <Button onClick={handlePrint} className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Customer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    type="text"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                    placeholder="Enter phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Date</label>
                  <input
                    type="date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Invoice Items</h2>
                <Button variant="outline" size="sm" onClick={handleAddItem} className="flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Add Item
                </Button>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id} className="flex flex-wrap md:flex-nowrap items-end gap-3 p-4 bg-gray-50 border border-gray-100 rounded-lg">
                    <div className="w-full md:flex-1">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Item {index + 1} Name</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary text-sm"
                        placeholder="e.g. Sofa Cleaning (3 Seater)"
                      />
                    </div>
                    <div className="w-1/2 md:w-32">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Original Rate</label>
                      <input
                        type="number"
                        value={item.originalPrice || ''}
                        onChange={(e) => updateItem(item.id, 'originalPrice', parseFloat(e.target.value) || 0)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                    <div className="w-1/2 md:w-32">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Final Rate</label>
                      <input
                        type="number"
                        value={item.discountedPrice || ''}
                        onChange={(e) => updateItem(item.id, 'discountedPrice', parseFloat(e.target.value) || 0)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                    <div className="w-1/2 md:w-24">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Qty</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity || ''}
                        onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary text-sm"
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      title="Remove item"
                      disabled={items.length === 1}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* =========================================================
              INVOICE PREVIEW SECTION (Visible during print)
              ========================================================= */}
          <style type="text/css" media="print">
            {`
              @page { size: auto;  margin: 0mm; }
            `}
          </style>
          <div className="mt-16 print:mt-0 max-w-4xl mx-auto bg-white p-8 md:p-12 border border-gray-200 print:border-none print:shadow-none shadow-lg rounded-2xl print:p-12">
            {/* Header */}
            <div className="flex justify-between items-start border-b pb-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/assets/images/hygiguard-logo.png" alt="HygiGuard Logo" className="h-16" />
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{SITE_CONFIG.name}</h1>
                </div>
                <p className="text-gray-500 text-sm mt-1 max-w-xs">{SITE_CONFIG.description}</p>
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  <p><strong>Phone:</strong> {SITE_CONFIG.phone}</p>
                  <p><strong>Email:</strong> {SITE_CONFIG.email}</p>
                  <p><strong>Website:</strong> {SITE_CONFIG.baseUrl.replace('https://', '')}</p>
                </div>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-light text-primary uppercase tracking-widest mb-4">Invoice</h2>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium text-gray-900">Date:</span> {new Date(invoiceDate).toLocaleDateString('en-IN')}</p>
                  <p><span className="font-medium text-gray-900">Invoice No:</span> #INV-{Math.floor(Date.now() / 1000).toString().slice(-6)}</p>
                </div>
              </div>
            </div>

            {/* Bill To */}
            <div className="mb-10">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Billed To</h3>
              <p className="text-lg font-semibold text-gray-900">{customerName || 'Customer Name'}</p>
              {customerPhone && <p className="text-gray-600 mt-1">{customerPhone}</p>}
            </div>

            {/* Items Table */}
            <table className="w-full text-left mb-10 border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-800 text-sm text-gray-900">
                  <th className="py-3 font-semibold w-1/2">Service Description</th>
                  <th className="py-3 font-semibold text-center w-1/6">Qty</th>
                  <th className="py-3 font-semibold text-right w-1/6">Rate</th>
                  <th className="py-3 font-semibold text-right w-1/6">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item, index) => (
                  <tr key={item.id} className="text-sm">
                    <td className="py-4 text-gray-900 font-medium">
                      {item.name || `Service Item ${index + 1}`}
                      {item.originalPrice > item.discountedPrice && (
                        <span className="block text-xs text-green-600 font-normal mt-0.5">
                          Discount applied (Save ₹{item.originalPrice - item.discountedPrice}/unit)
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-gray-600 text-center">{item.quantity}</td>
                    <td className="py-4 text-gray-600 text-right">
                      <div className="flex flex-col items-end">
                        <span>₹{item.discountedPrice}</span>
                        {item.originalPrice > item.discountedPrice && (
                          <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 text-gray-900 font-semibold text-right">₹{item.discountedPrice * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-full max-w-sm space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-sm text-green-600 font-medium">
                    <span>Discount Savings</span>
                    <span>-₹{totalSavings}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-gray-900 border-t-2 border-gray-800 pt-4 mt-2">
                  <span>Total</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
              <p>Thank you for choosing HygiGuard Solutions for your professional cleaning needs.</p>
              <p className="mt-1">For any queries regarding this invoice, please contact {SITE_CONFIG.phone}</p>
            </div>
          </div>
          
        </Container>
      </div>
  );
}
