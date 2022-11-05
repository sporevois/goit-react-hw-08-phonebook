import FormAddContact from 'components/FormAddContact/FormAddContact';
import Filter from 'components/Filter/Filter';
import ContatList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div
      style={{
        padding: '15px',
        fontSize: '20px',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <FormAddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContatList />
    </div>
  );
};
export default Contacts;
