import styles from '../HomePage/HomePage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';
import useAuth from 'hooks/useAuth';

const HomePage = () => {
  const isLogin = useAuth();

  return <div className={styles.container}>{!isLogin && <LoginForm />}</div>;
};

export default HomePage;
