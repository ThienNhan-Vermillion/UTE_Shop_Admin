'use client';

import React, { useState, useEffect } from 'react';
import { getUsers, updateUser } from '../services/api.services';

interface User {
  id: number;
  fullName: string;
  username?: string;
  email: string;
  dob?: string;
  phone: string;
  address?: string;
  status?: string;
  loyalty_points: number;
  created_at?: string;
}

interface UsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export default function UsersManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [editForm, setEditForm] = useState<Partial<User>>({});

  const limit = 10;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const params: any = { page: currentPage, limit };
      if (searchTerm.trim()) params.search = searchTerm.trim();
      if (dateFrom) params.dateFrom = dateFrom;
      if (dateTo) params.dateTo = dateTo;

      const response = await getUsers(params);
      
      // Handle the backend response structure
      if (response && response.success && response.data) {
        setUsers(response.data || []);
        setTotalPages(1); // Since we're not paginating yet
        setTotal(response.data.length || 0);
      } else if (response && response.users) {
        // Handle the expected structure if it exists
        setUsers(response.users || []);
        setTotalPages(response.totalPages || 1);
        setTotal(response.total || 0);
      } else {
        setUsers([]);
        setTotalPages(1);
        setTotal(0);
      }
    } catch (err: any) {
      console.error('Error fetching users:', err);
      setError(err.response?.data?.message || err.message || 'Có lỗi xảy ra khi tải danh sách khách hàng');
      setUsers([]);
      setTotalPages(1);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => fetchUsers(), 300);
    return () => clearTimeout(timeout);
  }, [currentPage, searchTerm, dateFrom, dateTo]);

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setEditForm({
      fullName: user.fullName,
      email: user.email,
      dob: user.dob,
      phone: user.phone,
      address: user.address,
      status: user.status,
    });
    setShowEditModal(true);
  };

  const handleSave = async () => {
    if (!editingUser) return;
    try {
      const response = await updateUser(editingUser.id, editForm);
      if (response.success) {
        setUsers(prevUsers => prevUsers ? prevUsers.map(u => u.id === editingUser.id ? { ...u, ...editForm } : u) : []);
        setShowEditModal(false);
      } else setError('Không thể cập nhật thông tin người dùng');
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi cập nhật');
    }
  };

  const handleStatusToggle = async (user: User) => {
    const newStatus = user.status === 'active' ? 'inactive' : 'active';
    try {
      const response = await updateUser(user.id, { status: newStatus });
      if (response.success) {
        setUsers(prevUsers => prevUsers ? prevUsers.map(u => u.id === user.id ? { ...u, status: newStatus } : u) : []);
      }
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi cập nhật trạng thái');
    }
  };

  const formatDate = (date?: string) => date ? new Date(date).toLocaleDateString('vi-VN') : '';

  const handleReset = () => {
    setSearchTerm('');
    setDateFrom('');
    setDateTo('');
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Quản lý khách hàng</h1>
      <p className="text-gray-600 mb-6"></p>


      {/* Bảng người dùng */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Họ tên</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số điện thoại</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <span className="ml-2">Đang tải...</span>
                  </div>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-red-600">
                  {error}
                </td>
              </tr>
            ) : !users || users.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  Không có dữ liệu khách hàng
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{u.fullName}</td>
                  <td className="px-6 py-4">{u.email}</td>
                  <td className="px-6 py-4">{u.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${u.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'}`}>
                      {u.status === 'active' ? 'Hoạt động' : 'Khóa'}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(u)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <i className="fas fa-edit mr-1"></i>Sửa
                    </button>
                    <button
                      onClick={() => handleStatusToggle(u)}
                      className={u.status === 'active'
                        ? 'text-red-600 hover:text-red-900'
                        : 'text-green-600 hover:text-green-900'}
                    >
                      <i className={`fas ${u.status === 'active' ? 'fa-lock' : 'fa-unlock'} mr-1`}></i>
                      {u.status === 'active' ? 'Khóa' : 'Mở'}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal chỉnh sửa */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]" onClick={() => setShowEditModal(false)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Chỉnh sửa người dùng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={editForm.fullName || ''}
                onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                placeholder="Họ tên"
                className="border p-2 rounded"
              />
              <input
                type="email"
                value={editForm.email || ''}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                placeholder="Email"
                className="border p-2 rounded"
              />
              <input
                type="tel"
                value={editForm.phone || ''}
                onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                placeholder="Số điện thoại"
                className="border p-2 rounded"
              />
              <input
                type="text"
                value={editForm.address || ''}
                onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                placeholder="Địa chỉ"
                className="border p-2 rounded"
              />
            </div>
            <div className="flex justify-end mt-6 space-x-2">
              <button onClick={() => setShowEditModal(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Hủy</button>
              <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
