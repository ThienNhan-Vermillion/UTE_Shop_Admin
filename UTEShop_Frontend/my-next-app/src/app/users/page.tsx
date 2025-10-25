import AdminLayout from '../../components/AdminLayout';
import UsersManagement from '../../components/UsersManagement';

export default function UsersPage() {
  return (
    <AdminLayout currentPage="users">
      <UsersManagement />
    </AdminLayout>
  );
}




