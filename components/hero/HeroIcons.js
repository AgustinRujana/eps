import ScrollSlideUp from '../general/ScrollSlideUp';

export default function HeroIcons({ content }) {
  return (
    <section
      id='servicios'
      className='mx-auto max-w-7xl md:px-1/8 py-16 md:text-left text-center text-darkBlue'
    >
      <ScrollSlideUp>
        <span className='uppercase md:text-4xl text-2xl'>
          Todo en un mismo lugar
        </span>
        <div className='grid md:grid-rows-5 md:grid-flow-col md:gap-4 gap-2 md:mt-1 mt-4'>
          {content.map((item) => (
            <div className='flex shadow-xl hover:shadow-2xl items-center p-2 bg-slate-100 hover:bg-slate-200 md:rounded-xl transition-all ease-in-out duration-500'>
              <img className='h-16 md:mr-1 mr-4' src={item.icon} />
              <span className='font-montserrat md:text-xl text-base font-bold uppercase'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </ScrollSlideUp>
    </section>
  );
}
