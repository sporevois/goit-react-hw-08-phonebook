// import { useState } from 'react';
import { setEdit } from 'redux/edit/editSlise';
import { getEditState } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import UpdateForm from 'components/UpdateForm/UpdateForm';
import { LoaderRotatingLines } from 'components/Loader/Loader';
import styles from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();
  // const [isEdit, setIsEdit] = useState(false);

  // const startEdit = () => {
  //   setIsEdit(true);
  // };
  // const stopEdit = () => {
  //   setIsEdit(false);
  // };
  const dispatch = useDispatch();
  const isEdit = useSelector(getEditState);

  return (
    <>
      {error && <b>Request failed with Error code {error.originalStatus}</b>}
      <li className={styles.item}>
        {isEdit ? (
          <UpdateForm name={name} number={number} id={id} />
        ) : (
          <span>
            {name}: {number}
          </span>
        )}

        {!isEdit && (
          <span>
            <button
              className={styles.btn}
              type="button"
              onClick={() => deleteContact(id)}
              disabled={isLoading}
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
              // onClick={() => startEdit()}
              onClick={() => dispatch(setEdit(true))}
              disabled={isLoading}
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
