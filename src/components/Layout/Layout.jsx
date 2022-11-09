import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoaderThreeDots } from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

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
