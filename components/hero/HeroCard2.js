import { PhoneIcon } from '@heroicons/react/outline';

export default function HeroCard2(props) {
  return (
    <>
      <section className='mx-auto max-w-7xl md:py-16 py-8 font-montserrat text-darkBlue grid md:grid-cols-2 items-center gap-x-4'>
        <div className='md:hidden'>
          <img
            className='h-full shadow-2xl'
            src='/images/citaVirtual.jpeg'
          />
        </div>
        <div className=''>
          <div className='p-4 md:text-xl text-base'>
            <p className='md:text-3xl text-2xl font-bold'>Siempre a tu lado</p>
            <p className='leading-tight tracking-tight text-sm sm:text-base'>
              Consultas virtuales con nuestros especialistas desde donde te
              encuentres.
            </p>
          </div>
          <div className='grid w-full grid-cols-1 items-center justify-center font-semibold rounded-lg md:px-2'>
            <div
              className='bg-green-600 mx-auto md:mx-0 w-fit px-4 py-2 shadow hover:shadow-2xl h-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-all ease-in-out duration-500 col-span-1'
              onClick={() => props.setFormOficinaActive(true)}
            >
              <p className='leading-tight text-white'>
                Agenda una cita virtual
              </p>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <img
            className='rounded-lg h-full shadow-2xl'
            src='/images/citaVirtual.jpeg'
          />
        </div>
      </section>
      <section className='mx-auto max-w-7xl md:py-16 py-8 font-montserrat text-darkBlue grid md:grid-cols-2 items-center gap-x-4'>
        <div className=''>
          <img
            className='md:rounded-lg h-full shadow-2xl'
            src='/images/callCenter.jpeg'
          />
        </div>
        <div className=''>
          <div className='p-4'>
            <p className='md:text-3xl text-2xl font-bold'>
              Nuestro call center
            </p>
            <p className='leading-tight tracking-tight text-sm sm:text-base'>
              Estamos disponibles para tí. <br /> Comunícate con nuestro centro
              de atención al cliente y despeja todas tus dudas.
            </p>
          </div>
          <div className='flex items-center justify-center py-4 text-darkBlue hover:text-fuchsia-800 hover:scale-125 transition-all ease-in-out duration-1000 uppercase md:rounded-l-lg'>
            <PhoneIcon className='md:h-14 h-12' />
            <p className='rounded-lg font-extrabold text-center md:text-4xl text-2xl'>
              +504 2263 1111
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
