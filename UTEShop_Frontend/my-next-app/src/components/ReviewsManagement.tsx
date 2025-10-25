'use client';

import React, { useState, useEffect } from 'react';
import { 
  getReviews, 
  toggleReviewHidden, 
  deleteReview
} from '../services/api.services';

interface Review {
  id: number;
  user_id: number;
  drink_id: number;
  order_id: number;
  rating: number;
  comment?: string;
  is_hidden: boolean;
  created_at: string;
  updated_at: string;
  user?: {
    id: number;
    fullName: string;
    username: string;
  };
  drink?: {
    id: number;
    name: string;
    slug: string;
  };
  order?: {
    id: number;
    order_number: string;
    status: string;
  };
}

interface ReviewsResponse {
  reviews: Review[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const ReviewsManagement: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterHidden, setFilterHidden] = useState<string>('all');

  const limit = 10;

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params: any = {
        page: currentPage,
        limit,
      };

      if (searchTerm.trim()) {
        params.search = searchTerm.trim();
      }

      if (filterHidden !== 'all') {
        params.is_hidden = filterHidden === 'hidden';
      }

      const response: ReviewsResponse = await getReviews(params);
      setReviews(response.reviews);
      setTotalPages(response.totalPages);
      setTotal(response.total);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Có lỗi xảy ra khi tải danh sách đánh giá');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchReviews();
    }, 300); // Debounce 300ms

    return () => clearTimeout(timeoutId);
  }, [currentPage, searchTerm, filterHidden]);

  const handleToggleHidden = async (reviewId: number) => {
    try {
      await toggleReviewHidden(reviewId);
      await fetchReviews();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Có lỗi xảy ra khi thay đổi trạng thái đánh giá');
    }
  };

  const handleDelete = async (reviewId: number) => {
    if (!confirm('Bạn có chắc chắn muốn xóa đánh giá này?')) {
      return;
    }

    try {
      await deleteReview(reviewId);
      await fetchReviews();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Có lỗi xảy ra khi xóa đánh giá');
    }
  };


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Quản lý Đánh giá</h1>
        <p className="text-gray-600">Quản lý và kiểm duyệt các đánh giá sản phẩm</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên người dùng, sản phẩm hoặc nội dung đánh giá..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterHidden}
            onChange={(e) => setFilterHidden(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Tất cả đánh giá</option>
            <option value="visible">Đánh giá hiển thị</option>
            <option value="hidden">Đánh giá bị ẩn</option>
          </select>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Reviews Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Danh sách đánh giá ({total})
          </h2>
        </div>

        {loading ? (
          <div className="p-6 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Đang tải...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            Không có đánh giá nào
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Người dùng
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sản phẩm
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Đánh giá
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nội dung
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trạng thái
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ngày tạo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reviews.map((review) => (
                    <tr key={review.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {review.user?.fullName || 'N/A'}
                          </div>
                          <div className="text-sm text-gray-500">
                            @{review.user?.username || 'N/A'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {review.drink?.name || 'N/A'}
                        </div>
                        <div className="text-sm text-gray-500">
                          Đơn hàng: {review.order?.order_number || 'N/A'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                          <span className="ml-2 text-sm text-gray-600">
                            ({review.rating}/5)
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {review.comment || 'Không có bình luận'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            review.is_hidden
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {review.is_hidden ? 'Đã ẩn' : 'Hiển thị'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(review.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleToggleHidden(review.id)}
                            className={`${
                              review.is_hidden
                                ? 'text-green-600 hover:text-green-900'
                                : 'text-yellow-600 hover:text-yellow-900'
                            }`}
                          >
                            {review.is_hidden ? 'Hiện' : 'Ẩn'}
                          </button>
                          <button
                            onClick={() => handleDelete(review.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Hiển thị {((currentPage - 1) * limit) + 1} đến{' '}
                    {Math.min(currentPage * limit, total)} trong tổng số {total} đánh giá
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Trước
                    </button>
                    <span className="px-3 py-2 text-sm font-medium text-gray-700">
                      {currentPage} / {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Sau
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

    </div>
  );
};

export default ReviewsManagement;
