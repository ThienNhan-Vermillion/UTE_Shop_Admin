'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, TrendingUp, Flame, Users, Plus, Edit, Check } from 'lucide-react';

interface DashboardStats {
  ordersToday: number;
  weeklyRevenue: number;
  bestSellingProducts: number;
  newUsersToday: number;
}

interface Activity {
  id: number;
  type: string;
  message: string;
  timestamp: Date;
  icon: string;
  color: string;
}

export default function Dashboard() {
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

  const getIcon = (iconName: string, color: string) => {
    const iconClass = `w-4 h-4 text-${color}-500`;
    
    switch (iconName) {
      case 'plus':
        return <Plus className={iconClass} />;
      case 'edit':
        return <Edit className={iconClass} />;
      case 'check':
        return <Check className={iconClass} />;
      default:
        return <Plus className={iconClass} />;
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-500';
      case 'blue':
        return 'bg-blue-100 text-blue-500';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-500';
      default:
        return 'bg-gray-100 text-gray-500';
    }
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
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Đơn hàng hôm nay</p>
              <p className="text-2xl font-bold text-gray-900">{stats?.ordersToday || 0}</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Doanh thu tuần</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats?.weeklyRevenue ? (stats.weeklyRevenue / 1000000).toFixed(1) + 'M' : '0M'}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Sản phẩm bán chạy</p>
              <p className="text-2xl font-bold text-gray-900">{stats?.bestSellingProducts || 0}</p>
            </div>
            <Flame className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Người dùng mới</p>
              <p className="text-2xl font-bold text-gray-900">{stats?.newUsersToday || 0}</p>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Hoạt động gần đây</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getColorClass(activity.color)}`}>
                {getIcon(activity.icon, activity.color)}
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
  );
}
