'use client';

import React, { useState, useEffect } from 'react';
import { getVouchers, updateVoucher, deleteVoucher } from '../services/api.services';

interface Voucher {
  id: number;
  user_id: number;
  code: string;
  discount_type: 'percent' | 'fixed';
  discount_value: number;
  min_order_total: number;
  expires_at: string;
  used_at: string | null;
  description: string;
  user: {
    id: number;
    fullName: string;
    email: string;
  };
}

export default function VoucherManagement() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingVoucher, setEditingVoucher] = useState<Voucher | null>(null);
  const [editForm, setEditForm] = useState<Partial<Voucher>>({});

  useEffect(() => {
    fetchVouchers();
  }, []);

  const fetchVouchers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getVouchers();
      if (response.success) {
        setVouchers(response.data);
      } else {
        setError('Không thể tải danh sách voucher');
      }
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (voucher: Voucher) => {
    setEditingVoucher(voucher);
    setEditForm({
      code: voucher.code,
      description: voucher.description,
      discount_type: voucher.discount_type,
      discount_value: voucher.discount_value,
      min_order_total: voucher.min_order_total,
      expires_at: voucher.expires_at ? voucher.expires_at.split('T')[0] : '',
    });
    setShowEditModal(true);
  };

  const handleSave = async () => {
    if (!editingVoucher) return;

    try {
      // Chuẩn bị dữ liệu để gửi lên
      const updateData: any = {};
      
      if (editForm.code !== undefined) updateData.code = editForm.code;
      if (editForm.description !== undefined) updateData.description = editForm.description;
      if (editForm.discount_type !== undefined) updateData.discount_type = editForm.discount_type;
      if (editForm.discount_value !== undefined) updateData.discount_value = Number(editForm.discount_value);
      if (editForm.min_order_total !== undefined) updateData.min_order_total = Number(editForm.min_order_total);
      if (editForm.expires_at !== undefined) {
        updateData.expires_at = editForm.expires_at ? new Date(editForm.expires_at).toISOString() : null;
      }

      console.log('Sending update data:', updateData);
      
      const response = await updateVoucher(editingVoucher.id, updateData);
      if (response.success) {
        setVouchers(vouchers.map(voucher => 
          voucher.id === editingVoucher.id ? { ...voucher, ...editForm } : voucher
        ));
        setShowEditModal(false);
        setEditingVoucher(null);
        setEditForm({});
      } else {
        setError('Không thể cập nhật thông tin voucher');
      }
    } catch (err: any) {
      console.error('Update error:', err);
      setError(err.message || 'Có lỗi xảy ra khi cập nhật');
    }
  };

  const handleCancel = () => {
    setShowEditModal(false);
    setEditingVoucher(null);
    setEditForm({});
  };

  const handleDelete = async (voucher: Voucher) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa voucher này?')) {
      return;
    }

    try {
      const response = await deleteVoucher(voucher.id);
      if (response.success) {
        setVouchers(vouchers.filter(v => v.id !== voucher.id));
      } else {
        setError('Không thể xóa voucher');
      }
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi xóa');
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  };

  const formatValue = (discount_type: string, discount_value: number) => {
    if (discount_type === 'percent') {
      return `${discount_value}%`;
    } else {
      return `${discount_value.toLocaleString('vi-VN')} VNĐ`;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-green-600 mb-4"></i>
          <p className="text-lg text-gray-700">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý voucher</h1>
        <p className="text-gray-600">Quản lý thông tin và trạng thái của voucher</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MÃ GIẢM GIÁ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MÔ TẢ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NGƯỜI SỞ HỮU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LOẠI
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GIÁ TRỊ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ĐƠN HÀNG TỐI THIỂU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NGÀY HẾT HẠN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TRẠNG THÁI
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  THAO TÁC
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vouchers.map((voucher) => (
                <tr key={voucher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{voucher.code}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{voucher.description || 'Không có mô tả'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{voucher.user.fullName}</div>
                    <div className="text-xs text-gray-500">{voucher.user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      voucher.discount_type === 'percent' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {voucher.discount_type === 'percent' ? 'Phần trăm' : 'Số tiền cố định'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatValue(voucher.discount_type, voucher.discount_value)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {voucher.min_order_total ? `${voucher.min_order_total.toLocaleString('vi-VN')} VNĐ` : 'Không giới hạn'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{voucher.expires_at ? formatDate(voucher.expires_at) : 'Không giới hạn'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      voucher.used_at 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {voucher.used_at ? 'Đã sử dụng' : 'Chưa sử dụng'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(voucher)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <i className="fas fa-edit mr-1"></i>Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(voucher)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <i className="fas fa-trash mr-1"></i>Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {vouchers.length === 0 && !loading && (
        <div className="text-center py-12">
          <i className="fas fa-tags text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Chưa có voucher nào</h3>
          <p className="text-gray-500">Dữ liệu voucher sẽ hiển thị ở đây khi có.</p>
        </div>
      )}

      {/* Edit Voucher Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Sửa voucher</h2>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mã giảm giá
                    </label>
                    <input
                      type="text"
                      value={editForm.code || ''}
                      onChange={(e) => setEditForm({...editForm, code: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Nhập mã giảm giá"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mô tả
                    </label>
                    <textarea
                      value={editForm.description || ''}
                      onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Nhập mô tả voucher"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loại voucher
                    </label>
                    <select
                      value={editForm.discount_type || ''}
                      onChange={(e) => setEditForm({...editForm, discount_type: e.target.value as 'percent' | 'fixed'})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="percent">Phần trăm</option>
                      <option value="fixed">Số tiền cố định</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Giá trị
                    </label>
                    <input
                      type="number"
                      value={editForm.discount_value || ''}
                      onChange={(e) => setEditForm({...editForm, discount_value: parseFloat(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Nhập giá trị voucher"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Đơn hàng tối thiểu (VNĐ)
                    </label>
                    <input
                      type="number"
                      value={editForm.min_order_total || ''}
                      onChange={(e) => setEditForm({...editForm, min_order_total: parseFloat(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Nhập đơn hàng tối thiểu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ngày hết hạn
                    </label>
                    <input
                      type="date"
                      value={editForm.expires_at || ''}
                      onChange={(e) => setEditForm({...editForm, expires_at: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end space-x-3 p-6 border-t bg-gray-50">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
