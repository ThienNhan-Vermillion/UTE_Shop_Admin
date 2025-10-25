'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import ImageUpload from './ImageUpload';
import { getProducts, createProduct, updateProduct, hideProduct, showProduct } from '../services/api.services';

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

  const categories = [
    { id: 1, name: 'Cà phê' },
    { id: 2, name: 'Trà sữa' },
    { id: 3, name: 'Nước ép' },
    { id: 4, name: 'Smoothie' },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Lỗi khi tải danh sách sản phẩm:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      alert('Vui lòng nhập tên sản phẩm');
      return;
    }
    if (!formData.slug.trim()) {
      alert('Vui lòng nhập slug');
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
      // Chuẩn bị dữ liệu gửi đi
      const submitData = {
        name: formData.name.trim(),
        slug: formData.slug.trim(),
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
      size: product.size || '',
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
      size: '',
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
                      <label className="block text-sm font-medium text-gray-700">Slug</label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Loại sản phẩm</label>
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
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Kích cỡ</label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Chọn kích cỡ</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
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
