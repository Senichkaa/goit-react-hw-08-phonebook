import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter';
import { Header, ContactsDivWrap } from 'components/App.styled';

export default function Contacts() {
  return (
    <ContactsDivWrap>
      <Header>Contacts</Header>
      <ContactForm />
      <Header>Filter</Header>
      <Filter />
      <ContactList />
    </ContactsDivWrap>
  );
}
