export default function BannerMain() {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero/EPS CARD.png')`,
      }}
      className=' w-full flex items-end justify-end h-[90vh] bg-fixed bg-center bg-cover'
    >
      <div className='relative md:-bottom- md:-right-1/20 text-center flex items-center justify-center md:h-1/4 h-full w-full md:w-1/2'>
        <img
          className='h-fit absolute z-0 md:block hidden'
          src='/images/circle.svg'
        />
        <div className='bg-darkBlue text-left md:text-center w-full p-4 md:p-0 md:w-fit md:bg-transparent z-10 text-3xl text-white font-bold'>
          <p className='text-left text-5xl font-extrabold text-teal-400 '>
            EPS CARD
          </p>
          <p className=''>
            Ahorra hasta un <span className=' text-teal-400'>60%</span>
            <br /> en gastos médicos.
          </p>
          <button className='p-2 my-4 bg-teal-400 text-darkBlue font-semibold uppercase rounded-lg'>
            Contratar
          </button>
        </div>
      </div>
    </section>
  );
}
