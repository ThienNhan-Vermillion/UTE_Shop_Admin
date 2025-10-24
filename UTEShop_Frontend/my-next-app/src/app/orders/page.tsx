import AdminLayout from '../../components/AdminLayout';
import OrdersManagement from '../../components/OrdersManagement';

export default function OrdersPage() {
  return (
    <AdminLayout currentPage="orders">
      <OrdersManagement />
    </AdminLayout>
  );
}
