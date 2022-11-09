import FormAddContact from 'components/FormAddContact/FormAddContact';
import Filter from 'components/Filter/Filter';
import ContatList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div>
      <FormAddContact />
      <Filter />
      <ContatList />
    </div>
  );
};
export default Contacts;
