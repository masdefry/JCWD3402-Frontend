import { create } from 'zustand';

interface IUseCounterStoreProps{
    counter: number;
    price: number;
    text: string;
    setCounter: () => void;
    setValue: (value: number) => void;
    setText: () => void;
    setPriceAndText: () => void;
}

const useCounterStore = create<IUseCounterStoreProps>((set) => ({
    counter: 0, 
    price: 0, 
    text: '',
    setCounter: () => set((state) => ({counter: state.counter + 1})),
    setValue: (value: number) => set((state) => ({ counter: value })), 
    setText: () => set((state) => ({text: 'abc'})),
    setPriceAndText: () => set((state) => ({text: 'abc', price: 10000}))
}));

export default useCounterStore;