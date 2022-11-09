import styles from '../HomePage/HomePage.module.css';
// import LoginForm from 'components/LoginForm/LoginForm';
// import useAuth from 'hooks/useAuth';
import GreeetMessage from 'components/GreetMessage/GreetMessage';

const HomePage = () => {
  // const isLogin = useAuth();

  return (
    <div className={styles.container}>
      <GreeetMessage />
      {/* {!isLogin && <LoginForm />} */}
    </div>
  );
};

export default HomePage;
