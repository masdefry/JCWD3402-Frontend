import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { IPostsProps } from '@/app/social-media/page';

interface ICardProps{
    posts: IPostsProps[], 
    onHandleLike: (index: number) => void;
}

export default function Card(props: ICardProps) {
  return (
    <>
      {props?.posts?.map((item, index) => {
        return (
          <div
            key={index}
            className='card bg-base-100 col-span-1 shadow-sm'
          >
            <figure>
              <img
                src={item?.image}
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              {item?.isLike === false ? (
                <IoIosHeartEmpty
                  onClick={() => props?.onHandleLike(index)}
                  className='text-2xl'
                />
              ) : (
                <IoMdHeart
                  onClick={() => props?.onHandleLike(index)}
                  className='text-2xl text-red-500'
                />
              )}
              <h2 className='card-title'>{item?.title}</h2>
              <p>{item?.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
