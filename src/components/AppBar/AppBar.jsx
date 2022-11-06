import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import useAuth from 'hooks/useAuth';
import Logo from 'components/Logo/Logo';

const AppBar = () => {
  const isLogin = useAuth();

  return (
    <header>
      <Logo />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
