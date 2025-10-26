'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoutWithConfirmation from './LogoutWithConfirmation';
import { getAuth, isAuthenticated } from '../utils/authStorage';

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function AdminLayout({ children, currentPage = 'dashboard' }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (isAuthenticated()) {
      const { user } = getAuth();
      setUser(user);
    }
  }, []);


  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-chart-line', href: '/dashboard' },
    { id: 'orders', label: 'Đơn hàng', icon: 'fas fa-shopping-cart', href: '/orders' },
    { id: 'products', label: 'Sản phẩm', icon: 'fas fa-box', href: '/products' },
    { id: 'categories', label: 'Loại sản phẩm', icon: 'fas fa-list', href: '/categories' },
    { id: 'users', label: 'Người dùng', icon: 'fas fa-users', href: '/users' },
    { id: 'reviews', label: 'Đánh giá', icon: 'fas fa-star', href: '/reviews' },
    { id: 'vouchers', label: 'Voucher', icon: 'fas fa-tags', href: '/vouchers' },
  ];

  return (
    <div className="h-full bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-green-600 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex items-center justify-center h-16 px-4 bg-green-700">
          <div className="flex items-center">
            <i className="fas fa-coffee text-white text-2xl mr-3"></i>
            <span className="text-white text-xl font-bold">UTEShop</span>
          </div>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center px-6 py-3 text-white hover:bg-green-700 transition-colors ${
                currentPage === item.id ? 'bg-green-700 border-r-4 border-white' : ''
              }`}
            >
              <i className={`${item.icon} mr-3`}></i>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-600 hover:text-gray-900 mr-4"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Hi, {user?.fullName || 'Admin'}
              </span>
              <LogoutWithConfirmation />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
