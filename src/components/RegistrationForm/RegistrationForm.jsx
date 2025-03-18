import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserisLoading } from '../../redux/auth/selectors';
import s from './RegistrationForm.module.css';
import Loading from '../Loading';

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, '*Too short! It must be at least 3 symbols')
    .max(25, '*Too long! It must be less then 25 symbols')
    .required('*Required'),
  email: Yup.string().email('*Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, '*Password must be at least 8 symbols')
    .required('*Required'),
});

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    console.log(values);
    actions.resetForm();
  };

  const isLoading = useSelector(selectUserisLoading);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span className={s.spanForName}>Name:</span>
          <Field className={s.input} name="name" type="text" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={s.label}>
          <span className={s.spanForName}>Email:</span>
          <Field className={s.input} name="email" type="email" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={s.label}>
          <span className={s.spanForName}>Password:</span>
          <Field className={s.input} name="password" type="password" />
          <ErrorMessage name="password" component="span" />
        </label>

        <button className={s.button} type="submit">
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
