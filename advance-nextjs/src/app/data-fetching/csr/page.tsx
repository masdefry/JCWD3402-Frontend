'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPosts } from '../ssr/page';

export default function Page() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const onFetchPosts = async () => {
    const res = await axios.get<IPosts[]>('http://localhost:3000/posts');

    setPosts(res?.data);
  };

  useEffect(() => {
    onFetchPosts();
  }, []);

  return (
    <>
      {posts?.map((post: IPosts, index: number) => {
        return <h1 key={index}>{post?.title}</h1>;
      })}
    </>
  );
}
