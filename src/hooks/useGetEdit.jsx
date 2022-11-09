import { useSelector } from 'react-redux';
import { getEditState } from 'redux/selectors';

const useGetEdit = () => {
  const result = useSelector(getEditState);
  return result;
};

export default useGetEdit;
