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

export const createProduct = async (productData: any) => {
  try {
    const response = await api.post('/products', productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const updateProduct = async (id: number, productData: any) => {
  try {
    const response = await api.patch(`/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
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

