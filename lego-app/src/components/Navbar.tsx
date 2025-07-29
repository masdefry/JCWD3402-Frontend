'use client';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { SlBag } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa6';
import useAuthStore from '@/stores/useAuthStore';

export default function Navbar() {
  const { email } = useAuthStore();

  return (
    <div>
      <div className='flex items-center justify-between px-4 py-2 bg-gray-100'>
        <button className='btn bg-blue-300 text-black text-[0.6em]'>
          PLAY ZONE
        </button>
        <div>
          <div className='flex items-center gap-1'>
            <RiAccountPinCircleLine className='text-xl' />
            {email ? (
              <p>{email}</p>
            ) : (
              <p className='font-thin text-sm'>Signin | join LEGO Indonesia</p>
            )}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between px-4 py-2 bg-yellow-400'>
        <div className='flex items-center gap-10 font-bold'>
          <img
            src='https://assets.lego.com/logos/v4.5.0/brand-lego.svg'
            className='w-16 h-16'
          />
          <p>Home</p>
          <p>Shop</p>
          <p>Discover</p>
        </div>
        <div className='flex items-center gap-5'>
          <SlBag className='text-2xl' />
          <FaRegHeart className='text-2xl' />
        </div>
      </div>
    </div>
  );
}
