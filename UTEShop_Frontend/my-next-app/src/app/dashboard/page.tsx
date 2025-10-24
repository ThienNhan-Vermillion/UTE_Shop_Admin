import AdminLayout from '../../components/AdminLayout';
import AdminDashboard from '../../components/AdminDashboard';

export default function DashboardPage() {
  return (
    <AdminLayout currentPage="dashboard">
      <AdminDashboard />
    </AdminLayout>
  );
}
