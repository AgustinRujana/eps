export default function Cards({ item }) {
  function Card({ element, color }) {
    const classBtn =
      'px-6 py-1 uppercase text-white font-semibold rounded-full' + ' ' + color;

    return (
      <div className='col-span-1 text-center text-darkBlue leading-tight shadow-xl'>
        <img src='/images/familia.jpg' />
        <p className='py-2 font-bold tracking-tight'>{element.title}</p>
        <p className='px-1 text-left pb-4'>{element.content}</p>
        <a className={classBtn} href={`#${element.id}`}>
          Ver Más
        </a>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {item.cards.map((element) => (
        <Card element={element} color={item.color} />
      ))}
    </div>
  );
}
