'use client';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useState } from 'react';

export default function Page() {
  const [like, setLike] = useState<boolean>(false);

  const onHandleLike = () => {
    setLike(true);
  };

  const onHandleDislike = () => {
    setLike(false);
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-3 p-32'>
        <div className='card bg-base-100 col-span-1 shadow-sm'>
          <figure>
            <img
              src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            {like.toString()}
            {like === true ? (
              <IoMdHeart
                onClick={onHandleDislike}
                className='text-2xl text-red-500'
              />
            ) : (
              <IoIosHeartEmpty
                onClick={onHandleLike}
                className='text-2xl'
              />
            )}
            {/* <IoIosHeartEmpty
              onClick={onHandleLike}
              className='text-2xl'
            />
            <IoMdHeart
              onClick={onHandleDislike}
              className='text-2xl text-red-500'
            /> */}
            <h2 className='card-title'>Post Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
