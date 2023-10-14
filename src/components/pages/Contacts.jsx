import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter';
import { Header } from 'components/App.styled';

export default function Contacts() {
  return (
    <div>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter />
      <ContactList />
    </div>
  );
}
