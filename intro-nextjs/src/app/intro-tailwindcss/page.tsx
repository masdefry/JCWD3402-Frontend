import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1 className='text-green-500 text-[1000px] bg-yellow-950'>
        Purwadhika School
      </h1>

      <div className='grid grid-cols-3 grid-rows-3'>
        <div className='bg-yellow-500 text-black col-span-2'>Box-01</div>
        <div className='bg-green-500 text-black'>Box-02</div>
        <div className='bg-gray-500 text-black'>Box-03</div>
      </div>

      <h1 className='text-yellow-500 md:text-blue-500 lg:text-green-100'>
        Web Development
      </h1>

      <Link href='/profile'>Go to Profile</Link>
      <br />
      <br />
      <a href='/profile'>Go to Signin Anchor</a>
    </>
  );
}
