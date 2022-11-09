import { setFilter } from 'redux/filter/filterSlice';
import useEdit from 'hooks/useGetEdit';
import useFilter from 'hooks/useFilter';
import { useDispatch } from 'react-redux';
import styles from '../Filter/Filter.module.css';

const Filter = () => {
  const filter = useFilter();
  const isEdit = useEdit();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <label className={styles.title}>
      Find conacts by name
      <input
        className={styles.field}
        type="text"
        name="filter"
        value={filter}
        disabled={isEdit}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
