import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { LoaderThreeDots } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<LoaderThreeDots />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
