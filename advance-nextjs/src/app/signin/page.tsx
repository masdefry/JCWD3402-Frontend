'use client';
import { useFormik } from 'formik';
import { signinSchema } from '@/features/signin/schemas/signinSchema';

export default function Page() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className='mx-32'
      >
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Username</legend>
          <input
            id='username'
            name='username'
            type='text'
            className='input'
            placeholder='Type here'
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.username && (
            <div id='feedback'>{formik.errors.username}</div>
          )}
        </fieldset>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Password</legend>
          <input
            id='password'
            name='password'
            type='text'
            className='input'
            placeholder='Type here'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched. password && (
            <div id='feedback'>{formik.errorspassword}</div>
          )}
        </fieldset>
        <button
          type='submit'
          className='btn bg-green-500 text-white'
        >
          Signin
        </button>
      </form>
    </>
  );
}
