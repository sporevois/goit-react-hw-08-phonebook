import FormAddContact from 'components/FormAddContact/FormAddContact';
import Filter from 'components/Filter/Filter';
import ContatList from 'components/ContactList/ContactList';
import styles from '../Contacts/Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Phonebook</h2>
        <FormAddContact />
        <h2>Contacts</h2>
        <Filter />
        <ContatList />
      </div>
    </div>
  );
};
export default Contacts;
