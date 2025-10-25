'use client';

import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import ReviewsManagement from '../../components/ReviewsManagement';

export default function ReviewsPage() {
  return (
    <AdminLayout currentPage="reviews">
      <ReviewsManagement />
    </AdminLayout>
  );
}
