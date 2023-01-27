import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import style from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ??[
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ]});

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({name, number}) => {
    const normalizedName = name.toLowerCase();

    let addedContact = false;
    contacts.forEach(element => {
      if (element.name.toLowerCase() === normalizedName) {
        addedContact = true;
        alert(`${name} is already in contacts`);
      }
    });

    if (addedContact) {
      return;
    }
    
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    
    setContacts(prevState =>  [...prevState, contact],);
  };

  const changeFilter = event => {
    setFilter (event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = deleteItem => {
    setContacts(prevState => prevState.filter(contact => contact.id !== deleteItem));
  };


  return (
    <div className= {style.mainDiv} >
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={style.title}>Contacts</h2>
      <Filter value={filter} filterChange={changeFilter} />
      <ContactsList contacts={getFilteredContacts()} deleteContact={deleteContact} />
    </div>
  );
};

