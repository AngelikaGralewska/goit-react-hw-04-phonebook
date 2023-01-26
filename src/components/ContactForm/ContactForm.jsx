import React from 'react';
import { useState } from 'react';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';


export const ContactForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const handleChangeName = event => {
      const { value } = event.target;
      setName(value);
    };

    const handleChangeNumber = event => {
      const { value } = event.target;
      setNumber(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
    
        onSubmit({ name, number });
  
        event.target.reset();
    };
    
 
    return (
      <form className={style.phonebookInputs} onSubmit={handleSubmit}>
        <label className={style.phonebookInput}>
        <h4 className={style.phonebookInputTitle}>Name:</h4>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
          />
        </label>
        <label className={style.phonebookInput}>
          <h4 className={style.phonebookInputTitle}>Number:</h4>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeNumber}
          />
        </label>
        <button type="submit" className={style.buttonAdd}>
          add contact
        </button>
      </form>
    );
  }


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};