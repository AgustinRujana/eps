export default function NumbersPanel(props) {
  return (
    <section className='grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:my-16 my-8 sm:mx-4 gap-4'>
      {props.content.map((card) => (
        <div className='bg-slate-50 shadow-xl hover:bg-slate-100 hover:shadow-2xl h-full items-center rounded-xl col-span-1 grid grid-cols-4 p-4'>
          <div className={`${card.color} font-extrabold col-span-1 text-9xl tracking-tighter leading-none pr-1`}>
            {card.id}
          </div>
          <div className='col-span-3 tracking-tight leading-tight'>
            <p className="mb-2 font-extrabold text-slate-700">{card.title}</p>
            <p className="text-sm">{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
