import { combineReducers } from 'redux';
import types from './phonebookTypes';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload.contact];
    case types.REMOVE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CHANGE:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({ items, filter });
