import { PhoneIcon } from "@heroicons/react/outline";

export default function HeroCard2() {
  return (
    <>
      <section className='py-16 font-montserrat text-darkBlue grid grid-cols-2 items-center gap-x-4'>
        <div className='text-center'>
          <div className='p-4 text-xl'>
            <p className='text-4xl uppercase font-bold'>Siempre a tu lado</p>
            <p>Consultas virtuales con nuestros especialistas</p>
            <p>desde donde te encuentres.</p>
          </div>
          <div className='flex items-center justify-center font-semibold uppercase rounded-lg'>
            <p className='px-12 py-3 rounded-lg bg-darkBlue text-white text-center'>
              Agenda una cita
            </p>
          </div>
        </div>
        <div className=''>
          <img className='rounded-lg h-full' src='/images/medicos 2.jpg' />
        </div>
      </section>
      <section className='py-16 font-montserrat text-darkBlue grid grid-cols-2 items-center gap-x-4'>
        <div className=''>
          <img className='rounded-lg h-full' src='/images/gente.jpg' />
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
          <div className='flex items-center justify-center py-4 text-white bg-darkBlue uppercase rounded-l-lg'>
            {/* <img className='h-16' src='/logos/IsotipoGrupoEPS.svg' /> */}
            <PhoneIcon className="h-16 stroke-2	"/>
            <p className='rounded-lg  text-center text-2xl'>+504 2263 1111</p>
          </div>
        </div>
      </section>
    </>
  );
}
