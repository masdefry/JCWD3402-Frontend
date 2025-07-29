import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email format is invalid')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
