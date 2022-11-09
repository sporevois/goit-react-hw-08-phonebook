import useFilter from 'hooks/useFilter';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { getFilteredContacts } from 'redux/contacts/contactsTools';
import { LoaderThreeDots } from 'components/Loader/Loader';
import ContactItem from 'components/ContactItem/ContactItem';
import styles from '../ContactList/ContactList.module.css';

const ContatList = () => {
  const { data: contacts, isLoading, error } = useFetchContactsQuery();
  const filter = useFilter();
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      {isLoading && <LoaderThreeDots />}
      {error && <b>Request failed with Error code {error.originalStatus}</b>}
      <ul>
        {filteredContacts?.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContatList;
