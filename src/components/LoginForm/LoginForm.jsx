import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/user/userApi';
import styles from '../LoginForm/LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    await login({ email, password });
    setEmail('');
    setPassword('');
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
      <h2>Log in</h2>
      <div className="form-body">
        <div className="email">
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
        <div className="password">
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
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          Login
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
