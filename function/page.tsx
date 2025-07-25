'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [counter, setCounter] = useState<number>(0);
  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  // Mirip Seperti componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // Mirip Seperti componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate');
  }, [counter]);

  // Mirip Seperti componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  const onRegister = () => {
    event?.preventDefault();
    const username = inputUsername?.current?.value;
    const password = inputPassword?.current?.value;
    console.log(username);
    console.log(password);
  };

  return (
    <>
      <button
        className='p-3 btn bg-blue-300'
        onClick={onDecrement}
      >
        -
      </button>
      <h1 className='text-2xl font-bold'>{counter}</h1>
      <button
        className='p-3 btn bg-blue-300'
        onClick={onIncrement}
      >
        +
      </button>
      <Link href={'/class'}>Go to Class Page</Link>

      <form
        className='mt-10'
      >
        <input
          type='text'
          ref={inputUsername}
          placeholder='Enter your username'
          className='input'
        />
        <br />
        <input
          type='password'
          ref={inputPassword}
          placeholder='Enter your password'
          className='input'
        />
        <br />
        <button
          className='btn bg-blue-300 text-white'
          onClick={onRegister}
        >
          Register
        </button>
      </form>
    </>
  );
}
