import { IUserProps } from '@/features/signin/types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/stores/useAuthStore';

export default function useHandleLoginHook() {
  const router = useRouter();
  const { setAuthLogin } = useAuthStore();

  const onHandleLogin = async ({
    email,
    password,
  }: Pick<IUserProps, 'email' | 'password'>) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/authentication/login',
        {
          email,
          password,
        }
      );

      setAuthLogin({
        email: res?.data?.data?.email,
        objectId: res?.data?.data?.objectId,
      });
      toast.success(res?.data?.message);
      router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onHandleLogin
  }
}
