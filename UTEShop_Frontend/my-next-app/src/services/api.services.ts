import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

console.log('API Base URL:', API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// ======================= AUTH API =======================
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

export const resetPassword = async (
  email: string,
  otp: string,
  newPassword: string,
  confirmPassword: string
) => {
  const response = await api.post('/auth/reset-password', {
    email,
    otp,
    newPassword,
    confirmPassword,
  });
  return response.data;
};

// ======================= PRODUCTS API =======================
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProduct = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (productData: any, images?: File[]) => {
  const formData = new FormData();
  Object.keys(productData).forEach(key => {
    if (productData[key] !== undefined && productData[key] !== null) {
      formData.append(key, productData[key]);
    }
  });
  if (images?.length) images.forEach(img => formData.append('images', img));

  const response = await api.post('/products', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const updateProduct = async (id: number, productData: any, images?: File[]) => {
  const formData = new FormData();
  Object.keys(productData).forEach(key => {
    if (productData[key] !== undefined && productData[key] !== null) {
      formData.append(key, productData[key]);
    }
  });
  if (images?.length) images.forEach(img => formData.append('images', img));

  const response = await api.patch(`/products/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const hideProduct = async (id: number) => {
  const response = await api.patch(`/products/${id}/hide`);
  return response.data;
};

export const showProduct = async (id: number) => {
  const response = await api.patch(`/products/${id}/show`);
  return response.data;
};

// ======================= ORDERS API =======================
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

// ======================= USERS API =======================
export const getUsers = async (params?: {
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

export const updateUser = async (id: number, userData: any) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// ======================= REVIEWS API =======================
export const getReviews = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  is_hidden?: boolean;
}) => {
  const response = await api.get('/reviews', { params });
  return response.data;
};

export const getReview = async (id: number) => {
  const response = await api.get(`/reviews/${id}`);
  return response.data;
};

export const getReviewsByDrinkId = async (drinkId: number, params?: { page?: number; limit?: number }) => {
  const response = await api.get(`/reviews/drink/${drinkId}`, { params });
  return response.data;
};

export const getDrinkRatingStats = async (drinkId: number) => {
  const response = await api.get(`/reviews/drink/${drinkId}/stats`);
  return response.data;
};

export const createReview = async (reviewData: {
  user_id: number;
  drink_id: number;
  order_id: number;
  rating: number;
  comment?: string;
}) => {
  const response = await api.post('/reviews', reviewData);
  return response.data;
};

export const updateReview = async (
  id: number,
  reviewData: { rating?: number; comment?: string; is_hidden?: boolean }
) => {
  const response = await api.patch(`/reviews/${id}`, reviewData);
  return response.data;
};

export const toggleReviewHidden = async (id: number) => {
  const response = await api.patch(`/reviews/${id}/toggle-hidden`);
  return response.data;
};

export const deleteReview = async (id: number) => {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
};

// ======================= VOUCHERS API =======================
export const getVouchers = async () => {
  const response = await api.get('/vouchers');
  return response.data;
};

export const getVoucher = async (id: number) => {
  const response = await api.get(`/vouchers/${id}`);
  return response.data;
};

export const updateVoucher = async (id: number, voucherData: any) => {
  const response = await api.patch(`/vouchers/${id}`, voucherData);
  return response.data;
};

export const deleteVoucher = async (id: number) => {
  const response = await api.delete(`/vouchers/${id}`);
  return response.data;
};

export const markVoucherAsUsed = async (id: number) => {
  const response = await api.patch(`/vouchers/${id}/mark-used`);
  return response.data;
};
