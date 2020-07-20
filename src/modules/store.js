import { configureStore } from '@reduxjs/toolkit';
import contacts from './phonebookReducer';

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
