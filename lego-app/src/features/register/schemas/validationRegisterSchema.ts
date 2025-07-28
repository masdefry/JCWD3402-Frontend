import * as Yup from 'yup';

export const validationRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email format is invalid')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
