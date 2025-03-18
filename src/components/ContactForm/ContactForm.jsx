import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={s.form}>
        <div className={s.field}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
        </div>

        <div className={s.field}>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} type="tel" name="number" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
        </div>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
