import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import useAuth from 'hooks/useAuth';

const AppBar = () => {
  const isLogin = useAuth();

  return <header>{isLogin ? <UserMenu /> : <AuthNav />}</header>;
};
export default AppBar;
