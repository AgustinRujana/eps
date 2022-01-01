import Cards from "./Cards";

export default function Section({ item }) {
  const classTitle =
    'w-2/3 p-2 rounded-r-full text-white font-extrabold tracking-wide uppercase ' +
    item.color;

  return (
    <div>
      <div className='flex items-center'>
        <p className={classTitle}>{item.title}</p>
      </div>
      <Cards item={item}/>
    </div>
  );
}
