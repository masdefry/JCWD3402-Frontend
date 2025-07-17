export default function Card(props: any) {
  return (
    <div style={{ border: '1px solid black' }}>
      <img 
        src={props?.src}
      />
      <h1>{props?.title}</h1>
      <span>On Campus</span>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quae,
        necessitatibus optio ea asperiores animi voluptatibus impedit veritatis
        ut commodi quos sit tempora? Dicta error temporibus eligendi dolorum
        repellat sunt?
      </p>
    </div>
  );
}
