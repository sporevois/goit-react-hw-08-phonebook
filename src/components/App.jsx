import { Route, Routes } from 'react-router-dom';
import FormAddContact from './FormAddContact/FormAddContact';
import ContatList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<div>Log In Page</div>} />
        <Route path="register" element={<div>Register Page</div>} />
        <Route path="contacts" element={<div>Contact List</div>} />
        <Route
          path="*"
          element={
            <div>
              <h4>Sorry, page not found</h4>
            </div>
          }
        />
      </Route>
    </Routes>

    // <div
    //   style={{
    //     padding: '15px',
    //     fontSize: '20px',
    //     color: '#010101',
    //   }}
    // >
    //   <h1>Phonebook</h1>
    //   <FormAddContact />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContatList />
    // </div>
  );
};
