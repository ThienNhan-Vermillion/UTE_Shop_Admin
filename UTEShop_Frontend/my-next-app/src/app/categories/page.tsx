'use client';

import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import CategoriesManagement from '../../components/CategoriesManagement';

export default function CategoriesPage() {
  return (
    <AdminLayout currentPage="categories">
      <CategoriesManagement />
    </AdminLayout>
  );
}
