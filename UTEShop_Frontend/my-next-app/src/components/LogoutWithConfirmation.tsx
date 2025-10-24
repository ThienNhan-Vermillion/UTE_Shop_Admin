'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { clearAuth } from '../utils/authStorage';

export default function LogoutWithConfirmation() {
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    clearAuth();
    setShowConfirm(false);
    router.push('/');
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors"
      >
        <i className="fas fa-sign-out-alt mr-2"></i>
        Đăng xuất
      </button>

      {/* Modal xác nhận */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]" onClick={(e) => e.stopPropagation()}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Xác nhận đăng xuất</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              ⚠️ Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không?
            </p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
