import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';

const addContact = (state, action) => [...state, action.payload.contact];
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [phonebookActions.addContact]: addContact,
  [phonebookActions.removeContact]: removeContact,
});

const filter = createReducer('', {
  [phonebookActions.filterChange]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });
