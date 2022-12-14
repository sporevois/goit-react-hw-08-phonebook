import { useState } from 'react';
import { useLoginMutation } from 'redux/user/userApi';
import { LoaderRotatingLines } from 'components/Loader/Loader';
import styles from '../LoginForm/LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    await login({ email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.title}>Log in</p>
      <div className={styles.wrapper}>
        <label className={styles.formLabel} htmlFor="email">
          Email
        </label>
        <input
          className={styles.formInput}
          type="email"
          name="email"
          value={email}
          placeholder="Enter user email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.formLabel} htmlFor="password">
          Password
        </label>
        <input
          className={styles.formInput}
          type="password"
          name="password"
          value={password}
          placeholder="Password (min 7 symbols)"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Login
        {isLoading && <LoaderRotatingLines />}
      </button>
      {error && <p className={styles.error}>Wrong email or password</p>}
    </form>
  );
};
export default LoginForm;
