import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserisLoading } from '../../redux/auth/selectors';
import s from '../RegistrationForm/RegistrationForm.module.css';
import Loading from '../Loading';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('*Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, '*Password must be at least 8 symbols')
    .required('*Required'),
});

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const isLoading = useSelector(selectUserisLoading);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
