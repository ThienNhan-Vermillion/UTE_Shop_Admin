'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../utils/authStorage';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace('/dashboard'); // Chuyển hướng đến dashboard nếu đã đăng nhập
    } else {
      router.replace('/login'); // Chuyển hướng đến trang login nếu chưa đăng nhập
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-lg text-gray-700">Đang tải...</p>
    </div>
  );
}
