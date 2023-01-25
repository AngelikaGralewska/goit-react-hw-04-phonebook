import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

export const ContactsList = ({ contacts, deleteContact }) => (
  <ul className={style.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.contactsListItem}>
        <p>
          <span className={style.contactsListName}>{name}</span>
          <span className={style.contactsListName}>{number}</span>
        </p>
        <button
          className={style.buttonDelete}
          type="submit"
          onClick={() => deleteContact(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
  ),
  deleteContact: PropTypes.func.isRequired,
};
