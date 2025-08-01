'use client';
import FormLogin from '@/features/signin/components/FormLogin';
import useHandleLoginHook from '@/features/signin/hooks/useHandleLoginHook';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './../../firebase';
const provider = new GoogleAuthProvider();

export default function Page() {
  const { onHandleLogin } = useHandleLoginHook();

  const onHandleLoginWithGoogle = async () => {
    await signInWithPopup(auth, provider); // email
  };

  return (
    <>
      <div className='flex justify-center p-32'>
        <div className='min-w-xl max-w-xl bg-gray-100 p-10 rounded-md'>
          <h1 className='text-2xl font-bold text-center'>
            Sign in or create your LEGO® account
          </h1>
          <FormLogin onHandleLogin={onHandleLogin} />
          <button
            onClick={onHandleLoginWithGoogle}
            className='btn bg-red-500 text-white'
          >
            Signin with Google
          </button>
        </div>
      </div>
    </>
  );
}
