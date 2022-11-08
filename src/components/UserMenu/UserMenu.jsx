import { useLogoutMutation } from 'redux/user/userApi';
import { getUserName } from 'redux/selectors';
import { useSelector } from 'react-redux';
import styles from '../UserMenu/UserMenu.module.css';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const [logout, { isLoading, error }] = useLogoutMutation();
  const name = useSelector(getUserName);

  return (
    <div className={styles.userMenu}>
      <p className={styles.user}>
        Wellcome back, <span className={styles.userName}>{name}</span> !
      </p>
      <button
        className={styles.btn}
        type="button"
        onClick={async () => await logout()}
      >
        <LogoutIcon style={{ fill: 'white' }} />
      </button>
    </div>
  );
};

export default UserMenu;
