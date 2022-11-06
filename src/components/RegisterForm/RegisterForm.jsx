import { useRegisterMutation } from 'redux/user/userApi';
import { useState } from 'react';

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
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="name">
            Name
            <input
              className="form__input"
              type="text"
              name="name"
              value={name}
              placeholder="Enter user name"
              onChange={handleChange}
            />
          </label>
        </div>
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
          Register
        </button>
      </div>
    </form>
  );
};
export default RegistrationForm;
