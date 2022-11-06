import { useState } from 'react';
import { useLoginMutation } from 'redux/user/userApi';

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
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="email">
          <label className="form__label" htmlFor="email">
            Email
            <input
              className="form__input"
              type="email"
              name="email"
              value={email}
              placeholder="Enter user email"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">
            Password
            <input
              className="form__input"
              type="password"
              name="password"
              value={password}
              placeholder="Password (min 7 symbols)"
              onChange={handleChange}
            />
          </label>
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
