import type { Metadata, ResolvingMetadata } from 'next';
interface IParams {
  params: {
    objectId: string;
  };
}

const onGetDetailProduct = async ({ objectId }: { objectId: string }) => {
  const res = await fetch(
    `http://localhost:3000/api/products/detail/${objectId}`,
    {
      cache: 'no-cache',
    }
  );

  if (!res.ok) throw new Error(`Product with id = ${objectId} not found`);

  const { data } = await res.json(); // Merubah response json menjadi object js

  return data;
};

export async function generateMetadata(
  { params }: IParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { objectId } = await params;

  // fetch data
  const product = await onGetDetailProduct({ objectId });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: product?.name,
    openGraph: {
      images: [product?.image01, ...previousImages],
    },
  };
}

export default async function Page({ params }: IParams) {
  const { objectId } = await params;
  const product = await onGetDetailProduct({ objectId });

  return (
    <>
      <h1>Detail Product</h1>
      <h1>{product?.name}</h1>
      <p>{product?.price}</p>
    </>
  );
}

// CSR/SSR/SSG/ISR
