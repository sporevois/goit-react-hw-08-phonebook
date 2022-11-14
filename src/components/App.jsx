import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useRefreshQuery } from 'redux/user/userApi';
import Layout from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  const { isLoading } = useRefreshQuery();

  return (
    <>
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />} />
            </Route>
            <Route
              path="*"
              element={
                <div>
                  <h4>Sorry, page not found</h4>
                </div>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
