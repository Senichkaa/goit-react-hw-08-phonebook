import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { handlePending, handleRejected, handleFulfilled } from './handlers';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
    items: [],
    isLoading: false,
    error: null,
    },
    extraReducers: {
        [fetchContacts.pending]:handlePending,
        [fetchContacts.fulfilled](state, action) {
          handleFulfilled(state);
          state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
          [addContact.fulfilled](state, action) {
            handleFulfilled(state);
            state.items.push(action.payload);
          },
          [addContact.rejected]: handleRejected,

          [deleteContact.pending]: handlePending,
          [deleteContact.fulfilled](state, action) {
            handleFulfilled(state);
            const index = state.items.findIndex(
              task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          [deleteContact.rejected]: handleRejected,
      },
})

export const contactsReducer = contactSlice.reducer;