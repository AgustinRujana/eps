export default function HeroIcons({ content }) {
  return (
    <section className='mx-auto max-w-7xl px-1/8 py-16 text-darkBlue'>
      <span className='uppercase text-4xl'>
        Todo en un mismo lugar
      </span>
      <div className='grid grid-rows-5 grid-flow-col gap-4 mt-1'>
        {content.map((item) => (
          <div className='flex items-center p-2 bg-slate-100 rounded'>
            <img className='h-16 mr-1' src={item.icon} />
            <span className='font-montserrat text-xl font-bold uppercase'>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
