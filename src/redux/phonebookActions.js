import { v4 as uuidv4 } from 'uuid';
import types from './phonebookTypes';

const addContact = ({ name, number }) => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      contact: { id: uuidv4(), name, number },
    },
  };
};

const removeContact = id => {
  return {
    type: types.REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};

const filterChange = filter => {
  return {
    type: types.FILTER_CHANGE,
    payload: { filter },
  };
};

export default {
  addContact,
  removeContact,
  filterChange,
};
