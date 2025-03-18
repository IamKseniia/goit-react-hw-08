import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
