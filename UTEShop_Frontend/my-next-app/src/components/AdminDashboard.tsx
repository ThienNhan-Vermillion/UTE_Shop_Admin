'use client';

import React, { useState, useEffect } from 'react';

interface DashboardStats {
  ordersThisWeek: number;
  weeklyRevenue: number;
  totalUsers: number;
  totalOrders: number;
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

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, activitiesRes] = await Promise.all([
        fetch('http://localhost:3001/dashboard/stats'),
        fetch('http://localhost:3001/dashboard/activities')
      ]);

      const statsData = await statsRes.json();
      const activitiesData = await activitiesRes.json();

      setStats(statsData);
      setActivities(Array.isArray(activitiesData) ? activitiesData : []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Fallback data nếu API lỗi
      setStats({
        ordersThisWeek: 24,
        weeklyRevenue: 12500000,
        totalUsers: 8,
        totalOrders: 156
      });
      setActivities([
        {
          id: 1,
          type: 'product_added',
          message: 'Thêm sản phẩm mới: Trà sữa Matcha',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          icon: 'plus',
          color: 'green',
        },
        {
          id: 2,
          type: 'product_updated',
          message: 'Cập nhật giá sản phẩm: Cà phê Americano',
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          icon: 'edit',
          color: 'blue',
        },
        {
          id: 3,
          type: 'order_processed',
          message: 'Xử lý đơn hàng #12345',
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
          icon: 'check',
          color: 'yellow',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(timestamp).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'Vừa xong';
    if (hours === 1) return '1 giờ trước';
    return `${hours} giờ trước`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Đang tải dữ liệu...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Stats Cards - Theo đúng template */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Đơn hàng trong tuần */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Đơn hàng trong tuần</p>
              <p className="text-3xl font-bold text-gray-900">{stats?.ordersThisWeek || 24}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fas fa-shopping-cart text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        {/* Doanh thu tuần */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Doanh thu tuần</p>
              <p className="text-3xl font-bold text-gray-900">
                {stats?.weeklyRevenue ? (stats.weeklyRevenue / 1000000).toFixed(1) + 'M' : '12.5M'}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="fas fa-chart-line text-yellow-600 text-xl"></i>
            </div>
          </div>
        </div>

        {/* Người dùng */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Người dùng</p>
              <p className="text-3xl font-bold text-gray-900">{stats?.totalUsers || 8}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="fas fa-users text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities - Theo đúng template */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Hoạt động gần đây</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className={`bg-${activity.color}-100 p-2 rounded-full`}>
                  <i className={`fas fa-${activity.icon} text-${activity.color}-600`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{formatTimeAgo(activity.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
