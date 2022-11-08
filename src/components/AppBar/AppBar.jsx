import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import useAuth from 'hooks/useAuth';
import Logo from 'components/Logo/Logo';
import styles from '../AppBar/AppBar.module.css';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  const isLogin = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink style={{ textDecoration: 'none' }} to="/">
          <Logo />
        </NavLink>
        {isLogin ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
export default AppBar;
