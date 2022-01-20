export default function BannerMain() {
  return (
    <section
      style={{
        backgroundImage: `url('/images/epsCard.jpeg')`,
      }}
      className='overflow-hidden w-full flex items-end justify-end h-[90vh] bg-fixed bg-center bg-cover'
    >
      <div className='relative md:-bottom- md:-right-1/20 text-center flex items-center justify-center md:h-1/4 h-full w-full md:w-1/2'>
        <img
          className='h-fit absolute z-0 md:block hidden'
          src='/images/circle.svg'
        />
        <div className='bg-darkBlue text-left md:text-center w-full p-4 md:p-0 md:w-fit md:bg-transparent z-10 sm:text-3xl text-xl text-white font-bold'>
          <p className='text-left sm:text-5xl text-3xl font-extrabold text-teal-400 '>
            EPS CARD
          </p>
          <p className=''>
            Ahorra hasta un <span className=' text-teal-400'>60%</span>
            <br /> en gastos médicos.
          </p>
          <a href="#contratar">
          <button className='p-2 mt-4 mb-8 bg-teal-400 text-darkBlue font-semibold uppercase rounded-lg'>
            Contratar
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
