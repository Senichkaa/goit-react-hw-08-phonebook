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

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('../components/pages/Home'));
// const Contacts = lazy(() => import('../components/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Wait a minute! We are trying to fetch your data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
