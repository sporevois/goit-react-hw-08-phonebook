import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import useAuth from 'hooks/useAuth';
import Logo from 'components/Logo/Logo';
import styles from '../AppBar/AppBar.module.css';

const AppBar = () => {
  const isLogin = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        {isLogin ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
export default AppBar;
