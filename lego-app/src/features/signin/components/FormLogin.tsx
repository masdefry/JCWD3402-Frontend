import { AiTwotoneMail } from 'react-icons/ai';
import { PiPasswordDuotone } from 'react-icons/pi';
import { useFormik } from 'formik';
import { validationLoginSchema } from '@/features/signin/schemas/validationLoginSchema';
import { IUserProps } from '../types';

export interface IFormLoginProps {
  onHandleLogin: ({
    email,
    password,
  }: Pick<IUserProps, 'email' | 'password'>) => void;
}

export default function FormLogin({ onHandleLogin }: IFormLoginProps) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      onHandleLogin({
        email: email,
        password: password,
      });
    },
    validationSchema: validationLoginSchema,
  });

  return (
    <form
      onSubmit={formik?.handleSubmit}
      className='py-5'
    >
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Email or username</legend>
        <div className='flex items-center gap-2 border-b-1 border-gray-300'>
          <AiTwotoneMail className='text-2xl text-gray-500' />
          <input
            id='email'
            name='email'
            onChange={formik?.handleChange}
            value={formik?.values?.email}
            type='text'
            placeholder='Type your email or username'
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0 italic'
          />
        </div>
        <p className='label text-red-500'>
          {' '}
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : null}
        </p>
      </fieldset>
      <fieldset className='fieldset'>
        <legend className='fieldset-legend'>Password account</legend>
        <div className='flex items-center gap-2 border-b-1 border-gray-300'>
          <PiPasswordDuotone className='text-2xl text-gray-500' />
          <input
            id='password'
            name='password'
            onChange={formik?.handleChange}
            value={formik?.values?.password}
            type='password'
            placeholder='Type your password'
            className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0 italic'
          />
        </div>
        <p className='label text-red-500'>
          {' '}
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : null}
        </p>
      </fieldset>
      <button
        type='submit'
        className='btn bg-blue-400 text-white rounded-full mt-3 py-6 w-1/2 mx-auto'
      >
        Signin
      </button>
    </form>
  );
}
