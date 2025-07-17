import Image from 'next/image';
import Card from '@/components/card';

export default function Home() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
        <Card title='Web Development' src='https://' />
        <Card title='Visual Design' />
        <Card title='Digital Marketing' />
        <Card title='Data Science' />
      </div>
    </>
  );
}
