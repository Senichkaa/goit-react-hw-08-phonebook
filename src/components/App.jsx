// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter';
// import { Header } from './App.styled';

// export const App = () => {
//   return (
//     <div>
//       <Header>Phonebook</Header>
//       <ContactForm />
//       <Header>Contacts</Header>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };

import { useAuth } from '../hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
};
