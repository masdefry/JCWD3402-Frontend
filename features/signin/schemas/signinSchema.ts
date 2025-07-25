import * as yup from 'yup';

export const signinSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'Username have minimum 6 characters')
    .max(15, 'Username have maximum 15 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password have minimum 6 characters')
    .max(15, 'Password have maximum 15 characters')
    .required('Password is required'),
});
