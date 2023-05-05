import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import css from './App.module.css';
import Form from 'components/Form/Form';
import React from 'react';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };
  const handleFilter = e => {
    setFilter(e.target.value.trim());
  };
  const filteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const removeContact = id => {
    setContacts(contacts.filter(i => i.id !== id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form createContact={createContact} />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} value={filter} />
      <ContactList
        contacts={filteredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
};

export default App;
