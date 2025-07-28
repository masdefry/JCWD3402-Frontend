import { AiTwotoneMail } from 'react-icons/ai';
import { PiPasswordDuotone } from 'react-icons/pi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { SlBag } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa6';
export default function Page() {
  return (
    <>
      <div>
        <div className='flex items-center justify-between px-4 py-2 bg-gray-100'>
          <button className='btn bg-blue-300 text-black text-[0.6em]'>
            PLAY ZONE
          </button>
          <div>
            <div className='flex items-center gap-1'>
              <RiAccountPinCircleLine className='text-xl' />
              <p className='font-thin text-sm'>Signin | join LEGO Indonesia</p>
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
      <div className='flex justify-center p-32'>
        <div className='min-w-xl max-w-xl bg-gray-100 p-10 rounded-md'>
          <h1 className='text-2xl font-bold text-center'>
            Sign in or create your LEGO® account
          </h1>
          <form className='py-5'>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Email or username</legend>
              <div className='flex items-center gap-2 border-b-1 border-gray-300'>
                <AiTwotoneMail className='text-2xl text-gray-500' />
                <input
                  type='text'
                  placeholder='Type your email or username'
                  className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0 italic'
                />
              </div>
              <p className='label'>Error message here</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Password account</legend>
              <div className='flex items-center gap-2 border-b-1 border-gray-300'>
                <PiPasswordDuotone className='text-2xl text-gray-500' />
                <input
                  type='password'
                  placeholder='Type your password'
                  className='input border-none text-gray-500 bg-gray-100 w-full focus:outline-none focus:ring-0 italic'
                />
              </div>
              <p className='label'>Error message here</p>
            </fieldset>
            <button className='btn bg-blue-400 text-white rounded-full mt-3 py-6 w-1/2 mx-auto'>
              Signin
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
