import { useState } from 'react';
import { useUpdateContactMutation } from 'redux/contacts/contactsApi';
import { LoaderRotatingLines } from 'components/Loader/Loader';
const UpdateForm = ({ name, number, id, stopEdit }) => {
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const [newName, setNewName] = useState(`${name}`);
  const [newNumber, setNewNumber] = useState(`${number}`);

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
    stopEdit();
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={newName}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="newNumber"
        value={newNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button type="submit" disabled={name === newName && number === newNumber}>
        {isLoading ? (
          <span>
            <LoaderRotatingLines />
            Saving...
          </span>
        ) : (
          'Save'
        )}
      </button>
      <button type="button" onClick={() => stopEdit()}>
        Cancel
      </button>
    </form>
  );
};
export default UpdateForm;
