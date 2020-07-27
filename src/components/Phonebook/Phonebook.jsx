import React from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Section from '../../common/Section';

const Phonebook = () => {
  return (
    <>
      <ContactForm />

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default Phonebook;
