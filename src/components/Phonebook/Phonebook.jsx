import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import Section from '../../common/Section';
import Filter from '../Filter';
import ContactList from '../ContactList';

class Phonebook extends Component {
  render() {
    return (
      <>
        <ContactForm />

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}

export default Phonebook;
