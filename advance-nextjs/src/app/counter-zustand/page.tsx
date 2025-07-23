'use client';
import useCounterStore from '@/store/useCounterStore';

export default function Page() {
    const { counter, setCounter, setValue } = useCounterStore();

  return <>
    <h1 className='ml-3 text-2xl'>{counter}</h1>
    <button onClick={setCounter} className='btn bg-red-500 text-white p-3 rounded-md'>+</button>
    <button onClick={() => setValue(100)} className='btn bg-red-500 text-white p-3 rounded-md'>Set Number</button>
    
  </>;
}
