import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Section from '../../components/Section/Section';
import s from './ContactsPage.module.css';
import { selectUserisLoading } from '../../redux/auth/selectors';
import Loading from '../../components/Loading';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectUserisLoading);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Section>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <div className={s.line}></div>
      <SearchBox />
      <ContactList />
    </Section>
  );
};

export default ContactsPage;
