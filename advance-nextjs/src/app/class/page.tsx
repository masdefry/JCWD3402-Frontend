'use client';
import Link from 'next/link';
import React from 'react';

// This.state (state)   : Mirip variable fungsinya menyimpan data secara local. Sifat state akan men-trigger component untuk di render ulang tiap terjadi perubahan data
interface IPageProps {}

interface IState {
  counter: number;
}

// Lifecycle Method

class Page extends React.Component<IPageProps, IState> {
  constructor(props: IPageProps) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  // Eksekusi ketika halaman dibuka
  componentDidMount() {
    console.log('componentDidMount');
  }

  // Eksekusi ketika terjadi perubahan state/props
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // Eksekusi ketika halaman akan ditutup
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render(): React.ReactNode {
    return (
      <>
        <h1 className='text-2xl font-bold'>This is Component using Class</h1>

        <div className='flex items-center'>
          <button
            className='btn bg-red-500 p-3 ml-3'
            onClick={this.onDecrement}
          >
            -
          </button>
          <h1 className='text-2xl'>{this.state.counter}</h1>
          <button
            className='btn bg-red-500 p-3 ml-3'
            onClick={this.onIncrement}
          >
            +
          </button>
        </div>

        <Link href={'/'}>
          Go to Home Page 
        </Link>
      </>
    );
  }
}

export default Page;

let counter = 1;
counter++;

let num = 1;
num = num + 1;
