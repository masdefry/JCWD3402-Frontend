'use client';
import axios from 'axios';
import React, { useEffect } from 'react';
import useAuthStore from '@/stores/useAuthStore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { objectId, setAuthLogin } = useAuthStore();
  const router = useRouter();

  const onSessionLogin = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/api/authentication/session-login',
        {
          headers: {
            Authorization: objectId,
          },
        }
      );

      setAuthLogin({ email: res?.data?.data?.email, objectId });
    } catch (error) {
      setAuthLogin({ email: '', objectId: '' });
      toast.error('Something error');
      router.replace('/signin');
    }
  };

  // componentDidUpdate
  useEffect(() => {
    if (objectId) {
      onSessionLogin();
    }
  }, [objectId]);

  return <>{children}</>;
}

export default AuthProvider;
