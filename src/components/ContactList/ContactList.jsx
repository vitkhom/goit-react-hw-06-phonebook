import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import phonebookActions from '../../modules/phonebookActions';

// import './ContactList.scss';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => (
        <li className="contacts__item" key={id}>
          <span className="contacts__name">{name}:</span>
          <span className="contacts__number">{number}</span>
          <button className="removeButton" onClick={() => onRemove(id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func,
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = {
  onRemove: phonebookActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
