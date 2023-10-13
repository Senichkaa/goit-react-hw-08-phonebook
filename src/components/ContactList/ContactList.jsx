import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from '../App.styled';

import { fetchContacts, deleteContact } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {!isLoading &&
          filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <DeleteButton onClick={() => dispatch(deleteContact(id))}>
                Delete
              </DeleteButton>
            </li>
          ))}
      </ul>
      {isLoading && !error && (
        <p>Please wait. Your wish will be executed soon!</p>
      )}
    </div>
  );
};
