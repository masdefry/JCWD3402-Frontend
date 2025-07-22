'use client';

import Card from '@/features/social-media/components/Card';
import useDisplayPosts from '@/features/social-media/hooks/useDisplayPosts';

export default function Page() {
  const { posts, setPosts, onHandleLike } = useDisplayPosts()

  return (
    <>
      <div className='grid grid-cols-3 gap-3 p-32'>
        <Card
          posts={posts}
          onHandleLike={onHandleLike}
        />
      </div>
    </>
  );
}

// // Copy by Reference
// const arr = [1, 2, 3]; // [100, 2, 3]
// const newArr = arr; // [100, 2, 3];
// newArr[0] = 100;

// // Copy by Value
// const arr [ 'a', 'b', 'c']; // [a, b, c]
// const newArr = [...arr] // [xyz, b, c]
// newArr[0] = 'xyz'
