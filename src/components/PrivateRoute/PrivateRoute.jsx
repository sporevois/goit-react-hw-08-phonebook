import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoaderThreeDots } from 'components/Loader/Loader';
import useAuth from 'hooks/useAuth';
import styles from '../PrivateRoute/PrivateRoute.module.css';

const PrivateRoute = () => {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.container}>
      <Suspense fallback={<LoaderThreeDots />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default PrivateRoute;
