import { useSelector } from 'react-redux';
import { getFilter} from 'redux/selectors';

const useFilter = () => {
  const result = useSelector(getFilter);
  return result;
};

export default useFilter;
