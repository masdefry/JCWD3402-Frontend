import { IPosts } from '../ssr/page';

const onFetchPosts = async () => {
  const res = await fetch('http://localhost:3000/posts');
  const posts = await res.json();

  return posts;
};

export const revalidate = 60;

export default async function Page() {
  const posts = await onFetchPosts();

  return (
    <>
      {posts?.map((post: IPosts, index: number) => {
        return <h1 key={index}>{post?.title}</h1>;
      })}
    </>
  );
}
