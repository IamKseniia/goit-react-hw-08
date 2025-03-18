import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import s from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={s.contactBox}>
      <div className={s.data}>
        <p>
          <FaUser />
          {contact.name}
        </p>
        <address>
          <FaPhone />
          {contact.number}
        </address>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
