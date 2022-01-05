export default function HeroCard(props) {
  return (
    <>
      <section className='mx-auto max-w-7xl md:py-16 font-montserrat text-darkBlue uppercase grid md:grid-cols-2 items-center gap-x-4'>
        <div className='md:hidden'>
          <img className='h-full' src='/images/familia.jpg' />
        </div>
        <div className='text-center'>
          <div className='p-4 md:text-3xl text-2xl'>
            <p>Descubre</p>
            <p className='md:text-4xl text-3xl font-bold'>EPS Card</p>
            <p>Promociones Médicas</p>
            <p>Especiales para ti</p>
          </div>
          <div className='grid w-full sm:grid-cols-2 grid-cols-1 items-center justify-center font-semibold rounded-lg md:px-2'>
            <div
              className='bg-darkBlue p-2 md:rounded-lg col-span-1'
              onClick={() => props.setFormActive(true)}
            >
              <p className='leading-tight text-white'>
                Quiero <br /> mi EPS Card
              </p>
            </div>
            <div className='col-span-1 p-2'>
              <a href='/eps-card'>
                <p className='px-8 underline'>Más información</p>
              </a>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <img className='rounded-lg h-full' src='/images/familia.jpg' />
        </div>
      </section>
      <section className='mx-auto max-w-7xl md:py-16 py-8 font-montserrat text-darkBlue grid md:grid-cols-2 items-center gap-x-4'>
        <div className=''>
          <img className='md:rounded-lg h-full' src='/images/gente.jpg' />
        </div>
        <div className='text-center'>
          <div className='p-4 md:text-xl text-base'>
            <p className='md:text-4xl text-3xl uppercase font-bold mb-2'>Especialidades</p>
            <p>Revolucionamos la atención médica con un servicio que valora tu tiempo y prioriza tu comodidad. Puedes agendar consultas con todos los especialistas que necesites, en el horario más conveniente para tí.</p>
          </div>
          <div className='uppercase grid w-full sm:grid-cols-2 grid-cols-1 items-center justify-center font-semibold rounded-lg md:px-2'>
            <div
              className='bg-darkBlue p-4 md:rounded-lg col-span-1'
              onClick={() => props.setFormOficiaActive(true)}
            >
              <p className='leading-tight text-white'>Agenda una cita</p>
            </div>
            <div className='col-span-1 p-2'>
              <a href='/especialidades'>
                <p className='px-8 underline'>Ver especialidades</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
