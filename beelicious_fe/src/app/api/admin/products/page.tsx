'use client';
import authGuard from '@/components/login/AuthGuard';

const AdminProductsPage = () => {
  return <div>Admin Products Page</div>;
};

export default authGuard(AdminProductsPage);
