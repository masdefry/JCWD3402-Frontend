import { create } from 'zustand';

interface IUseAuthStoreProps {
  email: string;
  setAuthLogin: () => void;
}

const useAuthStore = create<IUseAuthStoreProps>((set) => ({
  email: '',
  setAuthLogin: () => set({ email: 'xxx' }),
}));

export default useAuthStore;