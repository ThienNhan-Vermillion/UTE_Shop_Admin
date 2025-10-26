'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../services/api.services';

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function CategoriesManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Form state
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [deletingCategory, setDeletingCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCategories();

      if (data.success) {
        setCategories(data.data);
      } else {
        setError('Không thể tải danh sách loại sản phẩm');
      }
    } catch (err) {
      console.error('Lỗi khi tải categories:', err);
      setError('Có lỗi xảy ra khi tải danh sách loại sản phẩm');
    } finally {
      setLoading(false);
    }
  };

  // =================== CREATE ===================
  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) {
      alert('Vui lòng nhập tên loại sản phẩm');
      return;
    }

    try {
      const response = await createCategory({ name: newCategoryName.trim() });

      if (response.success) {
        setCategories([...categories, response.data]);
        setNewCategoryName('');
        setShowAddModal(false);
        alert('Thêm loại sản phẩm thành công!');
      } else {
        alert('Có lỗi xảy ra: ' + response.message);
      }
    } catch (err) {
      console.error('Lỗi khi tạo loại sản phẩm:', err);
      alert('Có lỗi xảy ra khi tạo loại sản phẩm');
    }
  };

  // =================== UPDATE ===================
  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setEditCategoryName(category.name);
    setShowEditModal(true);
  };

  const handleUpdateCategory = async () => {
    if (!editingCategory) return;
    if (!editCategoryName.trim()) {
      alert('Vui lòng nhập tên loại sản phẩm');
      return;
    }

    try {
      const response = await updateCategory(editingCategory.id, {
        name: editCategoryName.trim(),
      });

      if (response.success) {
        setCategories((prev) =>
          prev.map((cat) =>
            cat.id === editingCategory.id
              ? { ...cat, name: editCategoryName.trim() }
              : cat
          )
        );
        resetEditForm();
        alert('Cập nhật loại sản phẩm thành công!');
      } else {
        alert('Có lỗi xảy ra: ' + response.message);
      }
    } catch (err) {
      console.error('Lỗi khi cập nhật loại sản phẩm:', err);
      alert('Có lỗi xảy ra khi cập nhật loại sản phẩm');
    }
  };

  // =================== DELETE ===================
  const handleDeleteCategory = (category: Category) => {
    setDeletingCategory(category);
    setShowDeleteModal(true);
  };

  const confirmDeleteCategory = async () => {
    if (!deletingCategory) return;

    try {
      const response = await deleteCategory(deletingCategory.id);

      if (response.success) {
        setCategories((prev) =>
          prev.filter((cat) => cat.id !== deletingCategory.id)
        );
        setShowDeleteModal(false);
        setDeletingCategory(null);
        alert('Xóa loại sản phẩm thành công!');
      } else {
        alert('Có lỗi xảy ra: ' + response.message);
      }
    } catch (err) {
      console.error('Lỗi khi xóa loại sản phẩm:', err);
      alert('Có lỗi xảy ra khi xóa loại sản phẩm');
    }
  };

  // =================== RESET FORM ===================
  const resetAddForm = () => {
    setNewCategoryName('');
    setShowAddModal(false);
  };

  const resetEditForm = () => {
    setEditCategoryName('');
    setEditingCategory(null);
    setShowEditModal(false);
  };

  return (
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Loại sản phẩm</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <i className="fas fa-plus mr-2"></i> Thêm loại
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <i className="fas fa-exclamation-circle text-red-500 mr-2"></i>
              <span className="text-red-700">{error}</span>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tên loại
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Slug
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-4 text-center text-gray-500"
                      >
                        Chưa có loại sản phẩm nào
                      </td>
                    </tr>
                  ) : (
                    categories
                      .sort((a, b) => a.id - b.id)
                      .map((category) => (
                        <tr key={category.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                            {category.id}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {category.name}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {category.slug}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEditCategory(category)}
                                className="text-blue-600 hover:text-blue-900 flex items-center"
                              >
                                <i className="fas fa-edit mr-1"></i> Sửa
                              </button>
                              <button
                                onClick={() => handleDeleteCategory(category)}
                                className="text-red-600 hover:text-red-900 flex items-center"
                              >
                                <i className="fas fa-trash mr-1"></i> Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal Thêm loại sản phẩm */}
        {showAddModal && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]"
            onClick={resetAddForm}
          >
            <div
              className="bg-white rounded-lg shadow-xl w-96 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Thêm loại sản phẩm
                </h3>
                <button
                  onClick={resetAddForm}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên loại sản phẩm
                </label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === 'Enter' && handleAddCategory()
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Ví dụ: Nước ép trái cây"
                  autoFocus
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={resetAddForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  onClick={handleAddCategory}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Sửa loại sản phẩm */}
        {showEditModal && editingCategory && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]"
            onClick={resetEditForm}
          >
            <div
              className="bg-white rounded-lg shadow-xl w-96 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Sửa loại sản phẩm
                </h3>
                <button
                  onClick={resetEditForm}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên loại sản phẩm
                </label>
                <input
                  type="text"
                  value={editCategoryName}
                  onChange={(e) => setEditCategoryName(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === 'Enter' && handleUpdateCategory()
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập tên loại sản phẩm"
                  autoFocus
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={resetEditForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  onClick={handleUpdateCategory}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Xác nhận xóa */}
        {showDeleteModal && deletingCategory && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]"
            onClick={() => setShowDeleteModal(false)}
          >
            <div
              className="bg-white rounded-lg shadow-xl w-96 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center mb-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Xác nhận xóa
                </h3>
                <p className="text-gray-600">
                  Bạn có chắc chắn muốn xóa loại sản phẩm{' '}
                  <strong>"{deletingCategory.name}"</strong>?
                </p>
                <p className="text-sm text-red-600 mt-2">
                  Hành động này không thể hoàn tác!
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  onClick={confirmDeleteCategory}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
