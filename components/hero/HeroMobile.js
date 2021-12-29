export default function HeroMobile() {
  return (
    <section className='py-16 font-montserrat grid grid-cols-2 items-center gap-x-4'>
      <div className='bg-darkBlue text-white'>
        <div className='p-4 text-xl'>
          <p className='text-4xl font-bold uppercase mb-2'>
            EPS Movil
          </p>
          <p>Estamos disponibles para tí.</p>
          <p>Comunícate con nuestro centro de atención</p>
          <p>al cliente y despeja todas tus dudas.</p>
        </div>
        <div className='flex items-center justify-center py-4 uppercase rounded-l-lg'>
          <img className='h-16' src='/logos/IsotipoGrupoEPS.svg' />
          <p className='rounded-lg text-white text-center text-2xl'>
            +504 2263 1111
          </p>
        </div>
      </div>
      <div className='text-center'>
        <div className='p-4 text-xl'>
          <p className='text-4xl font-bold uppercase mb-2'>
            Nuestro call center
          </p>
          <p>Estamos disponibles para tí.</p>
          <p>Comunícate con nuestro centro de atención</p>
          <p>al cliente y despeja todas tus dudas.</p>
        </div>
        <div className='flex items-center justify-center py-4 bg-darkBlue uppercase rounded-l-lg'>
          <img className='h-16' src='/logos/IsotipoGrupoEPS.svg' />
          <p className='rounded-lg text-white text-center text-2xl'>
            +504 2263 1111
          </p>
        </div>
      </div>
    </section>
  );
}
