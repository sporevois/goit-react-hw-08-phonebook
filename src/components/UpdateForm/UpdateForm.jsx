import { useState } from 'react';
import { setEdit } from 'redux/edit/editSlise';
import { useDispatch } from 'react-redux';
import { useUpdateContactMutation } from 'redux/contacts/contactsApi';
import { LoaderRotatingLines } from 'components/Loader/Loader';
import styles from '../UpdateForm/UpdateForm.module.css';

const UpdateForm = ({ name, number, id }) => {
  const [updateContact, { isLoading, error }] = useUpdateContactMutation();
  const [newName, setNewName] = useState(`${name}`);
  const [newNumber, setNewNumber] = useState(`${number}`);
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();

    const contact = {
      id,
      values: {
        name: newName,
        number: newNumber,
      },
    };

    await updateContact(contact);
    dispatch(setEdit(null));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'newName':
        return setNewName(value);
      case 'newNumber':
        return setNewNumber(value);
      default:
        return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.field}
        type="text"
        name="newName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={newName}
        onChange={handleChange}
      />
      <input
        className={styles.field}
        type="tel"
        name="newNumber"
        value={newNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <div className={styles.wrapper}>
        <button
          className={styles.btn}
          type="submit"
          disabled={name === newName && number === newNumber}
        >
          {isLoading ? (
            <span>
              <LoaderRotatingLines />
              Saving...
            </span>
          ) : (
            'Save'
          )}
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={() => dispatch(setEdit(null))}
        >
          Cancel
        </button>
      </div>
      {error && <p className={styles.error}>Something gone wrong</p>}
    </form>
  );
};
export default UpdateForm;
