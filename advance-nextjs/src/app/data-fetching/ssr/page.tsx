const onFetchPosts = async () => {
  const res = await fetch('http://localhost:3000/posts', {
    cache: 'no-store',
  });
  const posts = await res.json();

  return posts;
};

export interface IPosts {
  id: string;
  title: string;
  views: number;
}

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
