import { CiMenuFries } from 'react-icons/ci';

export default function Page() {
  return (
    <>
      {/* Navbar Section */}
      <nav className='h-32 bg-gray-100 flex justify-between items-center px-10'>
        <div className='flex gap-5'>
          <div>Logo</div>
          <h1>Company Name</h1>
        </div>
        <div className='flex gap-3'>
          <p className='hidden lg:block'>Home</p>
          <p className='hidden lg:block'>About</p>
          <p className='hidden lg:block'>Contact-Us</p>
          <CiMenuFries className='lg:hidden' />
        </div>
      </nav>
    </>
  );
}
