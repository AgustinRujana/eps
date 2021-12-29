export default function HeroCard() {
  return (
    <>
      <section className=' font-montserrat text-darkBlue uppercase grid grid-cols-2 items-center gap-x-4'>
        <div className='text-center'>
          <div className='p-4 text-3xl'>
            <p>Descubre</p>
            <p className='text-4xl font-bold'>EPS Card</p>
            <p>Promociones Médicas</p>
            <p>Especiales para ti</p>
          </div>
          <div className='flex items-center justify-center font-semibold rounded-lg'>
            <p className='px-14 py-1 rounded-lg leading-tight bg-darkBlue text-white text-center'>
              Quiero <br /> mi EPS Card
            </p>
            <p className='px-8 underline'>Más información</p>
          </div>
        </div>
        <div className=''>
          <img className='rounded-lg h-full' src='/images/familia.jpg' />
        </div>
      </section>
      <section className=' font-montserrat text-darkBlue uppercase grid grid-cols-2 items-center gap-x-4'>
        <div className=''>
          <img className='rounded-lg h-full' src='/images/familia.jpg' />
        </div>
        <div className='text-center'>
          <div className='p-4 text-3xl'>
            <p>Descubre</p>
            <p className='text-4xl font-bold'>EPS Card</p>
            <p>Promociones Médicas</p>
            <p>Especiales para ti</p>
          </div>
          <div className='flex items-center justify-center font-semibold rounded-lg'>
            <p className='px-14 py-1 rounded-lg leading-tight bg-darkBlue text-white text-center'>
              Quiero <br /> mi EPS Card
            </p>
            <p className='px-8 underline'>Más información</p>
          </div>
        </div>
      </section>
    </>
  );
}
