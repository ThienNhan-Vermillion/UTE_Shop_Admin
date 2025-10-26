'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import ImageUpload from './ImageUpload';
import { getProducts, createProduct, updateProduct, hideProduct, showProduct, getCategories } from '../services/api.services';

interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  price: number;
  salePrice?: number;
  size?: string;
  stock?: number;
  views?: number;
  sold?: number;
  image_url?: string;
  category_id: number;
  is_hidden: boolean;
  created_at: string;
  updated_at: string;
}

interface ProductFormData {
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice: number;
  size: string;
  stock: number;
  views: number;
  sold: number;
  image_url: string;
  category_id: number;
}

const ProductsManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    slug: '',
    description: '',
    price: 0,
    salePrice: 0,
    size: '',
    stock: 0,
    views: 0,
    sold: 0,
    image_url: '',
    category_id: 1,
  });

  const [categories, setCategories] = useState<Array<{id: number, name: string}>>([]);
  const limit = 10;

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts(currentPage, limit);
      if (data.success) {
        setProducts(data.data);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
      }
    } catch (error) {
      console.error('Lỗi khi tải danh sách sản phẩm:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error('Lỗi khi tải danh sách loại sản phẩm:', error);
      // Fallback to default categories if API fails
      setCategories([
        { id: 1, name: 'Cà phê' },
        { id: 2, name: 'Trà sữa' },
        { id: 3, name: 'Nước ép' },
        { id: 4, name: 'Sinh tố' },
      ]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      alert('Vui lòng nhập tên sản phẩm');
      return;
    }
    if (formData.price <= 0) {
      alert('Vui lòng nhập giá hợp lệ');
      return;
    }
    if (formData.category_id <= 0) {
      alert('Vui lòng chọn loại sản phẩm');
      return;
    }

    try {
      // Tự động tạo slug từ tên sản phẩm
      const autoSlug = formData.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim();

      // Chuẩn bị dữ liệu gửi đi
      const submitData = {
        name: formData.name.trim(),
        slug: autoSlug,
        description: formData.description.trim(),
        price: Number(formData.price),
        salePrice: formData.salePrice > 0 ? Number(formData.salePrice) : undefined,
        size: formData.size.trim() || undefined,
        stock: Number(formData.stock) || 0,
        views: Number(formData.views) || 0,
        sold: Number(formData.sold) || 0,
        image_url: formData.image_url.trim() || undefined,
        category_id: Number(formData.category_id),
      };

      let data;
      if (editingProduct) {
        data = await updateProduct(editingProduct.id, submitData, selectedImages);
      } else {
        data = await createProduct(submitData, selectedImages);
      }
      
      if (data.success) {
        setSuccessMessage(editingProduct ? 'Sản phẩm đã được cập nhật thành công!' : 'Sản phẩm đã được thêm thành công!');
        setShowSuccessModal(true);
        setShowModal(false);
        resetForm();
        setCurrentPage(1); // Reset về trang 1
        fetchProducts();
      } else {
        alert('Có lỗi xảy ra: ' + data.message);
      }
    } catch (error: any) {
      console.error('Lỗi khi lưu sản phẩm:', error);
      if (error.response?.data?.message) {
        alert('Có lỗi xảy ra: ' + error.response.data.message);
      } else if (error.response?.data?.error) {
        alert('Có lỗi xảy ra: ' + error.response.data.error);
      } else {
        alert('Có lỗi xảy ra khi lưu sản phẩm');
      }
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      slug: product.slug,
      description: product.description || '',
      price: product.price || 0,
      salePrice: product.salePrice || 0,
      size: product.size || 'M',
      stock: product.stock || 0,
      views: product.views || 0,
      sold: product.sold || 0,
      image_url: product.image_url || '',
      category_id: product.category_id || 1,
    });

    // Xử lý existing images
    if (product.image_url) {
      const images = product.image_url.split(',').filter(url => url.trim());
      setExistingImages(images);
    } else {
      setExistingImages([]);
    }

    setSelectedImages([]);
    setShowModal(true);
  };

  const handleHide = async (id: number) => {
    if (confirm('Bạn có chắc chắn muốn ẩn sản phẩm này?')) {
      try {
        const data = await hideProduct(id);
        
        if (data.success) {
          setSuccessMessage('Sản phẩm đã được ẩn thành công!');
          setShowSuccessModal(true);
          fetchProducts();
        } else {
          alert('Có lỗi xảy ra: ' + data.message);
        }
      } catch (error: any) {
        console.error('Lỗi khi ẩn sản phẩm:', error);
        if (error.code === 'NETWORK_ERROR' || error.message?.includes('Network Error')) {
          alert('Không thể kết nối đến server. Vui lòng kiểm tra backend có đang chạy không.');
        } else {
          alert('Có lỗi xảy ra khi ẩn sản phẩm: ' + (error.response?.data?.message || error.message));
        }
      }
    }
  };

  const handleShow = async (id: number) => {
    try {
      const data = await showProduct(id);
      
      if (data.success) {
        setSuccessMessage('Sản phẩm đã được hiển thị thành công!');
        setShowSuccessModal(true);
        fetchProducts();
      } else {
        alert('Có lỗi xảy ra: ' + data.message);
      }
    } catch (error: any) {
      console.error('Lỗi khi hiển thị sản phẩm:', error);
      if (error.code === 'NETWORK_ERROR' || error.message?.includes('Network Error')) {
        alert('Không thể kết nối đến server. Vui lòng kiểm tra backend có đang chạy không.');
      } else {
        alert('Có lỗi xảy ra khi hiển thị sản phẩm: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      price: 0,
      salePrice: 0,
      size: 'M',
      stock: 0,
      views: 0,
      sold: 0,
      image_url: '',
      category_id: 1,
    });
    setEditingProduct(null);
    setSelectedImages([]);
    setExistingImages([]);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSuccessMessage('');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleRemoveExistingImage = (index: number) => {
    const newExistingImages = existingImages.filter((_, i) => i !== index);
    setExistingImages(newExistingImages);
  };

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Không xác định';
  };


  return (
    <AdminLayout currentPage="products">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Quản lý sản phẩm</h1>
          <button
            onClick={openAddModal}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <i className="fas fa-plus mr-2"></i>
            Thêm sản phẩm
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}>
              <table className="min-w-full divide-y divide-gray-200" style={{ minWidth: '1400px' }}>
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hình ảnh
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tên sản phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loại sản phẩm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá KM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tồn kho
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Đã bán
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
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-1">
                        {(() => {
                          const images = product.image_url 
                            ? product.image_url.split(',').filter(url => url.trim())
                            : [];
                          
                          return images.slice(0, 3).map((imageUrl, index) => (
                            <div key={index} className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-lg object-cover border"
                                src={imageUrl}
                                alt={`${product.name} ${index + 1}`}
                              />
                            </div>
                          ));
                        })()}
                        {!product.image_url && (
                          <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                            <i className="fas fa-image text-gray-400"></i>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{getCategoryName(product.category_id)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatPrice(product.price)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {product.salePrice && product.salePrice > 0 ? formatPrice(product.salePrice) : '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.stock || 0}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.sold || 0}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.is_hidden 
                          ? 'bg-red-100 text-red-800' 
                          : (product.stock || 0) <= 0
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {product.is_hidden ? 'Đã ẩn' : (product.stock || 0) <= 0 ? 'Hết hàng' : 'Còn hàng'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Sửa
                      </button>
                      {product.is_hidden ? (
                        <button
                          onClick={() => handleShow(product.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          Hiện
                        </button>
                      ) : (
                        <button
                          onClick={() => handleHide(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Ẩn
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Trước
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Sau
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Hiển thị{' '}
                      <span className="font-medium">{(currentPage - 1) * limit + 1}</span>
                      {' '}đến{' '}
                      <span className="font-medium">
                        {Math.min(currentPage * limit, total)}
                      </span>
                      {' '}trong{' '}
                      <span className="font-medium">{total}</span>
                      {' '}kết quả
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              currentPage === pageNum
                                ? 'z-10 bg-green-50 border-green-500 text-green-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal thêm/sửa sản phẩm */}
        {showModal && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]"
            onClick={closeModal}
          >
            <div 
              className="relative mx-auto p-6 border w-full max-w-lg shadow-lg rounded-md bg-white m-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-3">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {editingProduct ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Slug (Tự động tạo)</label>
                      <div className="mt-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-600">
                        {formData.name ? 
                          formData.name
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-')
                            .replace(/-+/g, '-')
                            .trim() 
                          : 'Sẽ tự động tạo từ tên sản phẩm'
                        }
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Loại sản phẩm</label>
                      <div className="flex gap-2">
                        <select
                          value={formData.category_id}
                          onChange={(e) => setFormData({ ...formData, category_id: parseInt(e.target.value) })}
                          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          required
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Kích cỡ</label>
                      <div className="mt-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-600">
                        M (Mặc định)
                      </div>
                      <input
                        type="hidden"
                        value="M"
                        onChange={(e) => setFormData({ ...formData, size: 'M' })}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Giá (VNĐ)</label>
                      <input
                        type="number"
                        value={formData.price || ''}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                        min="0"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Giá KM (VNĐ)</label>
                      <input
                        type="number"
                        value={formData.salePrice || ''}
                        onChange={(e) => setFormData({ ...formData, salePrice: parseFloat(e.target.value) || 0 })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        min="0"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Tồn kho</label>
                      <input
                        type="number"
                        value={formData.stock || ''}
                        onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        min="0"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Lượt xem</label>
                      <input
                        type="number"
                        value={formData.views || ''}
                        onChange={(e) => setFormData({ ...formData, views: parseInt(e.target.value) || 0 })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        min="0"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Đã bán</label>
                      <input
                        type="number"
                        value={formData.sold || ''}
                        onChange={(e) => setFormData({ ...formData, sold: parseInt(e.target.value) || 0 })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        min="0"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <ImageUpload
                      onImagesChange={setSelectedImages}
                      maxImages={3}
                      existingImages={existingImages}
                      onRemoveExistingImage={handleRemoveExistingImage}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">URL ảnh bổ sung (tùy chọn)</label>
                    <input
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="https://localhost:3001/uploads/tên-ảnh.jpg"
                    />
                    <p className="text-xs text-gray-500 mt-1">Chỉ cần nhập tên ảnh sau "uploads/" (ví dụ: caphe.jpg)</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={2}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      {editingProduct ? 'Cập nhật' : 'Thêm sản phẩm'}
                    </button>
                  </div>
                </form>
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
    </AdminLayout>
  );
};

export default ProductsManagement;
