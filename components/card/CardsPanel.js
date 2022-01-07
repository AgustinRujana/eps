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
                      item.clinica ? 'text-darkBlue font-bold' : 'text-gray-600 font-bold'
                    }
                  >
                    Clínica en tu hogar
                  </p>
                </div>
                <div className={item.clinica ? '' : 'text-gray-500'}>
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
              <div className='pt-2'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>
                    Clínicas con médicos especialistas para toda la familia
                  </p>
                </div>
                <p>Hasta 60% de descuento en medicina interna y familiar.</p>
              </div>
              <div className='pt-2'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>Laboratorios</p>
                </div>
                <p>Hasta 30% de descuento</p>
              </div>
              <div className='pt-2'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>
                    Medicamentos y farmacia
                  </p>
                </div>
                <p>Descuento en medicinas y productos de farmacia</p>
              </div>
              <div className='pt-2'>
                <div className='flex'>
                  <BadgeCheckIcon className='h-6 mr-1 text-green-600 flex-shrink-0' />
                  <p className='text-darkBlue font-bold'>Adicionales</p>
                </div>
                <p>
                  Por solo $00,00 mensuales agrega a cualquier persona
                  adicional.
                </p>
              </div>
              <div className='w-fit mx-auto px-6 py-2 bg-green-600 rounded-xl'>
                <p className='font-semibold text-white uppercase'>Contratar</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-fit mx-auto px-4 py-2 bg-darkBlue my-6 text-white text-center md:rounded-lg'>
        <p className='uppercase font-semibold'>
          Quiero que me contacte un asesor EPS Card
        </p>
      </div>
    </section>
  );
}
