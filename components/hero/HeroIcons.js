import ScrollSlideUp from '../general/ScrollSlideUp';

export default function HeroIcons({ content }) {
  return (
    <section
      id='servicios'
      className='mx-auto w-fit max-w-7xl py-16 md:text-left text-center'
    >
      <ScrollSlideUp>
        <span className='uppercase md:text-4xl text-3xl'>
          Todo en un mismo lugar
        </span>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-2 md:mt-1 mt-4'>
          {content.map((item) => (
            <div className='lg:h-48 lg:w-48 xl:w-56 xl:h-56 md:w-full h-48 grid items-center justify-center col-span-1 text-center shadow  text-darkBlue hover:text-white hover:shadow-xl p-2 bg-slate-50 hover:bg-sky-500 transition-all ease-in-out duration-500'>
              <img className='h-16 mx-auto' src={item.icon} />
              <span className='font-montserrat text-base font-bold tracking-tight'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </ScrollSlideUp>
    </section>
  );
}
