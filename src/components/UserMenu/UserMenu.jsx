import { useLogoutMutation } from 'redux/user/userApi';
import { getUserEmail } from 'redux/selectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const [logout, { isLoading, error }] = useLogoutMutation();
  const email = useSelector(getUserEmail);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={async () => await logout()}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
