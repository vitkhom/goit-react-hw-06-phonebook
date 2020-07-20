import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('ADD_CONTACT', ({ name, number }) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));

const removeContact = createAction('REMOVE_CONTACT');

const filterChange = createAction('FILTER_CHANGE');

export default {
  addContact,
  removeContact,
  filterChange,
};
