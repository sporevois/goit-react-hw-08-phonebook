import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="login" end>
          Log in
        </NavLink>
        <NavLink to="register">Register</NavLink>
      </nav>
    </header>
  );
};
export default AppBar;
