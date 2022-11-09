import { useState } from 'react';
import { useRegisterMutation } from 'redux/user/userApi';
import { LoaderRotatingLines } from 'components/Loader/Loader';
import styles from '../LoginForm/LoginForm.module.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    await register({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
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
      <p className={styles.title}>Register</p>
      <div className={styles.wrapper}>
        <label className={styles.formLabel} htmlFor="name">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          value={name}
          placeholder="Enter user name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.formLabel} htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
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
          className="form__input"
          type="password"
          name="password"
          value={password}
          placeholder="Password (min 7 symbols)"
          onChange={handleChange}
        />
      </div>
      <button className={styles.btn} type="submit">
        Register
        {isLoading && <LoaderRotatingLines />}
      </button>
      {error && (
        <p className={styles.error}>
          Wrong input data, or user is already exists
        </p>
      )}
    </form>
  );
};
export default RegistrationForm;
