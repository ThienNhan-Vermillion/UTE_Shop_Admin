'use client';

import React, { useState, useEffect, useRef } from 'react';

interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
}

interface Order {
  id: number;
  order_number: string;
  user_id: number;
  status: string;
  payment_method: string;
  subtotal: number;
  shipping_fee: number;
  total: number;
  shipping_address: string;
  shipping_phone: string;
  notes: string;
  created_at: string;
  updated_at: string;
  user?: User;
  orderItems?: OrderItem[];
}

interface OrderItem {
  id: number;
  drink_id: number;
  quantity: number;
  price: number;
  size: string;
  ice_level: string;
  sugar_level: string;
  notes: string;
  drink: {
    id: number;
    name: string;
    image_url: string;
  };
}

export default function OrdersManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false); // ✅ Thêm state riêng cho searching
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const searchInputRef = useRef<HTMLInputElement>(null);
  const isFirstLoad = useRef(true); // ✅ Track lần đầu tiên load

  const statusOptions = [
    { value: 'all', label: 'Tất cả trạng thái' },
    { value: 'pending', label: 'Chờ xử lý' },
    { value: 'confirmed', label: 'Đã xác nhận' },
    { value: 'preparing', label: 'Đang chuẩn bị' },
    { value: 'shipping', label: 'Đang giao hàng' },
    { value: 'delivered', label: 'Đã giao thành công' },
    { value: 'cancelled', label: 'Đã hủy' },
  ];

  const getStatusLabel = (status: string) => {
    const option = statusOptions.find(opt => opt.value === status);
    return option ? option.label : status;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'preparing': return 'bg-orange-100 text-orange-800';
      case 'shipping': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // ✅ Debounce với setTimeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchOrders();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [currentPage, statusFilter, searchTerm, dateFrom, dateTo]);

  const fetchOrders = async () => {
    try {
      // ✅ Chỉ set loading=true lần đầu tiên, sau đó dùng isSearching
      if (isFirstLoad.current) {
        setLoading(true);
        isFirstLoad.current = false;
      } else {
        setIsSearching(true);
      }
      
      setError(null);
      
      const params: any = {
        page: currentPage,
        limit: 10,
      };

      if (statusFilter !== 'all') {
        params.status = statusFilter;
      }

      if (searchTerm.trim()) {
        params.search = searchTerm.trim();
      }

      if (dateFrom) {
        params.dateFrom = dateFrom;
      }
      if (dateTo) {
        params.dateTo = dateTo;
      }

      const response = await fetch(`http://localhost:3001/orders?${new URLSearchParams(params).toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      
      setOrders(data.orders || []);
      setTotalPages(data.totalPages || 1);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Có lỗi xảy ra khi tải danh sách đơn hàng');
    } finally {
      setLoading(false);
      setIsSearching(false);
    }
  };

  const updateOrderStatus = async (orderId: number, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:3001/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setSuccessMessage('Cập nhật trạng thái thành công!');
        setShowSuccessModal(true);
        fetchOrders();
      } else {
        throw new Error('Cập nhật trạng thái thất bại');
      }
    } catch (err: any) {
      alert('Lỗi: ' + err.message);
    }
  };

  const handleViewDetails = async (orderId: number) => {
    try {
      console.log('👁️ Fetching order details for ID:', orderId);
      const response = await fetch(`http://localhost:3001/orders/${orderId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch order details');
      }
      
      const orderData = await response.json();
      console.log('📋 Order details received:', orderData);
      setSelectedOrder(orderData);
      setShowOrderModal(true);
    } catch (err: any) {
      console.error('❌ Error fetching order details:', err);
      
      const orderFromList = orders.find(order => order.id === orderId);
      if (orderFromList) {
        console.log('🔄 Using order from current list as fallback');
        setSelectedOrder(orderFromList);
        setShowOrderModal(true);
      } else {
        alert('Lỗi: Không thể tải chi tiết đơn hàng. ' + err.message);
      }
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSuccessMessage('');
  };

  const handleReset = () => {
    setSearchTerm('');
    setDateFrom('');
    setDateTo('');
    setCurrentPage(1);
  };

  // ✅ Chỉ hiện loading spinner lần đầu tiên
  if (loading && isFirstLoad.current) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Đang tải danh sách đơn hàng...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Quản lý đơn hàng</h3>
            {/* ✅ Hiện indicator nhỏ khi đang search */}
            {isSearching && (
              <div className="flex items-center text-sm text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"></div>
                Đang tìm kiếm...
              </div>
            )}
          </div>
          
          {/* Search và Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Tìm kiếm theo tên khách hàng */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên khách hàng</label>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Nhập tên khách hàng..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            
            {/* Filter trạng thái */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Filter ngày từ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Từ ngày</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            
            {/* Filter ngày đến */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Đến ngày</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>
          
          {/* Nút Reset */}
          <div className="flex space-x-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center"
            >
              <i className="fas fa-refresh mr-2"></i>
              Làm mới
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mx-6 mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mã đơn
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hình ảnh
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Khách hàng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày đặt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tổng tiền
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    Không tìm thấy đơn hàng nào
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.order_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {order.orderItems && order.orderItems.length > 0 ? (
                          <div className="relative">
                            <img
                              src={order.orderItems[0].drink?.image_url ? order.orderItems[0].drink.image_url.split(',')[0] : '/images/default-drink.svg'}
                              alt={order.orderItems[0].drink?.name || 'Sản phẩm'}
                              className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/images/default-drink.svg';
                              }}
                            />
                            {order.orderItems.length > 1 && (
                              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                +{order.orderItems.length - 1}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                            <i className="fas fa-image text-gray-400"></i>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.user ? order.user.fullName : `User ID: ${order.user_id}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(order.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 ${getStatusColor(order.status)}`}
                      >
                        {statusOptions.slice(1).map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => handleViewDetails(order.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Trang {currentPage} / {totalPages}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Trước
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Sau
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal chi tiết đơn hàng */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]" onClick={() => setShowOrderModal(false)}>
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Chi tiết đơn hàng #{selectedOrder.order_number}</h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Thông tin đơn hàng */}
              <div>
                <h4 className="font-semibold mb-3">Thông tin đơn hàng</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Mã đơn:</span> {selectedOrder.order_number}</div>
                  <div><span className="font-medium">Trạng thái:</span> 
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${getStatusColor(selectedOrder.status)}`}>
                      {statusOptions.find(s => s.value === selectedOrder.status)?.label}
                    </span>
                  </div>
                  <div><span className="font-medium">Phương thức thanh toán:</span> {selectedOrder.payment_method}</div>
                  <div><span className="font-medium">Ngày đặt:</span> {formatDate(selectedOrder.created_at)}</div>
                  <div><span className="font-medium">Tổng tiền:</span> {formatCurrency(selectedOrder.total)}</div>
                </div>
              </div>

              {/* Thông tin khách hàng */}
              <div>
                <h4 className="font-semibold mb-3">Thông tin khách hàng</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Tên:</span> {selectedOrder.user?.fullName || 'N/A'}</div>
                  <div><span className="font-medium">Email:</span> {selectedOrder.user?.email || 'N/A'}</div>
                  <div><span className="font-medium">Số điện thoại:</span> {selectedOrder.user?.phone || 'N/A'}</div>
                  <div><span className="font-medium">Địa chỉ giao hàng:</span> {selectedOrder.shipping_address || 'N/A'}</div>
                  <div><span className="font-medium">SĐT giao hàng:</span> {selectedOrder.shipping_phone || 'N/A'}</div>
                </div>
              </div>
            </div>

            {/* Danh sách sản phẩm */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Sản phẩm trong đơn hàng</h4>
              <div className="space-y-3">
                {selectedOrder.orderItems?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                    <img
                      src={item.drink?.image_url ? item.drink.image_url.split(',')[0] : '/images/default-drink.svg'}
                      alt={item.drink?.name || 'Sản phẩm'}
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/default-drink.svg';
                      }}
                    />
                    <div className="flex-1">
                      <div className="font-medium">{item.drink?.name || 'Sản phẩm'}</div>
                      <div className="text-sm text-gray-600">
                        Số lượng: {item.quantity} | Giá: {formatCurrency(item.price)}
                        {item.size && ` | Size: ${item.size}`}
                        {item.ice_level && ` | Đá: ${item.ice_level}`}
                        {item.sugar_level && ` | Đường: ${item.sugar_level}`}
                      </div>
                      {item.notes && (
                        <div className="text-sm text-gray-500">Ghi chú: {item.notes}</div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{formatCurrency(item.price * item.quantity)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tổng kết */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Tổng cộng:</span>
                <span className="text-xl font-bold text-green-600">{formatCurrency(selectedOrder.total)}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowOrderModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal thông báo thành công */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={closeSuccessModal}
        >
          <div 
            className="relative mx-auto p-6 border w-96 shadow-2xl rounded-lg bg-white transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <i className="fas fa-check text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thành công!</h3>
              <div className="mb-6">
                <p className="text-gray-600">{successMessage}</p>
              </div>
              <button
                onClick={closeSuccessModal}
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors duration-200"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}