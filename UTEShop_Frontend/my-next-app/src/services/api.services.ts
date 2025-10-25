import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

console.log('API Base URL:', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Auth API
export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const checkUsernameAvailable = async (username: string) => {
  const response = await api.get(`/auth/check-username?username=${username}`);
  return response.data;
};

export const checkEmailAvailable = async (email: string) => {
  const response = await api.get(`/auth/check-email?email=${email}`);
  return response.data;
};

export const registerRequestOtp = async (userData: any) => {
  const response = await api.post('/auth/register/request-otp', userData);
  return response.data;
};

export const registerConfirm = async (otp: string, userData: any) => {
  const response = await api.post('/auth/register/confirm', { otp, ...userData });
  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await api.post('/auth/forgot-password', { email });
  return response.data;
};

export const verifyForgotOtp = async (email: string, otp: string) => {
  // Endpoint này không tồn tại trong backend, sẽ được xử lý trong resetPassword
  throw new Error('Use resetPassword instead');
};

export const resetPassword = async (email: string, otp: string, newPassword: string, confirmPassword: string) => {
  const response = await api.post('/auth/reset-password', {
    email,
    otp,
    newPassword,
    confirmPassword,
  });
  return response.data;
};

// Products API
export const getProducts = async () => {
  try {
    console.log('Fetching products from:', API_BASE_URL + '/products');
    const response = await api.get('/products');
    console.log('Products response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProduct = async (id: number) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const createProduct = async (productData: any, images?: File[]) => {
  try {
    const formData = new FormData();
    
    // Thêm các field text vào FormData
    Object.keys(productData).forEach(key => {
      if (productData[key] !== undefined && productData[key] !== null) {
        formData.append(key, productData[key]);
      }
    });

    // Thêm images vào FormData
    if (images && images.length > 0) {
      images.forEach(image => {
        formData.append('images', image);
      });
    }

    const response = await api.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const updateProduct = async (id: number, productData: any, images?: File[]) => {
  try {
    console.log('Updating product:', id, productData);
    
    const formData = new FormData();
    
    // Thêm các field text vào FormData
    Object.keys(productData).forEach(key => {
      if (productData[key] !== undefined && productData[key] !== null) {
        formData.append(key, productData[key]);
      }
    });

    // Thêm images vào FormData
    if (images && images.length > 0) {
      images.forEach(image => {
        formData.append('images', image);
      });
    }

    const response = await api.patch(`/products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Update response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error updating product:', error);
    console.error('Error response:', error.response?.data);
    throw error;
  }
};

export const hideProduct = async (id: number) => {
  try {
    const response = await api.patch(`/products/${id}/hide`);
    return response.data;
  } catch (error) {
    console.error('Error hiding product:', error);
    throw error;
  }
};

export const showProduct = async (id: number) => {
  try {
    const response = await api.patch(`/products/${id}/show`);
    return response.data;
  } catch (error) {
    console.error('Error showing product:', error);
    throw error;
  }
};

export const getOrders = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
}) => {
  try {
    const response = await api.get('/orders', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Users API
export const getUsers = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}) => {
  try {
    const response = await api.get('/users', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Reviews API
export const getReviews = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  is_hidden?: boolean;
}) => {
  try {
    const response = await api.get('/reviews', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getReview = async (id: number) => {
  try {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching review:', error);
    throw error;
  }
};

export const getReviewsByDrinkId = async (drinkId: number, params: {
  page?: number;
  limit?: number;
}) => {
  try {
    const response = await api.get(`/reviews/drink/${drinkId}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews by drink:', error);
    throw error;
  }
};

export const getDrinkRatingStats = async (drinkId: number) => {
  try {
    const response = await api.get(`/reviews/drink/${drinkId}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drink rating stats:', error);
    throw error;
  }
};

export const createReview = async (reviewData: {
  user_id: number;
  drink_id: number;
  order_id: number;
  rating: number;
  comment?: string;
}) => {
  try {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

export const updateReview = async (id: number, reviewData: {
  rating?: number;
  comment?: string;
  is_hidden?: boolean;
}) => {
  try {
    const response = await api.patch(`/reviews/${id}`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Error updating review:', error);
    throw error;
  }
};

export const toggleReviewHidden = async (id: number) => {
  try {
    const response = await api.patch(`/reviews/${id}/toggle-hidden`);
    return response.data;
  } catch (error) {
    console.error('Error toggling review hidden:', error);
    throw error;
  }
};

export const deleteReview = async (id: number) => {
  try {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting review:', error);
    throw error;
  }
};

