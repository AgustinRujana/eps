export default function HeroCard(props) {
  return (
    <>
      <section className='mx-auto max-w-7xl py-16 font-montserrat text-darkBlue uppercase grid md:grid-cols-2 items-center gap-x-4'>
      <div className='md:hidden'>
          <img className='h-full' src='/images/familia.jpg' />
        </div>
        <div className='text-center'>
          <div className='p-4 text-3xl'>
            <p>Descubre</p>
            <p className='text-4xl font-bold'>EPS Card</p>
            <p>Promociones Médicas</p>
            <p>Especiales para ti</p>
          </div>
          <div className='flex items-center justify-center font-semibold rounded-lg '>
            <p
              className='md:px-14  w-1/2 md:py-1 p-2 md:rounded-lg rounded-r-md leading-tight bg-darkBlue text-white text-center'
              onClick={() => props.setFormActive(true)}
            >
              Quiero <br /> mi EPS Card
            </p>
            <a href='/eps-card'>
              <p className='px-8 underline'>Más información</p>
            </a>
          </div>
        </div>
        <div className='hidden md:block'>
          <img className='rounded-lg h-full' src='/images/familia.jpg' />
        </div>
      </section>
      <section className='mx-auto max-w-7xl py-16 font-montserrat text-darkBlue grid grid-cols-2 items-center gap-x-4'>
        <div className=''>
          <img className='rounded-lg h-full' src='/images/gente.jpg' />
        </div>
        <div className='text-center'>
          <div className='p-4 text-xl'>
            <p className='text-4xl font-bold uppercase mb-2'>Especialidades</p>
            <p>Revolucionamos la atención médica con un servicio</p>
            <p>que valora tu tiempo y prioriza tu comodidad.</p>
            <p>Puedes agendar consultas con todos los especialistas</p>
            <p>que necesites, en el horario más conveniente para tí.</p>
          </div>
          <div className='flex items-center justify-center uppercase font-semibold rounded-lg'>
            <p
              className='px-12 py-3 rounded-lg bg-darkBlue text-white text-center'
              onClick={() => props.setFormOficinaActive(true)}
            >
              Agenda una cita
            </p>
            <a href='/especialidades'>
              <p className='px-8 underline'>Ver especialidades</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
