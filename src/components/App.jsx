import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addContact = ({name, number}) => {
    const normalizedName = name.toLowerCase();

    let addedContact = false;
    this.state.contacts.forEach(element => {
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
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

   return contacts.filter(contact =>
   contact.name.toLowerCase().includes(normalizedFilter)
    );
 };

  deleteContact = deleteItem => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteItem),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const getContactItem = this.getContacts();

    return (
      <div className= {style.mainDiv} >
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={style.title}>Contacts</h2>
        <Filter value={filter} filterChange={this.changeFilter} />
        <ContactsList contacts={getContactItem} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

