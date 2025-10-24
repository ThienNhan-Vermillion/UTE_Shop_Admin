'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { validateRegisterForm } from '../utils/validate';
import { registerRequestOtp, registerConfirm, checkUsernameAvailable, checkEmailAvailable } from '../services/api.services';

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [notice, setNotice] = useState<any>(null);
  const [step, setStep] = useState('form');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleUsernameBlur = async () => {
    const username = form.username?.trim();
    if (!username) return;
    try {
      const { available } = await checkUsernameAvailable(username);
      if (!available) {
        setErrors((prev: any) => ({ ...prev, username: 'Tên đăng nhập đã được sử dụng.' }));
      }
    } catch (err) {
      // bỏ qua lỗi mạng cho check này
    }
  };

  const handleEmailBlur = async () => {
    const email = form.email?.trim();
    if (!email) return;
    try {
      const { available } = await checkEmailAvailable(email);
      if (!available) {
        setErrors((prev: any) => ({ ...prev, email: 'Email đã được sử dụng.' }));
      }
    } catch (err) {
      // bỏ qua lỗi mạng cho check này
    }
  };

  const sendOtp = async () => {
    const errs = validateRegisterForm(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      const { fullName, username, email, phone, dob, address, password } = form;
      const payload = { fullName, username, email, phone, dob, address, password };
      await registerRequestOtp(payload);
      setStep('otp');
      setNotice({ type: 'info', text: 'OTP đã được gửi, vui lòng kiểm tra.' });
    } catch (err: any) {
      const serverErrors = err?.response?.data?.errors;
      if (serverErrors && typeof serverErrors === 'object') {
        setErrors(serverErrors);
      }
      setNotice({
        type: 'error',
        text: err?.response?.data?.message || 'Gửi OTP thất bại.',
      });
    }
  };

  const confirmRegister = async () => {
    if (!/^[0-9]{6}$/.test(form.otp)) {
      setErrors({ otp: 'OTP phải gồm 6 chữ số' });
      return;
    }

    try {
      const { fullName, username, email, phone, dob, address, password } = form;
      const userData = { fullName, username, email, phone, dob, address, password };
      await registerConfirm(form.otp, userData);
      setNotice({
        type: 'success',
        text: 'Đăng ký thành công! Bạn có thể đăng nhập.',
      });
      setForm({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        password: '',
        confirmPassword: '',
        otp: '',
      });
      setStep('form');
      setErrors({});
    } catch (err: any) {
      const serverErrors = err?.response?.data?.errors;
      if (serverErrors && typeof serverErrors === 'object') {
        setErrors(serverErrors);
      }
      setNotice({
        type: 'error',
        text: err?.response?.data?.message || 'Xác minh OTP thất bại.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Đăng ký
        </h2>

        {step === 'form' && (
          <form className="space-y-4">
            <div>
              <input
                id="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Họ và tên"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <input
                id="username"
                value={form.username}
                onChange={handleChange}
                onBlur={handleUsernameBlur}
                placeholder="Tên đăng nhập"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            
            <div>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleEmailBlur}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <input
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <input
                id="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
            </div>
            
            <div>
              <input
                id="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Địa chỉ"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Xác nhận mật khẩu"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            
            <button
              type="button"
              onClick={sendOtp}
              className="w-full py-3 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg"
            >
              Gửi OTP
            </button>
            
            <div className="mt-4 text-sm text-gray-600 text-center">
              Đã có tài khoản?{' '}
              <a href="/login" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Đăng nhập
              </a>
            </div>
          </form>
        )}

        {step === 'otp' && (
          <>
            <input
              id="otp"
              value={form.otp}
              onChange={handleChange}
              placeholder="Nhập OTP"
              className="w-full mb-1 px-4 py-3 border rounded-lg"
            />
            {errors.otp && <p className="text-red-500">{errors.otp}</p>}
            
            <button
              type="button"
              onClick={confirmRegister}
              className="w-full py-3 text-white font-semibold rounded-lg bg-green-600 hover:bg-green-700 mt-3"
            >
              Xác minh OTP & Đăng ký
            </button>
            
            <div className="mt-4 text-sm text-gray-600 text-center">
              Đã có tài khoản?{' '}
              <a href="/login" className="text-blue-600 font-semibold hover:underline">
                Đăng nhập
              </a>
            </div>
          </>
        )}

        {notice && (
          <div
            className={`mt-4 p-3 rounded-lg ${
              notice.type === 'success'
                ? 'bg-green-50 text-green-700'
                : notice.type === 'info'
                ? 'bg-blue-50 text-blue-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {notice.text}
          </div>
        )}
      </div>
    </div>
  );
}
