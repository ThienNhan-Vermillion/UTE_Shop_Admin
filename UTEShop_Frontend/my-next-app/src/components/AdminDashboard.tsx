'use client';

import React, { useState, useEffect } from 'react';

interface DashboardStats {
  ordersInPeriod: number;
  periodRevenue: number;
  totalUsers: number;
  totalOrders: number;
  startDate: string;
  endDate: string;
}

interface Activity {
  id: number;
  type: string;
  message: string;
  timestamp: Date;
  icon: string;
  color: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteType, setDeleteType] = useState<'single' | 'all'>('single');
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Fonction pour nettoyer les doublons d'activités
  const removeDuplicateActivities = (activitiesList: Activity[]) => {
    const seen = new Map();
    const filtered: Activity[] = [];
    
    activitiesList.forEach(activity => {
      // Clé unique basée sur le message et timestamp (arrondi à la seconde)
      const timestamp = new Date(activity.timestamp).getTime();
      const roundedTime = Math.floor(timestamp / 1000) * 1000;
      
      // Priorité au message avec code UTE
      const isUTE = activity.message.includes('UTE');
      const key = `${activity.type}_${roundedTime}`;
      
      if (!seen.has(key)) {
        seen.set(key, activity);
        filtered.push(activity);
      } else {
        // Remplacer si le nouveau a le code UTE et l'ancien non
        const existing = seen.get(key);
        if (isUTE && !existing.message.includes('UTE')) {
          const index = filtered.findIndex(a => a.id === existing.id);
          if (index !== -1) {
            filtered[index] = activity;
            seen.set(key, activity);
          }
        }
      }
    });
    
    return filtered;
  };

  const fetchDashboardData = async (start?: string, end?: string) => {
    try {
      const statsUrl = start && end 
        ? `http://localhost:3001/dashboard/stats?startDate=${start}&endDate=${end}`
        : 'http://localhost:3001/dashboard/stats';
        
      const [statsRes, activitiesRes] = await Promise.all([
        fetch(statsUrl),
        fetch('http://localhost:3001/dashboard/activities')
      ]);

      const statsData = await statsRes.json();
      const activitiesData = await activitiesRes.json();

      setStats(statsData);
      
      // Nettoyer les doublons avant d'afficher
      const cleanedActivities = removeDuplicateActivities(
        Array.isArray(activitiesData) ? activitiesData : []
      );
      setActivities(cleanedActivities);
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setStats(null);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (hours < 1) {
      const minutes = Math.floor(diff / (1000 * 60));
      if (minutes < 1) return 'Vừa xong';
      return `${minutes} phút trước`;
    }
    
    if (hours < 24) {
      return `${hours} giờ trước`;
    }
    
    if (days < 7) {
      return `${days} ngày trước`;
    }
    
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDateFilter = () => {
    if (startDate && endDate) {
      setLoading(true);
      fetchDashboardData(startDate, endDate);
    }
  };

  const resetToCurrentMonth = () => {
    setStartDate('');
    setEndDate('');
    setLoading(true);
    fetchDashboardData();
  };

  const showDeleteConfirm = (type: 'single' | 'all', id?: number) => {
    setDeleteType(type);
    setDeleteId(id || null);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      let response;
      if (deleteType === 'single' && deleteId) {
        response = await fetch(`http://localhost:3001/dashboard/activities/${deleteId}`, {
          method: 'DELETE',
        });
      } else {
        response = await fetch('http://localhost:3001/dashboard/activities', {
          method: 'DELETE',
        });
      }
      
      const result = await response.json();
      
      if (result.success) {
        if (deleteType === 'single') {
          setActivities(activities.filter(a => a.id !== deleteId));
        } else {
          setActivities([]);
        }
        setShowDeleteModal(false);
      } else {
        alert('Không thể xóa hoạt động: ' + result.message);
      }
    } catch (error) {
      console.error('Error deleting activity:', error);
      alert('Lỗi khi xóa hoạt động');
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <div className="ml-4 text-lg text-gray-600">Đang tải dữ liệu...</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Date Filter */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          <i className="fas fa-filter mr-2 text-blue-600"></i>
          Lọc theo thời gian
        </h3>
        <div className="flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Từ ngày</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Đến ngày</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleDateFilter}
            disabled={!startDate || !endDate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            <i className="fas fa-search mr-2"></i>
            Áp dụng
          </button>
          <button
            onClick={resetToCurrentMonth}
            className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Tháng hiện tại
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Đơn hàng */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                {startDate && endDate ? 'Đơn hàng trong khoảng thời gian' : 'Đơn hàng trong tháng'}
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats?.ordersInPeriod || 0}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-full">
              <i className="fas fa-shopping-cart text-green-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Doanh thu */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-600 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                {startDate && endDate ? 'Doanh thu trong khoảng thời gian' : 'Doanh thu tháng'}
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {stats?.periodRevenue ? stats.periodRevenue.toLocaleString('vi-VN') : '0'}
              </p>
              <p className="text-xs text-gray-500 mt-1">VNĐ</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-full">
              <i className="fas fa-chart-line text-yellow-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Người dùng */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Người dùng</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats?.totalUsers || 0}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-full">
              <i className="fas fa-users text-purple-600 text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            <i className="fas fa-history mr-2 text-blue-600"></i>
            Hoạt động gần đây
          </h3>
          {activities.length > 0 && (
            <button
              onClick={() => showDeleteConfirm('all')}
              className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
            >
              <i className="fas fa-trash mr-1"></i>
              Xóa tất cả
            </button>
          )}
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`bg-${activity.color}-100 p-3 rounded-full flex-shrink-0`}>
                  <i className={`fas fa-${activity.icon} text-${activity.color}-600 text-lg`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <i className="fas fa-clock mr-1"></i>
                    {formatTimeAgo(activity.timestamp)}
                  </p>
                </div>
                <button
                  onClick={() => showDeleteConfirm('single', activity.id)}
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all flex-shrink-0"
                  title="Xóa hoạt động"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
            {activities.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <i className="fas fa-inbox text-5xl mb-3 text-gray-300"></i>
                <p className="text-lg font-medium">Chưa có hoạt động nào</p>
                <p className="text-sm mt-1">Các hoạt động sẽ xuất hiện ở đây</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal xác nhận xóa */}
      {showDeleteModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={cancelDelete}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
              <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {deleteType === 'all' ? 'Xóa tất cả hoạt động?' : 'Xóa hoạt động?'}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {deleteType === 'all' 
                  ? 'Bạn có chắc chắn muốn xóa tất cả hoạt động? Hành động này không thể hoàn tác.'
                  : 'Bạn có chắc chắn muốn xóa hoạt động này? Hành động này không thể hoàn tác.'
                }
              </p>
              <div className="flex space-x-3 justify-center">
                <button
                  onClick={cancelDelete}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <i className="fas fa-times mr-2"></i>
                  Hủy
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                >
                  <i className="fas fa-trash mr-2"></i>
                  {deleteType === 'all' ? 'Xóa tất cả' : 'Xóa'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}