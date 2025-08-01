'use client';
import Image from 'next/image';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { PiDropboxLogoFill } from 'react-icons/pi';
import { FiShoppingBag } from 'react-icons/fi';
import { AiTwotoneHeart } from 'react-icons/ai';
import instance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);

  const onGetProducts = async () => {
    try {
      const res = await instance.get('/api/products');
      setProducts(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <div className='py-3'>
      <section>
        {/* Section: Hero */}
        <img src='https://www.lego.com/cdn/cs/set/assets/blt0eb7608e58543245/EX-43008-202507-Home-PS-Hero-Standard-Large.jpg?format=webply&fit=crop&quality=70&width=1600&height=500&dpr=1.5' />
      </section>
      <section>
        {/* Section: Product List */}
        <h1 className='text-3xl font-bold text-center my-10'>
          Find the perfect set
        </h1>
        <div className='grid grid-cols-5 gap-3 px-3'>
          {products?.map((product, index) => {
            return (
              <Link key={index} href={`/detail-product/${product?.objectId}`}>
                <div className='border border-gray-300 p-3'>
                  <div className='relative'>
                    <img
                      src={
                        'https://www.lego.com/cdn/cs/set/assets/blt98568413538e8f35/75417_Prod_en-gb.png?format=webply&fit=bounds&quality=90&width=250&height=250&dpr=1.5'
                      }
                    />
                    <AiTwotoneHeart className='absolute top-2 p-1 rounded-full bg-gray-300 text-red-500 text-3xl shadow-md hover:bg-gray-400 transition' />
                    <span className='bg-yellow-500 px-4 absolute top-2 right-2 text-sm font-light'>
                      New
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      <LiaBirthdayCakeSolid className='text-xl' />
                      <p className='text-md'>{product?.ages}+</p>
                    </div>
                    <div className='flex items-center'>
                      <PiDropboxLogoFill className='text-xl' />
                      <p className='text-md'>{products?.totalPieces}</p>
                    </div>
                  </div>
                  <h1 className='mt-3'>{product?.name}</h1>
                  <p className='mt-10 font-bold'>${product?.price}</p>
                  <button className='btn bg-orange-600 text-white rounded-full font-light'>
                    <FiShoppingBag /> Add to cart
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
