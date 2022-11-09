import { useState } from 'react';
import useGetEdit from 'hooks/useGetEdit';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';
import { isDublicate } from 'redux/contacts/contactsTools';
import { LoaderRotatingLines } from 'components/Loader/Loader';
import styles from '../FormAddContact/FormAddContact.module.css';

const FormAddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isEdit = useGetEdit();
  const [addContact, { isLoading, error }] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = async event => {
    event.preventDefault();
    if (isDublicate(name, contacts)) {
      return alert(`${name} is already in contacts.`);
    }
    await addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  return (
    <>
      <h2 className={styles.formTitle}>Phone book</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.title}>
          Name
          <input
            className={styles.field}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            disabled={isEdit}
            onChange={handleChange}
          />
        </label>
        <label className={styles.title}>
          Number
          <input
            className={styles.field}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            disabled={isEdit}
            onChange={handleChange}
          />
        </label>
        <button
          className={styles.btn}
          type="submit"
          disabled={isLoading || isEdit}
        >
          {isLoading ? (
            <span>
              Adding...
              <LoaderRotatingLines />
            </span>
          ) : (
            'Add contact'
          )}
        </button>
        {error && <b>Request failed with Error code {error.originalStatus}</b>}
      </form>
    </>
  );
};
export default FormAddContact;
