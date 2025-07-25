import { useState } from 'react';

export interface IPostsProps {
  title: string;
  image: string;
  description: string;
  isLike: boolean;
}

export default function useDisplayPosts() {
  const [posts, setPosts] = useState<IPostsProps[]>([
    {
      title: 'City Life Adventures',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156',
      description: 'Experience the vibrant energy and culture of urban living.',
      isLike: false,
    },
    {
      title: 'Tranquility at the Beach',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      description: 'Relax by the ocean and listen to the soothing waves.',
      isLike: false,
    },
    {
      title: 'Night Under the Stars',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      description: 'Spend a peaceful night camping and stargazing in the wild.',
      isLike: false,
    },
    {
      title: 'Autumn Forest Walks',
      image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce',
      description:
        'Enjoy the vibrant colors and crisp air of a fall forest walk.',
      isLike: false,
    },
  ]);

  const onHandleLike = (index: number) => {
    const currentPosts = [...posts];
    if (currentPosts[index].isLike === true) {
      currentPosts[index].isLike = false;
    } else {
      currentPosts[index].isLike = true;
    }
    setPosts(currentPosts);
  };

  return {
    posts,
    setPosts,
    onHandleLike,
  };
}
