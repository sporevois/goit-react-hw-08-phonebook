import useGetEdit from 'hooks/useGetEdit';
import { setEdit } from 'redux/edit/editSlise';
import { useDispatch } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { LoaderRotatingLines } from 'components/Loader/Loader';
import UpdateForm from 'components/UpdateForm/UpdateForm';
import styles from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const isEdit = useGetEdit();

  return (
    <>
      {error && <b>Request failed with Error code {error.originalStatus}</b>}
      <li className={styles.item}>
        {isEdit === id ? (
          <UpdateForm name={name} number={number} id={id} />
        ) : (
          <span>
            {name}: {number}
          </span>
        )}

        {isEdit !== id && (
          <span>
            <button
              className={styles.btn}
              type="button"
              onClick={() => deleteContact(id)}
              disabled={isLoading || isEdit}
            >
              {isLoading ? (
                <span>
                  Deleting...
                  <LoaderRotatingLines />
                </span>
              ) : (
                'Delete'
              )}
            </button>

            <button
              className={styles.btn}
              type="button"
              onClick={() => dispatch(setEdit(id))}
              disabled={isLoading || isEdit}
            >
              Edit
            </button>
          </span>
        )}
      </li>
    </>
  );
};
export default ContactItem;
