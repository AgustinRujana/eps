import { PhoneIcon } from '@heroicons/react/outline';

export default function HeroCard2(props) {
  return (
    <>
      <section className='mx-auto max-w-7xl md:py-16 py-8 font-montserrat text-darkBlue grid md:grid-cols-2 items-center gap-x-4'>
        <div className='md:hidden'>
          <img className='h-full' src='/images/hero/SIEMPRE A TU LADO.jpg' />
        </div>
        <div className='text-center'>
          <div className='p-4 md:text-xl text-base'>
            <p className='md:text-4xl text-3xl uppercase font-bold mb-2'>
              Siempre a tu lado
            </p>
            <p>
              Consultas virtuales con nuestros especialistas desde donde te
              encuentres.
            </p>
          </div>
          <div
            className='flex items-center justify-center font-semibold uppercase rounded-lg'
            onClick={() => props.setFormOficinaActive(true)}
          >
            <p className='px-12 py-3 rounded-lg text-sm md:text-base bg-darkBlue text-white text-center'>
              Agenda una cita virtual
            </p>
          </div>
        </div>
        <div className='hidden md:block'>
          <img className='rounded-lg h-full' src='/images/hero/SIEMPRE A TU LADO.jpg' />
        </div>
      </section>
      <section className='mx-auto max-w-7xl md:py-16 py-8 font-montserrat text-darkBlue grid md:grid-cols-2 items-center gap-x-4'>
        <div className=''>
          <img className='md:rounded-lg h-full' src='/images/hero/NUESTRO CALL CENTER.jpg' />
        </div>
        <div className='text-center'>
          <div className='p-4 md:text-xl text-base'>
            <p className='md:text-4xl text-3xl uppercase font-bold mb-2'>
              Nuestro call center
            </p>
            <p>
              Estamos disponibles para tí. <br/> Comunícate con nuestro centro de
              atención al cliente y despeja todas tus dudas.
            </p>
          </div>
          <div className='flex items-center justify-center py-4 text-white bg-darkBlue uppercase md:rounded-l-lg'>
            <PhoneIcon className='md:h-16 h-12 stroke-2	' />
            <p className='rounded-lg text-center md:text-2xl text-lg'>+504 2263 1111</p>
          </div>
        </div>
      </section>
    </>
  );
}
