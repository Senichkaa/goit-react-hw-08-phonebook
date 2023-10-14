import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, FilterDivWrap, FilterLi, FilterUl } from '../App.styled';

import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';

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
    <FilterDivWrap>
      <FilterUl>
        {!isLoading &&
          filteredContacts.map(({ id, name, number }) => (
            <FilterLi key={id}>
              {name}: {number}
              <DeleteButton onClick={() => dispatch(deleteContact(id))}>
                Delete
              </DeleteButton>
            </FilterLi>
          ))}
      </FilterUl>
      {isLoading && !error && (
        <p>Please wait. Your wish will be executed soon!</p>
      )}
    </FilterDivWrap>
  );
};
