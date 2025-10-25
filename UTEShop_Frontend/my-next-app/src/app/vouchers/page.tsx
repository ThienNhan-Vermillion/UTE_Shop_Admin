import AdminLayout from '../../components/AdminLayout';
import VoucherManagement from '../../components/VoucherManagement';

export default function VouchersPage() {
  return (
    <AdminLayout currentPage="vouchers">
      <VoucherManagement />
    </AdminLayout>
  );
}
