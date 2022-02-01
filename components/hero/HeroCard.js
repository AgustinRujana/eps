import ScrollSlideUp from '../general/ScrollSlideUp';

export default function HeroCard(props) {
  return (
    <>
      <section id='card'>
        <ScrollSlideUp>
          <div className='mx-auto max-w-7xl md:py-16 font-montserrat text-darkBlue grid md:grid-cols-2 items-center gap-x-4'>
            <div className='md:hidden shadow-2xl'>
              <img className='flex' src='/images/epsCard.jpeg' />
            </div>
            <div className='font-bold'>
              <div className='p-4 md:text-3xl text-2xl'>
                <p>
                  Descubre{' '}
                  <span className='uppercase md:text-4xl text-3xl font-extrabold tracking-tighter'>
                    EPS Card
                  </span>
                </p>
                <p>Promociones médicas</p>
                <p>especiales para ti</p>
              </div>
              <div className='grid w-full sm:grid-cols-2 grid-cols-1 items-center justify-center font-semibold rounded-lg md:px-2'>
                <div
                  className='bg-green-600 p-2 shadow hover:shadow-2xl h-full flex items-center justify-center  cursor-pointer hover:bg-green-500 transition-all ease-in-out duration-500 col-span-1'
                  onClick={() => props.setFormActive(true)}
                >
                  <p className='leading-tight text-white tracking-tighter'>
                    Contratar EPS CARD
                  </p>
                </div>
                <div className='col-span-1 h-full shadow hover:shadow-2xl flex items-center justify-center bg-sky-500 text-white p-2 hover:bg-green-500 transition-all ease-in-out duration-500'>
                  <a href='/eps-card'>
                    <p className='px-8 underline font-normal'>
                      Más información
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className='hidden md:block shadow-2xl'>
              <img className='rounded-lg flex' src='/images/epsCard.jpeg' />
            </div>
          </div>
        </ScrollSlideUp>
      </section>
      <section>
        <ScrollSlideUp>
          <div className='mx-auto max-w-7xl md:py-16 py-8 font-montserrat text-darkBlue grid md:grid-cols-2 items-center gap-x-4'>
            <div className=''>
              <img
                className='md:rounded-lg flex shadow-2xl'
                src='/images/especialidades.jpeg'
              />
            </div>
            <div className=''>
              <div className='p-4'>
                <p className='md:text-3xl text-2xl font-bold'>Especialidades</p>
                <p className='leading-tight tracking-tight text-sm sm:text-base'>
                  Revolucionamos la atención médica con un servicio que valora
                  tu tiempo y prioriza tu comodidad. Puedes agendar consultas
                  con todos los especialistas que necesites, en el horario más
                  conveniente para tí.
                </p>
              </div>
              <div className='grid w-full sm:grid-cols-2 grid-cols-1 items-center justify-center font-semibold rounded-lg md:px-2'>
                <a href='/solicitar-cita'>
                  <div
                    className='bg-green-600 p-2 shadow hover:shadow-2xl h-full flex items-center justify-center  cursor-pointer hover:bg-green-500 transition-all ease-in-out duration-500 col-span-1'
                    // onClick={() => props.setFormOficiaActive(true)}
                  >
                    <p className='leading-tight text-white '>Agenda una cita</p>
                  </div>
                </a>
                <div className='col-span-1 h-full shadow hover:shadow-2xl flex items-center font-normal justify-center bg-sky-500 text-white p-2 hover:bg-green-500 transition-all ease-in-out duration-500'>
                  <a href='/especialidades'>
                    <p className='px-8 underline'>Ver especialidades</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollSlideUp>
      </section>
    </>
  );
}
