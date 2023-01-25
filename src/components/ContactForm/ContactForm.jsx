import React, { Component } from 'react';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';


export class ContactForm extends Component {

    handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const  number= event.target.number.value;
    
        this.props.onSubmit({ name, number });
    
        event.target.reset();
      };
    
  render() {
    return (
      <form className={style.phonebookInputs} onSubmit={this.handleSubmit}>
        <label className={style.phonebookInput}>
        <h4 className={style.phonebookInputTitle}>Name:</h4>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
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
          />
        </label>
        <button type="submit" className={style.buttonAdd}>
          add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};