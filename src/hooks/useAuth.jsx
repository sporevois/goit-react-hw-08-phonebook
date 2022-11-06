import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

const useAuth = () => {
  const result = useSelector(getIsLoggedIn);
  return result;
};

export default useAuth;
