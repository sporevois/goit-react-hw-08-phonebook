import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoaderThreeDots } from 'components/Loader/Loader';
import useAuth from 'hooks/useAuth';
import styles from '../PublicRoute/PublicRoute.module.css';

export default function PublicRoute() {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={styles.container}>
      <Suspense fallback={<LoaderThreeDots />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
