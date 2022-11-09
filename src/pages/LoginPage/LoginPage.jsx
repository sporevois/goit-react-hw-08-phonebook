import LoginForm from 'components/LoginForm/LoginForm';
import styles from '../HomePage/HomePage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
