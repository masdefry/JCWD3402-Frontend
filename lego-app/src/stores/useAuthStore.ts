import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUseAuthStoreProps {
  email: string;
  objectId: string;
  setAuthLogin: ({ email, objectId }: { email: string, objectId: string }) => void;
}

const useAuthStore = create<IUseAuthStoreProps>()(
  persist(
    (set) => ({
      email: '',
      objectId: '',
      setAuthLogin: ({ email, objectId }) => set({ email: email, objectId: objectId }),
    }),
    {
      name: 'user-object',
      partialize: (state) => ({objectId: state?.objectId})
    }
  )
);

export default useAuthStore;
