export default function Cards({ item }) {
  function Card({ element, color }) {
    const classBtn =
      'transition-all ease-in-out duration-500 cursor-pointer mx-1/8 my-4 py-1 uppercase text-white font-semibold rounded-full hover:drop-shadow-xl hover:shadow-lg' +
      ' ' +
      color;

    return (
      <div className='col-span-1 grid text-center text-darkBlue leading-tight shadow-xl rounded-xl'>
        <img className='rounded-t-xl' src={element.image}/>
        <p className='p-2 font-bold tracking-tight'>{element.title}</p>
        <p className='px-2 text-left'>{element.content}</p>
        <a className="cursor-default" href={`programas/${element.id}`}>
          <div className={classBtn}>Ver Más</div>
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
