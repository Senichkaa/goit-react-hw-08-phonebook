import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
import { Header } from './App.styled';

export const App = () => {
  return (
    <div>
      <Header>Phonebook</Header>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter />
      <ContactList />
    </div>
  );
};
