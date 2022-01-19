import { BadgeCheckIcon, XIcon } from '@heroicons/react/outline';

export default function CardsPanel(props) {
  return (
    <section className='md:m-8 my-8'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {props.content.map((item) => (
          <div className='divide-y divide-darkBlue col-span-1 shadow-2xl bg-slate-50 md:rounded-xl md:p-8 p-4'>
            <div>
              <p className='text-darkBlue font-extrabold text-xl'>
                {item.title}
              </p>
              <p className='text-darkBlue font-extrabold text-xl'>
                $00,00 Mensuales
              </p>
            </div>
            <div className='p-2'>
              <div className=''>
                <div className='flex'>
                  {item.clinica ? (
                    <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  ) : (
                    <XIcon className='h-6 mr-1 text-red-600 flex-shrink-0' />
                  )}
                  <p
                    className={
                      item.clinica ? 'text-darkBlue font-bold sm:text-base text-sm leading-tight tracking-tight' : 'text-gray-600 font-bold sm:text-base text-sm leading-tight tracking-tight'
                    }
                  >
                    Clínica en tu hogar
                  </p>
                </div>
                <div className={item.clinica ? 'sm:text-base text-sm leading-tight tracking-tight' : 'text-gray-500 sm:text-base text-sm leading-tight tracking-tight'}>
                  <p>Visita a domicilio médico general o especialista. </p>
                  <p>Exámenes de laboratorio.</p>
                  <p>Aplicación de vacunas y medicamentos.</p>
                  <p>
                    Atención de emergencia en casa y traslado en ambulancia.
                  </p>
                  <p>
                    Descuento en enfermería y fisioterapia de paciente en casa.
                  </p>
                </div>
              </div>
              <div className='pt-2 sm:text-base text-sm leading-tight tracking-tight'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>
                    Clínicas con médicos especialistas para toda la familia
                  </p>
                </div>
                <p>Hasta 60% de descuento en medicina interna y familiar.</p>
              </div>
              <div className='pt-2 sm:text-base text-sm leading-tight tracking-tight'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>Laboratorios</p>
                </div>
                <p>Hasta 30% de descuento</p>
              </div>
              <div className='pt-2 sm:text-base text-sm leading-tight tracking-tight'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>
                    Medicamentos y farmacia
                  </p>
                </div>
                <p>Descuento en medicinas y productos de farmacia</p>
              </div>
              <div className='pt-2 sm:text-base text-sm leading-tight tracking-tight'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>Adicionales</p>
                </div>
                <p>
                  Por solo $00,00 mensuales agrega a cualquier persona
                  adicional.
                </p>
              </div>
              <div className='w-fit mx-auto px-6 py-2 bg-green-600 hover:bg-darkBlue transition-all duration-500 ease-in-out cursor-pointer rounded-xl mt-2'>
                <p className='font-semibold text-white uppercase'>Contratar</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='md:w-fit w-full mx-auto px-4 py-2 bg-darkBlue hover:bg-green-600 transition-all ease-in-out duration-500 cursor-pointer my-6 text-white text-center md:rounded-lg sm:text-xl text-base leading-tight tracking-tight'>
        <p className='uppercase font-semibold'>
          Quiero que me contacte un asesor EPS Card
        </p>
      </div>
    </section>
  );
}
